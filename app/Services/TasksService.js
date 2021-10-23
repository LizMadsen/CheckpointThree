import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
    createTask(taskData) {

        const task = new Task(taskData)
        ProxyState.task = [...ProxyState.task, task]
    }
}

export const tasksService = new TasksService()