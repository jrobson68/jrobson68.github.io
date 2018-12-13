const originalButton = document.getElementById('original-button');
const mysteryButton = document.getElementById('mystery-button');
const randomColor = 'rgb(" + num + num + num +")';

function rgb(num) {
	return Math.floor(Math.random() * num)
}

function colorChange(event) {
	const randomColor = 'rgb(' + rgb(254) + ',' + rgb(254) + ',' + rgb(254) + ')';
	event.target.style.backgroundColor = randomColor;
}

originalButton.onclick = colorChange;
mysteryButton.onmouseover = colorChange;