const header = document.querySelector('header');
const openBtn = header.querySelector('.openBtn');
const menu = header.querySelector('.menu');

openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    header.classList.toggle('open');
}

const sections = document.querySelectorAll('main section');
const secondSection = sections[1];
const thirdSection = sections[2];
const fourthSection = sections[3];
const body = document.getElementsByTagName('body')[0];


if (body.classList.contains('indexPage')){
    setTimeout(() => {
        sections[0].classList.add('reset');
    }, 1000);

    window.addEventListener('scroll', () => {
        const secondSectionRect = secondSection.getBoundingClientRect();
        if (secondSectionRect.top <= 100){
            secondSection.classList.add('reset');
        }
    })
}

else if(body.classList.contains('projectsPage')){
    console.log("PRojects")
}