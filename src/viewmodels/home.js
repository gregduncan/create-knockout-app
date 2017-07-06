import ko from 'knockout'
import store from '../store/'
import { add } from '../actions/items'

export default class ViewModel {

    constructor() {

        this.applicationState = ko.observable(store.getState())


        this.unsubscribe = store.subscribe(() => {

            this.applicationState(store.getState())
        })

        this.text = ko.observable('')
        this.items = ko.pureComputed(() => {
            return this.applicationState().items
        })

        this.applicationState.subscribe((newVal) => {
            console.log(ko.toJS(newVal))
        })
    }

    add() {
        store.dispatch(add(this.text()))
        this.text('')
    }
}

