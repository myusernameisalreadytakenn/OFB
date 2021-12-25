
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
