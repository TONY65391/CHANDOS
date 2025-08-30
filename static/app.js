const header = document.querySelector('header');
const openBtn = header.querySelector('.openBtn');
const menu = header.querySelector('.menu');

openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    header.classList.toggle('open');
}