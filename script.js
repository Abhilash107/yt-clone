let menuIcon = document.querySelector('#menu-logo');
let sidebar=  document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuIcon.onclick = function(){
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container')
}