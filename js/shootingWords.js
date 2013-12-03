
var speedModifier = 2;
var words = [];
var score = 0;
var counter = 0;

/*
 * Set up the game when the page is loaded
 */

// read in words from a from a file to an array
$.get("/resource/words5k.txt", function(data) {
	words = data.split("\n");
});


// set up default background color
$('#gamingArea').css('background-color', 'rgba(43, 165, 173, 0.7)');

// set up background color upon user request
$('.colors').click(function() {
	var selectedColor = $(this).css('background-color');
	$('#gamingArea').css('background-color', selectedColor);
});

// set up background opacity
$('#opacity').change(function(){
	var selectedOpacity = $(this).val();

	// change bakcground color opacity
	var oldBGColor = $('#gamingArea').css('background-color');
	var lastComma = oldBGColor.lastIndexOf(',');
	var newBGColor = oldBGColor.slice(0, lastComma+1) + selectedOpacity + ')';

	$('#gamingArea').css('background-color', newBGColor);
})

// set up target word default font
$('.target').css('font-family', 'Georgia');

// change target font upon user request
$("input[name='font']").click(function() {
	var selectedFont = $(this).val();
	$('.target').css('font-family', selectedFont);
});

// set up game speed
$('#level').change(function() {
	speedModifier = $(this).val();
	console.log(speedModifier);
});
	
/*
 * Start the game
 */
$('#startGame').click(function(){
	// reset the score
	score = 0;
	$('#score').html(score);

	$('#userInput').focus();
	//prevent user from starting the game again before stopGame is clicked
	$('#startGame').attr('disabled', 'disabled');

	/*
	 * a. select a random word for each target div
	 * b. start animation
	 */
	$('.target').each(function() {

		// send a random word to game area
		$(this).html(giveAWord());
		// start amination
		startAnimation(this);
	});


	/*
	 * This triggers when user hit "ENTER" key in the input box.
	 */
	$('#userInput').keyup(function(e){
		var code = e.which;
		
		// User hit "ENTER" in the input box
		if(code == 13){
			e.preventDefault();
		}
		if(code == 32 || code == 13 || code == 188 || code == 186) {
			//get the user input
			var userWord = $(this).val();

			//compare the input to every word in gaming area
			$('.target').each(function() {
				// not sure why .html() return (word + '\n') instead of (word), so I have to use replace
				// the returned type is undefined instead of string. It wierd as a random word went in as String
				var targetWord = $(this).html().replace('\n','');
				// user input match the current element
				if (targetWord == userWord) {
					//update score
					score += $(this).html().length
					$('#score').html(score);

					//clear user input
					$('#userInput').val("");

					//clear matched word from gaming area
					$(this).empty();

					//tell user hit or miss
					$('#message').html('You SHOT a word!!!').css('color', '#0B751B');
					$('#message').fadeIn('fast').fadeOut(500);
				}
			});
		}
	}); //end of .keyup()
}); // enf of .click()

/*
 * Stop the game
 */
$('#stopGame').click(function(){
	$('.target').each(function(){
		// stop animation
		$(this).stop();
		
		$(this).html("");
		$(this).css('left', '0px');
	});
	//make start game button response to click again
	$('#startGame').removeAttr('disabled');
});


/*
 * Restart / loop the animation when word hit the boundary on the right
 */
function restart(selector) {
	var randWord = giveAWord();

	$(selector).css("left", "0px");
	$(selector).html(randWord);
	startAnimation(selector);
}

/*
 * Return a random word from the array of words
 */
function giveAWord() {
	// select a random word
	var index = Math.round(Math.random() * (words.length - 1));
	return words[index];
}

/*
 * Start the animation of a target word
 * selector: handler to a target word
 */
function startAnimation(selector) {
	$(selector).animate({left: '550px'}, travelTime(), function() {
		// following code executed when animation finishes

		//update and dipslay score
		score = score - $(selector).html().length;
		$('#score').html(score);

		// delete the target word
		$(selector).empty();

		// restart the game for the element
		restart(selector);
	});
}

function travelTime() {
	var time = Math.round((25000 + Math.random() * 50000) / speedModifier);
	return time;
}


