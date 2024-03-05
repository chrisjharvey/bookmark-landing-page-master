console.log('hello world')

const navbarToggler = document.querySelector('.navbar-toggler')
const navbarMenu = document.querySelector('#nav-bar ul')
const navLinks = document.querySelectorAll('#nav-bar a')
const nav = document.querySelector('#nav-bar')

navbarToggler.addEventListener('click', navbarTogglerClick)

function navbarTogglerClick() {
  navbarToggler.classList.toggle('open-navbar-toggler')
  navbarMenu.classList.toggle('open')
}

navLinks.forEach((elem) => elem.addEventListener('click', navbarLinkClick))

function navbarLinkClick() {
  if (navbarMenu.classList.contains('open')) {
    navbarToggler.click()
  }
}


const openCity = (evt, cityName) => {
  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}