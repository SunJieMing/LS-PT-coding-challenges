const divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', (event) => event.target.classList.toggle('blue'));
}
