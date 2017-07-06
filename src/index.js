// import ko from 'knockout'
// import vm from './components/message-editor'
// import container from './components/container'

// ko.components.register('message-editor', vm);
// ko.components.register('container', container);

// ko.applyBindings()

import ko from 'knockout'
import vm from './viewmodels/home'

ko.applyBindings(new vm())


