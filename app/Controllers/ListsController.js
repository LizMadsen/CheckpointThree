import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../utils/LocalStorage.js"

function _draw() {
    const lists = ProxyState.lists
    let template = ''
    lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}

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
        console.log(form)
        const rawList = {
            name: form.name.value,
            // numberOfTasks: 0,
        }

        listsService.createList(rawList)

        // @ts-ignore
        form.reset()
    }

    removeList(id) {
        listsService.removeList(id)
    }
}