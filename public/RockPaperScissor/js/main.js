const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
	player: 0,
	computer: 0
}

choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click', closeModal);
restart.addEventListener('click', restartScore);

//Play game
function play(e) {
	restart.style.display = 'inline-block';
	const playerSelect = e.target.id;
	const computerSelect = getComputerSelect();
	const winner = getWinner(playerSelect, computerSelect);
	addScore(winner);
	showWinner(winner, computerSelect);
}

function updateScoreUI(){
	score.innerHTML = `
		<p>Player: ${scoreboard.player}</p> 
		<p>Computer: ${scoreboard.computer}</p>
	`;
}

function restartScore() {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	updateScoreUI();
}

function closeModal(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
}

function addScore(winner){
	if(winner == 'player'){
		scoreboard.player++;
		updateScoreUI();
		
	}else if(winner == 'computer'){
		scoreboard.computer++;
		updateScoreUI();
	}
}

function showWinner(winner, computerSelect){
	if(winner === 'player'){
	result.innerHTML = 
		`<h1 class="text-win"> You Win</h1>
		<i class="fas fa-hand-${computerSelect} fa-10x"></i>
		<p>Computer Chose <strong>${computerSelect.charAt(0).toUpperCase() + computerSelect.substring(1)}</strong></p>`;
	}else if(winner === 'computer'){
	result.innerHTML = 
		`<h1 class="text-lose"> You Lose</h1>
		<i class="fas fa-hand-${computerSelect} fa-10x"></i>
		<p>Computer Chose <strong>${computerSelect.charAt(0).toUpperCase() + computerSelect.substring(1)}</strong></p>`;
	}else{
	result.innerHTML = 
		`<h1>Draw</h1>
		<i class="fas fa-hand-${computerSelect} fa-10x"></i>
		<p>Computer Chose <strong>${computerSelect.charAt(0).toUpperCase() + computerSelect.substring(1)}</strong></p>`;
	}
	modal.style.display = 'block';
}

function getWinner(playerSelect, computerSelect){
	if(playerSelect === computerSelect){
		return 'draw';
	}
	if(playerSelect == 'rock' && computerSelect == 'paper'){
		return 'computer';
	}
	if(playerSelect == 'rock' && computerSelect == 'scissors'){
		return 'player';
	}
	if(playerSelect == 'paper' && computerSelect == 'rock'){
		return 'player';
	}
	if(playerSelect == 'paper' && computerSelect == 'scissors'){
		return 'computer';
	}
	if(playerSelect == 'scissors' && computerSelect == 'rock'){
		return 'computer';
	}
	if(playerSelect == 'scissors' && computerSelect == 'paper'){
		return 'player';
	}
}

function getComputerSelect(){
	const random = Math.random();
	if(random<0.34){
		return 'rock';
	}else if(random<=0.67){
		return 'paper';
	}else{
		return 'scissors';
	}
}