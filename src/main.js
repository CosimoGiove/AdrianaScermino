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
  }else {
    masterElementsimgss.classList.remove('active');
  }
});

const masterElements = document.querySelector('.dicono');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementss.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElements.classList.add('active');
  }else {
    masterElementsimgs.classList.remove('active');
  }
});
const masterElementsimg = document.querySelector('.animazione');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementss.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElementsimg.classList.add('active');
  } else {
    masterElementsimg.classList.remove('active');
  }
});
const masterElementsimgs = document.querySelector('.imgfamoso');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementsimgs.offsetTop; // Fix typo here

  if (scrollPosition >= elementPosition) {
    masterElementsimgs.classList.add('active');
  } else {
    masterElementsimgs.classList.remove('active');
  }
});

const masterElementsimgss = document.querySelector('.prima');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementsimgss.offsetTop; // Fix typo here

  if (scrollPosition >= elementPosition) {
    masterElementsimgss.classList.add('active');
  } else {
    masterElementsimgss.classList.remove('active');
  }
});

const masterElementsimgsss = document.querySelector('.seconda');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementsimgsss.offsetTop; // Fix typo here

  if (scrollPosition >= elementPosition) {
    masterElementsimgsss.classList.add('active');
  } else {
    masterElementsimgsss.classList.remove('active');
  }
});
const masterElementsimgssss = document.querySelector('.terza');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementsimgssss.offsetTop; // Fix typo here

  if (scrollPosition >= elementPosition) {
    masterElementsimgssss.classList.add('active');
  } else {
    masterElementsimgssss.classList.remove('active');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Show the loading indicator initially
  document.getElementById("loading-indicator").style.display = "block";

  // Hide the loading indicator when the page is fully loaded
  window.addEventListener("load", function() {
    document.getElementById("loading-indicator").style.display = "none";
  });
});