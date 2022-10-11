// Math
// Addition, subtraction, multi, division

// create variables

// Alphabet
// types: Numbers, Strings, 
// "C" + "A" + "T"
// "CAT" ==> string


// Access to Browser Object Model and Document object Model

// Conditions

// var drinkingAge = 21;
// var conorsAge = 30;

// if (conorsAge >= drinkingAge) {
// 	// window.alert('Welcome to the party, here is a beer');
// 	document.body.style.backgroundColor = 'green';
// } else {
// 	// window.alert("sorry you're not allowed")
// 	document.body.style.backgroundColor = 'red';
// }

// var image = document.querySelector('img');
// var bodyBackgroundColor = document.body.style.backgroundColor;

// image.addEventListener('click', changeBackground)


// function changeBackground() {
// 	if (document.body.style.backgroundColor === 'red') {
// 		document.body.style.backgroundColor = 'green';
// 	} else if (document.body.style.backgroundColor === 'green') {
// 		document.body.style.backgroundColor = 'red';
// 	}
// };

// sayName('James')

var h1 = document.querySelector('h1');


// h1.addEventListener('click', function () {

// 	if (document.querySelector('img').style.display === 'block') {
// 		document.querySelector('img').style.display = 'none'
// 	} else if (document.querySelector('img').style.display === 'none') {
// 		document.querySelector('img').style.display = 'block';
// 	}


// })

var slide = function () {
	$('button').css({ backgroundColor: 'red', fontSize: '50px' }).append('We are going to party')
	// $('button').css('background-color', 'red')
	$('#target').slideToggle('slow', function () {
		console.log('hey we just slide the div')
	});
	$('#ocean').append('<h1>Heeeeyyyy</h1>')
}

$('button').on('click', slide)



// $( "#clickme" ).click(function() {
//   $( "#book" ).slideToggle( "slow", function() {
//     // Animation complete.
//   });
// });





