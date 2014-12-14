var $ = require('jquery'),
	Mbox = require('mbox'),
	Tpl = require('tpl'),
	template = require('./tpl/loc.html.js'),
	
	initEditLoc = function() {
		$('.J_btn-edit').on('click', function() {
			new Mbox({
				winCls: 'pop-box pop-edit-loc',
                content: Mbox.dialog('更改目的地', Tpl.compile(template)())
            }).open();
		});
	};

exports.init = function() {
	initEditLoc();
};