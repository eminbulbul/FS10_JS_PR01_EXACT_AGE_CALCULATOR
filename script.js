const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const countdown = document.querySelector('#countdown');
console.log(countdown);

const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    loading.style.display = 'block';
    setTimeout(() => {
        //milisaniye olarak yazilir settime out. gecikme saglar.
        loading.style.display = 'none'
        countdown.style.display = 'flex'
    }, 1500);
    // years.innerHTML = '00';
    // months.innerHTML = '00';
    // days.innerHTML = '00';
    // hours.innerHTML = '00';
    // minutes.innerHTML = '00';
    // seconds.innerHTML = '00';

    //asagidaki gibide yazilabilir

    let h2Elements = document.getElementsByTagName('h2');
    // console.log('h2Elements', h2Elements);
    // for (let index = 0; index < h2Elements.length; index++) {
    //     h2Elements[index].innerHTML = '00';
    // }

    //asagidaki gibi de yazilabilir.

    let h2Elements2 = countdown.querySelectorAll('h2');
    console.log('h2Elements2', h2Elements2);

    //nodeList.forEach()
    //Array.forEach()

    // h2Elements2.forEach(i => {
    //     console.log(i);
    //     i.innerHTML = '00'
    // });


    // convert to array from html collection
    // Array.from(h2Elements).forEach(i => {
    //     i.innerHTMl = '00';
    // });
    [...h2Elements].forEach(i => {
        i.innerHTML = '00';
    });

});

let selectedBirthDay = new Date();

let birthdayInput = document.querySelector("input[name=birthday]");

birthdayInput.addEventListener("change", (event) => {
    console.log(event.target);
    selectedBirthDay = new Date(event.target.value);
    if (selectedBirthDay > new Date()) {
        alert("Date of birthday can't be bigger than today !!")
    }
});