import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
    constructor() {
        createList(listData) {
            const list = new List(listData)
            ProxyState.lists = [list, ...ProxyState.lists]
        }
        removeList(id) {
            ProxyState.lists = ProxyState._listeners.filter(l => l.id != id)
            ProxyState.tasks = ProxyState.tasks.filter(t => t.listID != id)
        }

    }
}

export const listsService = new ListsService()