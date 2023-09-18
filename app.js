//ELEMENTS
const menuImage = document.getElementById('img-menu-cafe-te-arte');

// FUNCTIONS
function
quitLoadScreen ()
{
  menuImage.style.display = 'block';
  setTimeout(() => {
    const loadingScreen = document.querySelector('.carga');
    loadingScreen.classList.add('desaparecer-arriba');
  },3000)
}


// CALLS
quitLoadScreen();