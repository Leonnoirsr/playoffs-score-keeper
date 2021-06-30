const teamOne = document.querySelector('.team-one');
const teamTwo = document.querySelector('.team-one');
const oneWin = document.querySelector('#team-one-win');
const twoWin = document.querySelector('#team-two-win');
const oneText = document.querySelector('#team-one-text');
const twoText = document.querySelector('#team-two-text');
const oneScore = document.querySelector('#team-one-score');
const twoScore = document.querySelector('#team-two-score');
const reset = document.querySelector('#reset');

let gameOver = false;
let sweep = 4;
let winningScore = 7;
let scoreOne = 0;

oneWin.addEventListener('click', function () {
	if (!gameOver) {
		scoreOne++;
		if (scoreOne === winningScore) {
			gameOver = true;
		} else if (scoreTwo + scoreOne === winningScore) {
			gameOver = true;
		} else if (scoreOne === sweep && scoreTwo === 0) {
			gameOver = true;
		} else if (scoreOne === 4 && scoreTwo === 1) {
			gameOver = true;
		}
		oneScore.innerHTML = scoreOne;
	}
});

let scoreTwo = 0;

twoWin.addEventListener('click', function () {
	if (!gameOver) {
		scoreTwo++;
		if (scoreTwo === winningScore) {
			gameOver = true;
		} else if (scoreOne + scoreTwo === winningScore) {
			gameOver = true;
		} else if (scoreTwo === sweep && scoreOne === 0) {
			gameOver = true;
		} else if (scoreTwo === 4 && scoreOne === 1) {
			gameOver = true;
		}
		twoScore.innerHTML = scoreTwo;
	}
});

const oneSelect = document.querySelector('#team-one-select');

oneSelect.addEventListener('change', function (e) {
	e.preventDefault();
	const imgOne = document.querySelector('.img-one');
	if (oneSelect.value == 'hawks') {
		imgOne.src = 'Assets/Logos/Hawks.png';
	} else if (oneSelect.value == 'bucks') {
		imgOne.src = 'Assets/Logos/Bucks.png';
	} else if (oneSelect.value == 'clippers') {
		imgOne.src = 'Assets/Logos/clippers.png';
	} else if (oneSelect.value == 'suns') {
		imgOne.src = 'Assets/Logos/Suns.png';
	}

	switch (oneSelect.value) {
		case 'hawks':
			oneText.innerHTML = 'Atlanta Hawks';
			break;
		case 'bucks':
			oneText.innerHTML = 'Milwaukee Bucks';
			break;
		case 'clippers':
			oneText.innerHTML = 'LA Clippers';
			break;
		case 'suns':
			oneText.innerHTML = 'Phoenix Suns';
			break;
	}

	oneSelect.style.visibility = 'hidden';
});

const twoSelect = document.querySelector('#team-two-select');

twoSelect.addEventListener('change', function (e) {
	e.preventDefault();
	const imgTwo = document.querySelector('.img-two');
	if (twoSelect.value == 'hawks') {
		imgTwo.src = 'Assets/Logos/Hawks.png';
	} else if (twoSelect.value == 'bucks') {
		imgTwo.src = 'Assets/Logos/Bucks.png';
	} else if (twoSelect.value == 'clippers') {
		imgTwo.src = 'Assets/Logos/clippers.png';
	} else if (twoSelect.value == 'suns') {
		imgTwo.src = 'Assets/Logos/Suns.png';
	}

	switch (twoSelect.value) {
		case 'hawks':
			twoText.innerHTML = 'Atlanta Hawks';
			break;
		case 'bucks':
			twoText.innerHTML = 'Milwaukee Bucks';
			break;
		case 'clippers':
			twoText.innerHTML = 'LA Clippers';
			break;
		case 'suns':
			twoText.innerHTML = 'Phoenix Suns';
			break;
	}

	twoSelect.style.visibility = 'hidden';
});

reset.addEventListener('click', function () {
	const resetImgOne = document.querySelector('.img-one');
	const resetImgTwo = document.querySelector('.img-two');

	gameOver = false;
	scoreOne = 0;
	scoreTwo = 0;
	oneText.innerHTML = '';
	twoText.innerHTML = '';
	oneScore.innerHTML = '';
	twoScore.innerHTML = '';
	oneSelect.value = 'default';
	twoSelect.value = 'default';
	oneSelect.style.visibility = 'visible';
	twoSelect.style.visibility = 'visible';
	resetImgOne.src = '';
	resetImgTwo.src = '';
});
