import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

class TasksService {
    createTask(taskData) {
        console.log(taskData)
        let banana = ProxyState.lists.find(l => l.id == taskData.listID)
        // banana.numberOfTasks++
        // banana.tasksRemaining++
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    removeTask(id, listID) {
        let banana = ProxyState.lists.find(l => l.id == listID)
        // banana.numberOfTasks--
        // banana.tasksRemaining--
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    toggleCheckbox(checkbox, id) {
        console.log(checkbox.checked)
        let taskIndex = ProxyState.tasks.findIndex(l => l.id == id)
        let task = ProxyState.tasks[taskIndex]
        task.isChecked = !task.isChecked
        ProxyState.tasks[taskIndex] = task
        ProxyState.tasks = ProxyState.tasks
        saveState();
    }
}

export const tasksService = new TasksService()