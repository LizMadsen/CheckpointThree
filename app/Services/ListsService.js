import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
    constructor() {
    }

    createList(listData) {
        const list = new List(listData)
        ProxyState.lists = [list, ...ProxyState.lists]
        console.log(ProxyState.lists)
    }
    removeList(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listID != id)
        ProxyState.lists = ProxyState._listeners.filter(l => l.id != id)
    }

}


export const listsService = new ListsService()