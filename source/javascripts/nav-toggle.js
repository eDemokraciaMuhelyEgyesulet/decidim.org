function navToggle() {
  document.querySelector('body').classList.add('is-nav-active')
  function toggleNavClass(e) {
    e.preventDefault()
    document.querySelector('body').classList.toggle('is-nav-open')
  }
  document
    .querySelector('.main-nav__trigger')
    .addEventListener('click', toggleNavClass)
}

navToggle()
