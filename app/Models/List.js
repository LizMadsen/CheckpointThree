import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.taskNumber = 0
    }

    get Template() {
        return `
  <div class="col-3 bg-light shadow rounded">
  <div class="row">
    <div class="col-12 bg-primary p-5">${this.name} </div>
    <button class="btn btn-success" onclick="app.listsController.removeList('${this.id}')" > Submit List </button>
    <div class="col-12 p-4">
    <div class="col-12 p-4 ">
      <b>Tasks</b>
      <div class="row  bg-light darken-20  shadow-inset">
       ${this.getTask()}
      </div>
    </div>
    <div class="col-12 text-end">Total: ${this.taskNumber}</div>
  </div>
  <form class="row align-items-end" onsubmit="app.tasksController.createTasks('${this.id}')">
    <div class="col-10">
        <input type="text" class="form-control" name="taskName" id="" aria-describedby="helpId" placeholder="add task">
    </div>
    <button class="btn btn-dark col-2"> Add Task </button>
        </form>
    </div>
`
    }

    getTask() {
        const task = ProxyState.task.filter(t => this.id == t.listId)
        let template = ''
        this.taskNumber = 0
        tasks.forEach(t => {
            template += t.template
            this.taskNumber += t.tasksRemaining
        })
        return template
    }

}