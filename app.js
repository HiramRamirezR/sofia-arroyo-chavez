const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const invitacion = document.querySelector('.invitacion')
const confirmar = document.querySelector('.confirmar')
const modalInvitacion = document.querySelector('.modalInvitacion')
const modalConfirmar = document.querySelector('.modalConfirmar')
const modalContador = document.querySelector('.modalContador')
const star = document.querySelector('.star')
const chars = document.querySelector('.chars')
const bgs = document.querySelector('.bgs')

const peach = document.querySelector('.peach')
const dialogos = ['/audio/peach1.mp3', '/audio/peach2.mp3', '/audio/peach3.mp3', '/audio/peach4.mp3']
let diag = Math.floor(Math.random() * 4)
let peachSound = new Audio(dialogos[diag])

let pista = Math.floor(Math.random() * 3)
let musica = new Audio('/audio/musica.mp3')


play.addEventListener('click', () => {
  musica.play();
  aPlay.classList.add('hidden');
  aPause.classList.remove('hidden');
});

pause.addEventListener('click', () => {
  musica.pause()
  aPlay.classList.toggle('hidden')
  aPause.classList.toggle('hidden')
})

confirmar.addEventListener('click', () => {

  if (modalConfirmar.classList.contains('hidden')) {
    modalConfirmar.classList.remove('hidden')
    modalConfirmar.style.display = 'flex';
    modalConfirmar.style.justifyContent = 'space-around';
    modalConfirmar.style.alignItems = 'center';
    modalInvitacion.classList.add('hidden')
    modalContador.classList.add('hidden')
    star.classList.add('hidden')
  } else {
    modalConfirmar.classList.add('hidden')
    modalConfirmar.style.display = 'none';
    modalInvitacion.classList.add('hidden')
    modalContador.classList.add('hidden')
    star.classList.add('hidden')
  }
})

fecha.addEventListener('click', () => {
  modalContador.classList.toggle('hidden')
  modalInvitacion.classList.add('hidden')
  modalConfirmar.classList.add('hidden')
  modalConfirmar.style.display = 'none';
  star.classList.toggle('hidden')
})

let num = 1
chars.addEventListener('click', () => {
  num++
  if (num > 6) {
    num = 1
  }
  peach.src = `/images/peach${num}.${'png'}`
})

let bg = 1
bgs.addEventListener('click', () => {
  bg++
  if (bg > 2) {
    bg = 1
  }
  document.body.style.backgroundImage = `url(/images/bg${bg}.${'png'})`
})
