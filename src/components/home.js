import ko from 'knockout'

import ViewModel from '../viewmodels/home'

module.exports = {
	viewModel: ViewModel,
	template:
		' <div class="container">' +
		'<div class="form-group">' +
		'   <div class="input-group" style="margin-top:20px">' +
		'       <input type="text" class="form-control" data-bind="value: text, valueUpdate: \'input\'">' +
		'       <span class="input-group-btn">' +
		'          <button  data-bind="click:add, enable: text() !== \'\'" class="btn btn-primary" type="button">Add</button>' +
		'       </span>' +
		'    </div>' +
		'</div>' +
		'<div class="form-group">' +
		'    <ul data-bind="foreach:items" class="list-group">' +
		'       <li data-bind="text:$data" class="list-group-item"></li>' +
		'    </ul>' +
		'</div>' +
		'<div class="form-group">' +
		'    <button data-bind="click:remove" class="btn btn-danger">Remove</button>' +
		'</div>' +
		'</div>'
}
