import ko from 'knockout'
import store from '../../store/'
import { add, removeAll } from '../../actions/items'

require('./styles.less');

const isTest = process.env.NODE_ENV === 'test'

class HomeViewModel {
  constructor() {
    this.applicationState = ko.observable(store.getState())

    this.unsubscribe = store.subscribe(() => {
      this.applicationState(store.getState())
    })

    this.text = ko.observable('')
    this.items = ko.pureComputed(() => {
      return this.applicationState().items
    })
  }

  add() {
    store.dispatch(add(this.text()))
    this.text('')
  }

  remove() {
    store.dispatch(removeAll())
    this.text('')
  }
}

export default { viewModel: HomeViewModel, template: isTest ? {} : require('./index.html') };

