import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
    createTask(taskData) {
        console.log(taskData)
        let banana = ProxyState.lists.find(l => l.id = taskData.listID)
        banana.numberOfTasks++
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    removeTask(id, listID) {
        let banana = ProxyState.lists.find(l => l.id = listID)
        banana.numberOfTasks--
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        console.log(ProxyState.lists)
    }
}

export const tasksService = new TasksService()