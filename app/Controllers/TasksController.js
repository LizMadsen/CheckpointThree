import { tasksService } from "../Services/TasksService.js"
import { ProxyState } from "../AppState.js"


export class TasksController {
    constructor() {
    }

    createTask(listID) {
        window.event.preventDefault()
        const form = window.event.target
        let taskData = {
            name: form.taskName.value,
            listID: listID
        }

        tasksService.createTask(taskData)
    }

    removeTask(id, listID) {
        let result = window.confirm("Are you sure you want to delete this task?")
        console.log(result)
        if (result) {
            tasksService.removeTask(id, listID)
        }
    }
}