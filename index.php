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
		<h1>Welcome to Shooting Words Game</h1>
		<h3>Game guide:</h3>

		<!-- All the game controllers go here -->
		<div id='controllers'>
			<!-- background color selector -->
			<div id='colorSelector'>
				<h3>Select a color as background </h3>
				<div class='colors' id='color1'></div>
				<div class='colors' id='color2'></div>
				<div class='colors' id='color3'></div>
				<div class='colors' id='color4'></div>
				<div class='colors' id='color5'></div>
				<div class='colors' id='color6'></div>
				<div class='colors' id='color7'></div>
			</div>

			<!-- background color opacity selector -->
			<div ='opacitySelector'>
				<h3>Change background opacity</h3>
				<div>0<input type='range' min='0.1' max='0.9' value='0.7' step='0.1' id='opacity'>100</div>
			</div>

			
			<!-- font selector -->
			<div id='fontSelector'>
				<h3>Pick a font</h3>
				<div>
					<input type='radio' name='font' value='Georgia' id='georgia'>
					<label for='georgia' style="font-family:Georgia;">Georgia</label><br>

					<input type='radio' name='font' value='Verdana' id='verdana'>
					<label for='verdana' style="font-family:Verdana;">Verdana</label><br>

					<input type='radio' name='font' value="Lucida Console" id='lucida'>
					<label for='lucida' style='font-family:"Lucida Console";'>Lucida Console</label><br>

					<input type='radio' name='font' value="Comic Sans MS" id='comic'>
					<label for='comic' style='font-family:"Comic Sans MS";'>Comic Sans MS</label>
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
				<div class='target' id=<?="target".$i ?>></div>
				<?php endfor;?>
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
			
			<div id='message'>You shot a word!!!</div>
		</div>

		<script src="js/shootingWords.js"></script>
	</body>
</html>