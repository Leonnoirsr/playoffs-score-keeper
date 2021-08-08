let gameOver = false;
let sweep = 4;
let winningScore = 7;

const team1 = {
	score: 0,
	button: document.querySelector('#team-one-win'),
	name: document.querySelector('#team-one-text'),
	display: document.querySelector('#team-one-score'),
	icon: document.querySelector('.img-one'),
	select: document.querySelector('#team-one-select'),
};

const team2 = {
	score: 0,
	button: document.querySelector('#team-two-win'),
	name: document.querySelector('#team-two-text'),
	display: document.querySelector('#team-two-score'),
	icon: document.querySelector('.img-two'),
	select: document.querySelector('#team-two-select'),
};

function selectTeam(team) {
	if (team.select.value == 'hawks') {
		team.icon.src = 'Assets/Logos/Hawks.png';
	} else if (team.select.value == 'bucks') {
		team.icon.src = 'Assets/Logos/Bucks.png';
	} else if (team.select.value == 'clippers') {
		team.icon.src = 'Assets/Logos/clippers.png';
	} else if (team.select.value == 'suns') {
		team.icon.src = 'Assets/Logos/Suns.png';
	}

	switch (team.select.value) {
		case 'hawks':
			team.name.innerHTML = 'Atlanta Hawks';
			break;
		case 'bucks':
			team.name.innerHTML = 'Milwaukee Bucks';
			break;
		case 'clippers':
			team.name.innerHTML = 'LA Clippers';
			break;
		case 'suns':
			team.name.innerHTML = 'Phoenix Suns';
			break;
	}

	team.select.style.visibility = 'hidden';
}

team1.select.addEventListener('change',  () => {
	selectTeam(team1);
});

team2.select.addEventListener('change',  () => {
	selectTeam(team2);
});

function updateScores(team, opponent) {
	if (!gameOver) {
		team.score++;
		if (team.score === winningScore) {
			gameOver = true;
		} else if (team.score + opponent.score === winningScore) {
			gameOver = true;
		} else if (team.score === sweep && opponent.score === 0) {
			gameOver = true;
		} else if (team.score === 4 && opponent.score === 1) {
			gameOver = true;
		}
		team.display.innerHTML = team.score;
	}
}

team1.button.addEventListener('click', () => {
	updateScores(team1, team2);
});

team2.button.addEventListener('click', () => {
	updateScores(team2, team1);
});

const reset = document.querySelector('.reset');

reset.addEventListener('click', (team, opponent) => {
	gameOver = false;
	team1.score = 0;
	team2.score = 0;
	team1.display.innerHTML = '';
	team2.display.innerHTML = '';
	team1.name.innerHTML = '';
	team2.name.innerHTML = '';
	team1.icon.src = '';
	team2.icon.src = '';
	team1.select.value = 'default';
	team2.select.value = 'default';
	team1.select.style.visibility = 'visible';
	team2.select.style.visibility = 'visible';
});
