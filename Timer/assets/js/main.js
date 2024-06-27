function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); 
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

const ps = document.querySelectorAll('p');

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', pausarRelogio);
zerar.addEventListener('click', zerarRelogio);

let segundos = 0;
let timer;

function iniciarRelogio() {
    trocaCor('black');
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1);
}

function pausarRelogio() {
    clearInterval(timer);
    trocaCor('red');
}

function zerarRelogio() {
    trocaCor('black');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}

function trocaCor(color) {
    for (let p of ps) {
        p.style.color = color;
    }
}
