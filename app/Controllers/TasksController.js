import { tasksService } from "../Services/TasksService.js"


export class TasksController {
    constructor() {
    }

    createTask(lID) {
        window.event.preventDefault()
        const form = window.event.target
        let taskData = {
            name: form.taskName.value,
            listID: lID
        }

        console.log('creating task', taskData)
        tasksService.createTask(taskData)
    }
}