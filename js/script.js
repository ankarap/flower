const iconOpen = document.querySelector('.header-open');
const menuBody = document.querySelector('.menu');
if (iconOpen) {
	iconOpen.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconOpen.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
/*-----------------------------------------*/