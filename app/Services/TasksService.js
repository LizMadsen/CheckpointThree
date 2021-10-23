import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
    createTask(taskData) {
        console.log(taskData)
        let banana = ProxyState.lists.find(l => l.id = taskData.listID)
        banana.numberOfTasks++
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(ProxyState.lists)
    }
}

export const tasksService = new TasksService()