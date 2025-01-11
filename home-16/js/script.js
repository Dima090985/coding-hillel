const btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu_list');

btn.addEventListener("click", (e) => {
    btn.classList.add("active");
    menu.classList.add("active");
});