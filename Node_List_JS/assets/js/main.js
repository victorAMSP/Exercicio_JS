const paragraph = document.querySelector('.paragrafos');
const ps = paragraph.querySelectorAll('p');
const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
}