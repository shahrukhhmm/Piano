
const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
  const sound = document.getElementById(key.dataset.note)
  sound.currentTime = 0
  sound.play()
  key.classList.add('active')
  sound.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}