import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const masterElementss = document.querySelector('.contenitoreimmagine2');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementss.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElementss.classList.add('active');
  }
});

const masterElements = document.querySelector('.dicono');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementss.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElements.classList.add('active');
  }
});
const masterElementsimg = document.querySelector('.animazione');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementss.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElementsimg.classList.add('active');
  }
});