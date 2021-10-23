import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.numberOfTasks = data.numberOfTasks
    }

    get Template() {
        return `
        <div class="col-3 bg-light shadow rounded m-1">
            <div class="row">
                <div class="col-12 bg-primary p-5 text-center"><h4>${this.name}</h4>
                <div class="col-12 text-center">
                    ${this.numberOfTasks}
                </div>
                </div>
                <button class="btn btn-success" onclick="app.listsController.removeList('${this.id}')" > Remove List
                </button>
                <b>Tasks</b>
                <div class="row  bg-light darken-20  shadow-inset">
                    ${this.getTasks()}
                </div>
            </div>
            <form class="row align-items-end" onsubmit="app.tasksController.createTask('${this.id}')">
                <div class="col-10">
                    <input type="text" class="form-control" name="taskName" id="" aria-describedby="helpId" placeholder="Add task">
                </div>
                <button class="btn btn-info col-2"> Add
                </button>
            </form>
         </div>
`
    }

    getTasks() {
        const tasks = ProxyState.tasks.filter(t => this.id == t.listID)
        let template = ''
        tasks.forEach(t => {
            template += t.Template
        })
        return template
    }

}