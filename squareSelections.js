
$('section').on('click', function (event) {
	$(event.target).toggleClass('weeee')
	console.log('hey')
	function sayHI() {
		var number = 1;
		var numberJames = 29;

		console.log(number + numberJames)
	}

	sayHI();
})