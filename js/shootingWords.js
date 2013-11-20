/*
 * function implementations
 * 1. produce words to populate the 10 word holders
 * 2. animate the word towards right board, remove the word when hit the board
 * 3. remove word if it matches user input
 */


var speedModifier = 1;
var words = ['hello', 'volvo', 'cookie', 'world', 'king', 'quee', 'game', 'fun', 'enjoy'];
var score = 0;
var counter = 0;



/*
 * Start the game
 */
$('#startGame').click(function(){
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

					//tell user word match succeed
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

	console.log(index + ": " + words[index]);

	return words[index];

}

function startAnimation(selector) {
	$(selector).animate({left: '500px'}, travelTime(), function() {
	// when the fuction in animate when animate finishes
	// It is likly he current element has been removed
	// Use $(selector).length > 0 to determine its existence
		if ($(selector).length > 0) {

			score = score - $(selector).html().length;
			$(selector).empty();
			$('#score').html(score);

			// restart the game for the element
			restart(selector);
		}
	});
}

function travelTime() {
	var time = Math.round(5000 + Math.random() * 10000 / speedModifier);
	return time;
}



