const table = document.querySelector('td');
const tiles = document.querySelectorAll('td');

console.log('Linha: ' + td.parentElement.rowIndex);
console.log('Coluna: ' + td.cellIndex);

const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
	document.querySelector('.hint').classList.toggle('a');
});

tiles.forEach((td) => {
	td.addEventListener('click', (event) => {
		// console.log(event.target); // Pick clicked element
		const emptyCell = document.querySelectorAll('.empty');
		console.log(empty.parentElement.rowIndex); // Debug empty cell row
		console.log(empty.callIndex); // Debug empty cell column
	});
});