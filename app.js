//ELEMENTS
const menuImage = document.getElementById('img-menu-cafe-te-arte');

// TRIGGERS/EVENTS
window.addEventListener('resize',confContent);

// FUNCTIONS/EVENT HANDLERS
function
quitLoadScreen ()
{
  menuImage.style.display = 'block';
  setTimeout(() => {
    const loadingScreen = document.querySelector('.carga');
    loadingScreen.classList.add('desaparecer-arriba');
  },0)// cambiar a 3000
}

// 
function 
detectarTipoDeDispositivo ()
{
  // basado en user agent
  const userAgent = navigator.userAgent;
  const tipoDispositivo =
  (userAgent.indexOf("Android") !== -1 || userAgent.indexOf("iPhone") !== -1)?
  'phone': 'no-phone';
  return tipoDispositivo;
}
function orientacionCelular ()
{
  const deviceWidth = window.innerWidth;
  const deviceHeight = window.innerHeight;
  const estaAcostado = (deviceWidth > deviceHeight);
  
  return estaAcostado ? 'acostado' : 'parado';
}
function confContent()
{
  const esCelular = detectarTipoDeDispositivo() === 'phone';
  const estaAcostado = orientacionCelular() === 'acostado';
  if ( esCelular )
    if ( estaAcostado )
      alert('Por favor orienta tu celular verticalmente para visualizar el menu de manera correcta');
}



// CALLS
quitLoadScreen();
confContent();