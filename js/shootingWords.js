/*
 * function implementations
 * 1. produce words to populate the 10 word holders
 * 2. animate the word towards right board, remove the word when hit the board
 * 3. remove word if it matches user input
 */


var speedModifier = 2;
var words = ['hello', 'volvo', 'cookie', 'world', 'king', 'quee', 'game', 'fun', 'enjoy'];
var score = 0;
var counter = 0;

/*
 * Set up the game using user provided parameters
 */

// set up background color
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
				var targetWord = $(this).text();
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


function restart(selector) {
	var randWord = giveAWord();

	$(selector).css("left", "0px");
	$(selector).html(randWord);
	startAnimation(selector);
}

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
	var time = Math.round((10000 + Math.random() * 20000) / speedModifier);
	return time;
}


