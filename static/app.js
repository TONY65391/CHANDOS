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
const loading = document.querySelector('.loading')

setTimeout(() => {
    loading.classList.add('fade');
}, 3000);
setTimeout(() => {
    document.body.removeChild(loading);
}, 5000);


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
    setTimeout(() => {
        sections[0].classList.add('reset');
    }, 1000);

    const all = document.getElementById('all');
    const school = document.getElementById('school');
    const cafeteria = document.getElementById('cafeteria');
    const restaurant = document.getElementById('restaurant');
    const golf = document.getElementById('golf');
    const library = document.getElementById('library');
    const projects = sections[1].querySelectorAll('.projects .project');
    const filters = [...sections[1].querySelectorAll('.filters button')];
    
    function resetFilters(){
        filters.forEach(filter => {
            filter.classList.remove('active');
        });
    };

    filters.map((filter, index) => {
        filter.addEventListener('click', () => {
            resetFilters();
            filters[index].classList.add('active');
        });
    });

    school.onclick = () => {
        projects.forEach(project => {
            project.style.display = "";
            const attribute = project.getAttribute('project');
            if (attribute != 'school'){
                project.style.display = 'none';
            };
        });
    };
    cafeteria.onclick = () => {
        projects.forEach(project => {
            project.style.display = "";
            const attribute = project.getAttribute('project');
            if (attribute != 'cafeteria'){
                project.style.display = 'none';
            };
        });
    };
    golf.onclick = () => {
        projects.forEach(project => {
            project.style.display = "";
            const attribute = project.getAttribute('project');
            if (attribute != 'golf'){
                project.style.display = 'none';
            };
        });
    };
    restaurant.onclick = () => {
        projects.forEach(project => {
            project.style.display = "";
            const attribute = project.getAttribute('project');
            if (attribute != 'restaurant'){
                project.style.display = 'none';
            };
        });
    };
    library.onclick = () => {
        projects.forEach(project => {
            project.style.display = "";
            const attribute = project.getAttribute('project');
            if (attribute != 'library'){
                project.style.display = 'none';
            };
        });
    };
    all.onclick = () => {
        projects.forEach(project => {
            project.style.display = "";
        });
    };
};