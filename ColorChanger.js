//creates buttons "Red Green Blue" and makes them change css class when clicked//
function buttonAction(color) {
	if ($('body').hasClass('')) {
		$('body').attr('class', color + 2);
		
	}
	else if (!$('body').hasClass(color + 2)) {
		$('body').removeClass();
		$('body').attr('class', color + 2);
	}
	else {
		$('body').removeClass()
	 }
}



var Blue = $("<button id='blue'>Blue</button>");
$("#color-buttons").append(Blue);
$('#blue').addClass("blue");
$('#blue').click(function() {
	buttonAction('blue');
});



var Red = $("<button id='red'>Red</button>");
$("#color-buttons").append(Red);
$('#red').addClass("red");
$('#red').click(function() {
	buttonAction('red');
});

var Green = $("<button id='green'>Green</button>");
$("#color-buttons").append(Green);
$('#green').addClass("green");
$('#green').click(function() {
	buttonAction('green');
});

//make that button's id be whatever the name of the color was, then the background color be that same color, then whenver a button is clicked on, have the page change to the color of the id


var colors= [
	"Black", 
	"Chocolate", 
	"Coral",
	"Cornsilk",
	"Firebrick",
	"Gold",
	"Maroon",
	"Orchid",
	"Peru",
	"Skyblue",
	"Yellowgreen",
	"Whitesmoke",
	"Turquoise"
];
	

$.each(colors, function(val, text) {
	$('#color-selector').append(
		$('<option class="option-class"></option>').val(val).html(text) 
	);
});



var id = $(this).attr("id");
$('input[id="' + id + '"]').hide();

$("#addNew").on('click', function() {
	var color = $( "select option:selected" ).text();
	var newBtn = $("<button class=\"color-btn\"  id=" + color + ">" + color + "</button>");
	$("#color-buttons").append(newBtn);
	$(newBtn).click(function() {
	buttonAction(color);
	});
	
});

$("#remove-current").on('click', function() { 
	if ($("#color-buttons button:last-child")[0].id !== "green") {
		$("#color-buttons button:last-child").remove();
	}
});

function buttonMaker() {
	console.log("They clicked");
	
}


//creates dropdown menu, with strings in an array that when clicked create another button of the same name under the above div, with their own classes to toggle between//
$("#color-selector").on("click", buttonMaker);



//problems: 1, the class of the first color clicked will apply to the second color clicked...











//