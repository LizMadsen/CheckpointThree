import { List } from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


// const testList = new List(
//   {
//     name: "Chores List",
//     tasksRemaining: "0/1"
//   }
// )

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/List').List[]} */
  lists = []
  /** @type {import('./Models/Task').Task[]} */
  tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
