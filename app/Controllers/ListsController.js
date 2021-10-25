import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
    const lists = ProxyState.lists
    let template = ''
    lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}

let bgColor = ''

export class ListsController {
    constructor() {
        ProxyState.on('lists', _draw)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', _draw)
        ProxyState.on('tasks', saveState)

        loadState()
        _draw()
    }

    createList() {
        window.event.preventDefault()
        const form = window.event.target
        //let bgColor = document.getElementById('colorpicker').getAttribute('value')
        //console.log(bgColor)
        const rawList = {
            // @ts-ignore
            name: form.name.value,
            color: bgColor,
            numberOfTasks: 0,
            tasksRemaining: 0
        }

        listsService.createList(rawList)

        // @ts-ignore
        form.reset()
    }

    removeList(id) {
        let result = window.confirm("Are you sure you want to delete this list?")
        console.log(result)
        if (result) {
            listsService.removeList(id)
        }
    }

    colorPicked(value) {
        bgColor = value;
    }
}