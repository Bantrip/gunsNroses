var $ = require('jquery'),

	initImg = function() {
		var img = $('.J_main-img');

		$('.J_trigger-img').on('click', 'li', function() {
			var self = $(this);

			self.addClass('on').siblings('li').removeClass('on');
			img.attr('src', self.attr('data-url'));
		});
	},
	
	updateAmount = function(value) {
		var input = $('.J_amount-input'),
			reduceBtn = $('.J_amount-reduce'),
			amount = parseInt(input.val()) + value;

		input.val(amount);
		if(amount > 1) {
			reduceBtn.removeClass('disable');
		} else {
			reduceBtn.addClass('disable');
		}
	},

	initAmount = function() {
		$('.J_amount-reduce').on('click', function() {
			if($(this).hasClass('disable')) {
				return;
			}
			updateAmount(-1);
		});

		$('.J_amount-add').on('click', function() {
			updateAmount(1);
		});
	},

	initLike = function() {
		$('.J_btn-like').on('click', function() {
			var self = $(this);
			
		});
	};


exports.init = function() {
	initImg();
	initAmount();
};