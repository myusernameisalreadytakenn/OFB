
$(".input_int input").on("change focusout", function () {
	if ($(this).val().match(/^\+?(0|[1-9]\d*)$/)) {
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});

$(".input_float input").on("change focusout", function () {
	if ($(this).val().match(/^([0-9]*\.[0-9]+)$/)) {
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});



$(".input_password2 input").on("change focusout", function () {
	let value_input1 = $(".input_password2 input").val(); 
	let value_input2 = $(".input_password input").val(); 
	console.log(value_input1);
	console.log(value_input2);
	if (value_input1 != value_input2) {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	}
});


$(".input__data input").on("change focusout", function () {
	if ($(this).val().match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/)) {
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});


$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$ (function(){
	$.datepicker.setDefaults($.datepicker.regional[ "ru"]);

	$('#datepicker').datepicker();
})

$( function() {
    $( "#accordion" ).accordion();
  } );

$( function() {
    $( "#tabs" ).tabs();
  } );

  $(document).ready(function ($) {
    $(".et-icon-facebook").click(function () {
        window.open("https://www.facebook.com/frontend.deveoper");
    })
    $(".et-icon-instagram").click(function () {
        window.open("https://www.instagram.com/frontend.ru/");
    })
    $(".et-icon-twitter").click(function () {
        window.open("https://twitter.com/frontend_u");
    })
    $(".et-icon-pinterest").click(function () {
        window.open("https://in.pinterest.com/ditinteractive/_created/"); })
});
