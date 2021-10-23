import { generateId } from "../Utils/generateId.js";



export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.listID = data.listID
    }

    get Template() {
        return `
            <div>${this.name}<i class="trashcan fas fa-trash" onclick="app.tasksController.removeTask('${this.id}', '${this.listID}')"></i>
            </div>`
    }
}
