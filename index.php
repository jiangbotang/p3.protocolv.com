<!DOCTYPE html>
<html>
	<head>
		<title>Shooting Words</title>

		<link rel="stylesheet" href="css/main.css" type="text/css">
		<link rel="stylesheet" href="css/features.css" type="text/css">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	</head>

	<body>
		<h1>Welcome to <em>Shooting Words</em> Game</h1>
		<h3>Game guide:</h3>
		<p>When a game is started, words randomly selected from 5000 mostly used English words will appear in the gaming area and start travel
			from left to right. You can type word in the input box below to shoot off a word to gain points. Each word worthes
			points equal to the number of letters it has. If you miss the word before it reach the end, you loose points.</p>
		<p>You can also control some aspects of the game by using the controllers on the left,
		 both before and during a game.</P>

		<!-- All the game controllers go here -->
		<div id='controllers'>
			<!-- background color selector -->
			<div id='colorSelector'>
				<h3>Select a color as background </h3>
				<!-- Make 7 divs for different color choices-->
				<?php for($i = 1; $i <8; $i++): ?>
				<div class='colors' id=<?="color".$i?>></div>
				<?php endfor;?>
			</div>

			<!-- background color opacity selector -->
			<div id='opacitySelector'>
				<h3>Change background opacity</h3>
				<div>0<input type='range' min='0.1' max='0.9' value='0.7' step='0.1' id='opacity'>100</div>
			</div>

			
			<!-- font selector -->
			<div id='fontSelector'>
				<h3>Pick a font</h3>
				<div>
					<input type='radio' name='font' value='Georgia' checked='true'>
					<label for='georgia' id='georgia'>Georgia</label><br>

					<input type='radio' name='font' value='Verdana'>
					<label for='verdana' id='verdana'>Verdana</label><br>

					<input type='radio' name='font' value="Lucida Console">
					<label for='lucida' id='lucida'>Lucida Console</label><br>

					<input type='radio' name='font' value="Comic Sans MS">
					<label for='comic' id='comic'>Comic Sans MS</label>
				</div>
			</div>

			<!-- game difficulty level selector -->
			<div id='levelSelector'>
				<h3>Select a game difficulty level</h3>
				<div>easy<input type='range' min='1' max='5' value ='3' id='level'>hard</div>
			</div>

			<!-- start & stop game -->
			<div id='startNstop'>
				<button id='startGame'>Start Game</button>
				<button id='stopGame'>Stop Game</button>
			</div>
		</div>


		<!-- Where the gaem is -->
		<div id='gameDisplay'>
			<div id='gamingArea'>
				<!-- Make 10 divs for words to enter-->
				<?php for($i = 0; $i <10; $i++): ?>
				<div class='target' id=<?="target".$i?>></div>
				<?php endfor;?>

				<!-- Right side end blocker-->
				<div id='blocker'>
					<img src='/resource/img/bg2.png' alt='game area end blocker'>
				</div>
			</div>

			<div id='scoreArea'>
				<h3>Your Score:</h3>
				<h2 id='score'>0</h2>
			</div>

			<!-- User input area-->
			<div id='UserArea'>
				<p>Type word in the box.<br>
					Hit "ENTER" to shoot a matching word.
				</p>
				<input type='text' id='userInput'>
			</div>
			
			<div id='message'></div>
		</div>

		<!-- footer -->
		<div id="footer">
    	Harvard University. Extension School CSCI E-15. Cooyright 2013 Jiangbo Tang.
		</div>

		<script src="js/shootingWords.js"></script>
	</body>
</html>