// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjhmZjBlNDhlOTA2NzQ3MTQyMTBkNjgiLCJpYXQiOjE2NTkwOTkzNDksImV4cCI6MTY1OTExMzc0OX0.mF2J6KD1nA8qBF7034OsFXL0vCOCFtgA7idAI05E-90';

// console.log(token);
// localStorage.setItem('token', token);

const miFormulario = document.querySelector('form');


const url = (window.location.hostname.includes('localhost'))
    ? 'http://localhost:3001/api/auth/'
    : 'http://localhost:3001/api/auth/';

miFormulario.addEventListener('submit', ev => {
    ev.preventDefault();
    // const formData = {};

    // for (let el of miFormulario.elements) {
    //     if (el.name.lenght > 0) {
    //         formData[el.name] = el.value
    //     }
    // }

    const formData = {
        correo: "pedro@test.com",
        password: "123456"
    }

    fetch(url + 'login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(resp => resp.json())
        .then(({ msg, token }) => {
            if (msg) {
                return console.error(msg);
            }
            localStorage.setItem('token', token);
        })
        .catch(err => console.log(err));
})

