const empty = true;

function openmodel() {
    const show = document.querySelector('.popup');
    const main = document.getElementById('main')
    const email = document.getElementById('email').value;
    const email2 = document.getElementById('email');
    const regex = /^.+@gmail\.com$/;
    const change = document.getElementById('get');


    if (regex.test(email)) {
        console.log(true);
        show.classList.add('open');
        main.style.display = 'none'
        change.innerHTML = `<span id="get">${email}.</span>`
        email2.removeAttribute('style');
        document.getElementById('email').value = ""

    }
    else {
        console.log(false);
        email2.style.borderColor = 'red'
    }
}

function closemodal() {
    const main = document.getElementById('main')
    const show = document.querySelector('.popup');
    main.style.display = 'flex'
    show.classList.remove('open');
}
