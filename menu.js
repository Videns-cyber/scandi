let icon = document.getElementById('burger');
let mainMenu = document.querySelector('.nav-list');
icon.onclick = function (event) {
  mainMenu.classList.toggle('responsive');
  
}

let iconFooter = document.getElementById('burgerFooter');
let menuFooter = document.querySelector('.social-list');
iconFooter.onclick = function (event) {
  menuFooter.classList.toggle('responsive');
  
}