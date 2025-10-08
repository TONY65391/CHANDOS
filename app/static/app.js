const header = document.querySelector('header');
const openBtn = header.querySelector('.openBtn');
const menu = header.querySelector('.menu');

openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    header.classList.toggle('active');
}

const sections = document.querySelectorAll('main section');
const secondSection = sections[1];
const thirdSection = sections[2];
const fourthSection = sections[3];
const body = document.getElementsByTagName('body')[0];
const loading = document.querySelector('.loading')

if (loading){
    setTimeout(() => {
        loading.classList.add('fade');
    }, 3000);
    setTimeout(() => {
        document.body.removeChild(loading);
    }, 5000);
}

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
    
    filters[0].classList.add('active');
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


const form = document.getElementById('form');
const nameInput = form.querySelector('#id_name');
const usernameInput = form.querySelector('#id_username');
const emailInput = form.querySelector('#id_email');
const passwordInput = form.querySelector('#id_password');
const errorContainer = document.querySelector('.error');
const errorList = document.querySelector('.error .sub ul');
const errorBtn = document.querySelector('.error .sub button');

if (errorBtn){
    errorBtn.addEventListener('click', () => {
        errorContainer.classList.remove('show');
        errorContainer.classList.add('hide');
        console.log(errorContainer);
    })
}

if (form){
    form.addEventListener('submit', (e) => {

        if (nameInput){
            error = Signup(usernameInput.value, emailInput.value, passwordInput.value)
            if (error.length > 0){
                e.preventDefault();
                errorList.innerHTML = "";
                for (i = 0; i < error.length; i++){
                    errorContainer.classList.add('show');
                    const li = document.createElement('li');
                    li.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> ' + error[i];
                    errorList.append(li);
                }
            }
        }
        else{
            error = Login(usernameInput.value, passwordInput.value)
            console.clear()
            if (error.length > 0){
                e.preventDefault();
                errorList.innerHTML = "";
                for (i = 0; i < error.length; i++){
                    errorContainer.classList.remove('hide');
                    errorContainer.classList.add('show');
                    const li = document.createElement('li');
                    li.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> ' + error[i];
                    errorList.append(li);
                }
            }
        }

        function Signup(username, email, password){
            var error = [];

            if (username.includes(" ")){
                error.push('Username must not contain space')
            }
            if (username.includes("@") === false){
                error.push('Username must contain the "@" symbol')
            }
            if (username.length < 10){
                error.push('Username must have at least 10 characters')
            }
            if (email.includes(" ")){
                error.push('Email must not contain space')
            }
            if (email.includes('@') === false){
                error.push('Email must contain the "@" symbol')
            }
            if (password.includes('')){
                error.push('Password must not contain space')
            }
            if (password.length < 8){
                error.push('Password must have at least 8 characters')
            }

            return error;
        };

        function Login(username, password){
            var error = [];

            if (username.includes(" ")){
                error.push('Username must not contain space')
            }
            if (username.includes('@') === false){
                error.push('Username must contain the "@" symbol')
            }
            if (username.length < 10){
                error.push('Username must have at least 10 characters')
            }
            if (username !== '@judokuollualbol'){
                error.push('User does not exist!')
            }
            if (password !== 'judokuollualbol001'){
                error.push(`Wrong password for ${username} user`)
            }
            if (password.includes(" ")){
                error.push('Password must not contain space')
            }
            if (password.length < 8){
                error.push('Password must have at least 8 characters')
            }

            return error;
        }
    })
}