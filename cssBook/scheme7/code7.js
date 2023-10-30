setTimeout(() => {
	const open = document.getElementById('open');
	const close = document.getElementById('close');
	const modal = document.getElementById('modal');

	open.addEventListener('click', event => {
		event.preventDefault();
		modal.style.display = 'block';
	});

	close.addEventListener('click', event => {
		event.preventDefault();
		modal.style.display = 'none';
	});
});
// Обертка setTimeout для того, 
// чтобы позиционировать код как макрозадачу => 
// загрузка кода происходит полько после основного потока