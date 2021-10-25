import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
    createTask(taskData) {
        console.log(taskData)
        let banana = ProxyState.lists.find(l => l.id = taskData.listID)
        banana.numberOfTasks++
        banana.tasksRemaining++
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    removeTask(id, listID) {
        let banana = ProxyState.lists.find(l => l.id = listID)
        banana.numberOfTasks--
        banana.tasksRemaining--
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    toggleCheckbox(check, id) {
        let task = ProxyState.tasks.find(l => l.id == id)
        console.log(task)
        task.isChecked = check.checked
        console.log(check)
        console.log(ProxyState.tasks)
    }
}

export const tasksService = new TasksService()