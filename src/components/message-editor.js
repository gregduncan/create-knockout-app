import ko from 'knockout'
 
module.exports = {
     viewModel: function(params) {
        this.text = ko.observable(params.initialText || '');
    },
    template: 'Message: <input data-bind="value: text" /> '
            + '(length: <span data-bind="text: text().length"></span>)'
}