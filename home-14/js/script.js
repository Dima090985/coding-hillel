let btn = document.querySelector('.js-mobile-menu-btn');
let menu = document.querySelector('.js-menu');


btn.addEventListener("click", (e) => {
	btn.classList.add('active');
	menu.classList.add('active'); 
 });



const btn2 = document.querySelector('.js-mobile-menu-btn2');
const menu2 = document.querySelector('.js-menu2');


btn2.addEventListener("click", (e) => {
	btn2.classList.add('active');
	menu2.classList.add('active'); 
 });