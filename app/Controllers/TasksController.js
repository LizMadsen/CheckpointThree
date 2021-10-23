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
}