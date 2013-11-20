<!DOCTYPE html>
<html>
	<head>
		<title>Shooting Words</title>

		<link rel="stylesheet" href="css/main.css" type="text/css">
		<link rel="stylesheet" href="css/features.css" type="text/css">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	</head>

	<body>
		<h1>Welcome to Shooting Words Game</h1>
		<p>Game guide:</p>

		<!-- All the game controllers go here -->
		<div id='controllers'>

			<button id='startGame'>Start Game</button>
			<button id='stopGame'>Stop Game</button>
		</div>


		<div id='gameDisplay'>
			<!-- The gaming area -->
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
			<br>
			
			<div id='message'>You shot a word!!!</div>
		</div>


		<script src="js/shootingWords.js"></script>
	</body>
</html>