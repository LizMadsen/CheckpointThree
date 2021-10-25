import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.isChecked = data.isChecked
        this.listID = data.listID
    }

    get Template() {
        return `
        <div class="col-10">
            <input id="checkbox" type="checkbox" class="checkbox" value="${this.isChecked}" onchange="app.tasksController.toggleCheckbox(this, '${this.id}')"/> ${this.name}
            <button class="trashButton">
                <i class="trashcan fas fa-trash" onclick="app.tasksController.removeTask('${this.id}', '${this.listID}')">
                </i>
            </button>
        </div>`
    }
}
