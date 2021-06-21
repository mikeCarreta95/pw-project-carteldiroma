/*
.toggle para trocar entre o menu-hamb e a cruz
.nav-list para mostrar o menu
 */

document.addEventListener('DOMContentLoaded',  () => {
	document.querySelector('.hamburguer-menu').onclick = () => {
		$('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
	}
})


