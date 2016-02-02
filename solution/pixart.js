// The document is loaded!
$(document).ready(function() {
	console.log("Loaded, bro.");

	// STEP 1
	// Listen for a click on the set color button...
	var $colorButton = $("#set-color");
	$colorButton.on("click", changeColor);

	// Get the value of the input and change the CSS of the brush color box to that color.
	function changeColor() {
	  var $inputColor = $("#color-field").val();
	  $(".brush-color").css("background", $inputColor);
	};

	// STEP 2
	// Listen for a keypress event on the input field.
	// When that happens, call changeColor.
	var $colorInput = $("#color-field");
	$colorInput.on("keypress", function(event) {
		console.log(event);
		if (event.which === 13) {
			changeColor();
		}
	});

	// Write a function that will change the color of each pixel that is mousedover..
	function addColor(color, pixel) {
		color = $("#color-field").val();
		pixel.css("background-color", color);
	}

	// STEP 3
	// Create our canvas of pixels...
	function createCanvas() {
		var numSquares = 3040;
		for (var i = 0; i < numSquares; i++) {
		  var pixelDiv = $("<div>").addClass("square");
		  pixelDiv.appendTo("body");
		  pixelDiv.on("mouseover", function() {
		    addColor($("#color-field").val(), $(this));
		  });
		}
	}

	createCanvas();

});
