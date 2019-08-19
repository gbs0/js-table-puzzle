const table = document.querySelector('td');
const tiles = document.querySelectorAll('td');

console.log('Linha: ' + table.parentElement.rowIndex);
console.log('Coluna: ' + table.cellIndex);

const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
	document.querySelector('.hint').classList.toggle('a');
});

tiles.forEach((td) => {
	td.addEventListener('click', (event) => {
		// Tile vazia e suas coordenadas na tabela
		const empty = document.querySelector('.empty');
		const emptyRow = empty.parentElement.rowIndex;
		const emptyCol = empty.cellIndex;
		console.log("Tile vazia:" + emptyRow + "-" + emptyCol);

		// Coordenadas da Tile que clicamos (event.target)
		const currentRow = event.target.parentElement.rowIndex;
		const currentCol = event.target.cellIndex;
		console.log("Clique:" + currentRow + "-" + currentCol);
		
		// Mecânica p/ mudança de Tiles
		if (emptyRow === currentRow && ( emptyCol === currentCol - 1 || emptyCol === currentCol + 1) ||
				// (Se estiverem na mesma linha e a uma coluna de distância
				emptyCol === currentCol && ( emptyRow === currentRow - 1 || emptyRow === currentRow + 1))
				// ou estiverem na mesma coluna e a uma linha de distância)
				{
					empty.classList.remove('empty'); // Remove a classe empty
					event.target.classList.add('empty'); // Adionar empty no click de evento
					empty.innerText = event.target.innerText; // Pegar o texto da tile clicada
					event.target.innerText = ""; // Adicionar string vazia na Tile vazia
				}
		// 
		const tdsValues = [];

	});
});