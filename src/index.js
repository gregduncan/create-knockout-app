import ko from 'knockout'
import home from './components/home'

ko.components.register('home', home)

ko.applyBindings()

// import ko from 'knockout'
// import vm from './viewmodels/home'

// ko.applyBindings(new vm())
