const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    loading.style.display = 'block';
    setTimeout(() => {
        //milisaniye olarak yazilir settime out. gecikme saglar.
        loading.style.display = 'none'
    }, 1500);
});