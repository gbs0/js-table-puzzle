const table = document.querySelector('td');

console.log('Linha: ' + td.parentElement.rowIndex);
console.log('Coluna: ' + td.cellIndex);

const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
	document.querySelector('.hint').classList.toggle('a');
});
