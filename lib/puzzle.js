// const table = document.querySelector('td');
const td = document.querySelector('td');
const tiles = document.querySelectorAll('td');

console.log('Linha: ' + td.parentElement.rowIndex);
console.log('Coluna: ' + td.cellIndex);

const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
	document.querySelector('.hint').classList.toggle('a');
});

tiles.forEach((td) => {
	td.addEventListener('click', (event) => {
		// console.log(empty.parentElement.rowIndex); // Debug empty cell row
		// console.log(empty.cellIndex); // Debug empty cell column

		const empty = document.querySelector('.empty');
		
		const emptyRow = empty.parentElement.rowIndex;
		
		const emptyCol = empty.cellIndex;
		
		// Coordenadas da Tile que clicamos (event.target)
		const currentRow = event.target.parentElement.rowIndex;
		const currentCol = event.target.cellIndex;
		
		if (emptyRow === currentRow && ( emptyCol === currentCol - 1 || emptyCol === currentCol + 1) ||
				// (Se estiverem na mesma linha e a uma coluna de distância
				emptyCol === currentCol && ( emptyRow === currentRow - 1 || emptyRow === currentRow + 1))
				// ou estiverem na mesma coluna e a uma linha de distância)
				{
					empty.classList.remove('empty');
					event.target.classList.add('empty');
					empty.innerText = event.target.innerText;
					event.target.innerText = "";
				}
		
		const tdsValues = [];

	});
});