import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
    }



    getTask() {
        const task = ProxyState.task.filter(t => this.id == t.listId)
        let template = ''
        return template
    }




}