import ko from 'knockout'

export default class ViewModel{
     
     constructor(){         
         this.text = ko.observable('')
         this.items = ko.observableArray();
     }

     add(){
         this.items.push(this.text())
         this.text('')
     }
}

