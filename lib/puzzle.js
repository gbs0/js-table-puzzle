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
		// console.log(empty.parentElement.rowIndex); // Debug empty cell row
		// console.log(empty.cellIndex); // Debug empty cell column

		const emptyCell = document.querySelectorAll('.empty');
		const emptyRow = empty.parentElement.rowIndex;
		const emptyCol = empty.cellIndex;
		const currentRow = event.target.parentElement.rowIndex;
		const currentCol = event.target.cellIndex;
		
		if (emptyRow === currentRow && (
		 		emptyCol === currentCol - 1 || 
		 		emptyCol === currentCol + 1) || 
				emptyCol === currentCol && (
				emptyRow === currentRow - 1 ||
				emptyRow === currentRow + 1))
				{
					empty.classList.remove('empty');
					event.target.classList.add('empty');
					empty.innerText = event.target.innerText;
					event.target.innerText = "";
				}

	});
});