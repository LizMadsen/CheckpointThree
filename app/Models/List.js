import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template() {
        return `
    <div class="col-3 bg-light shadow rounded">
        <div class="row">
            <div class="col-12 bg-primary p-5"> List Name </div>
                <div class="col-12 p-4">
                    <b>Tasks</b>
                    <div class="row  bg-light darken-20  shadow-inset">
                    <div class="col-12">task</div>
                    <div class="col-12">task</div>
                    <div class="col-12">task</div>
                    <div class="col-12">task</div>
                </div>
            </div>
        <div class="col-12 p-4 ">
        <div class="col-12 text-end">Total: $47.95</div>
    </div>
    </div>`
    }

    getTask() {
        const task = ProxyState.task.filter(t => this.id == t.listId)
        let template = ''
        return template
    }

}