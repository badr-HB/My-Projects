let dark = false;

function darkmode() {
    const change = document.getElementById('change');
    const text = document.querySelector('.text');
    const containers = document.querySelectorAll('.container');
    const CountainerText = document.querySelectorAll('.CountainerText');
    const BoxBtn = document.querySelectorAll('.BoxBtn');
    const header_child = document.querySelector('.header_child');
    const click_moon = document.querySelector('.click_moon');
    const btn = document.querySelectorAll('.btn');

    if (dark == false) {
        change.innerHTML = `<img src="../browser-extensions-manager-ui-main/assets/images/icon-sun.svg"
                    alt="">`
        document.body.style.background = 'linear-gradient(180deg, #000000 0%, #0A2540 100%)';
        text.style.color = 'white';
        containers.forEach(container => {
            container.style.background = 'hsl(225, 23%, 24%)';
        });
        CountainerText.forEach(text => {
            text.style.color = 'white'
        });
        BoxBtn.forEach(button => {
            button.style.background = 'hsl(225, 23%, 24%)'
            button.style.color = 'white'
            button.addEventListener("mouseover", () => {
                button.style.background = 'hsl(3, 77%, 44%)'
            });
            button.addEventListener("mouseout", () => {
                button.style.background = 'hsl(225, 23%, 24%)'
            });
        });
        header_child.style.background = 'hsl(225, 23%, 24%)';
        click_moon.style.background = 'hsl(225, 23%, 24%)';
        click_moon.style.borderColor = 'gray';
        btn.forEach(button => {
            button.style.background = 'hsl(225, 23%, 24%)'
            button.style.color = 'white'
            button.addEventListener("mouseover", () => {
                button.style.background = 'hsl(3, 77%, 44%)'
            });
            button.addEventListener("mouseout", () => {
                button.style.background = 'hsl(225, 23%, 24%)'
            });
        })
        dark = true;
    }
    else {
        change.innerHTML = `<img src="../browser-extensions-manager-ui-main/assets/images/icon-moon.svg"
                    alt="">`
        document.body.removeAttribute("style");
        text.removeAttribute('style');
        containers.forEach(container => {
            container.removeAttribute('style');
        })
        CountainerText.forEach(text => {
            text.removeAttribute('style')
        });
        BoxBtn.forEach(button => {
            button.removeAttribute('style')
            button.addEventListener("mouseover", () => {
                button.removeAttribute('style')
            });
            button.addEventListener("mouseout", () => {
                button.removeAttribute('style')
            });
        });
        header_child.removeAttribute('style');
        click_moon.removeAttribute('style');
        btn.forEach(button => {
            button.removeAttribute('style')
            button.addEventListener("mouseover", () => {
                button.removeAttribute('style')
            });
            button.addEventListener("mouseout", () => {
                button.removeAttribute('style')
            });
        });
        dark = false;
    }

}

function checking(element) {

    if(element.checked){
        element.value = true
    }
    else{
        element.value = false   
    }
}

function ShowActive(){
    const checkme = document.querySelectorAll('.checkme');
    checkme.forEach(check => {
        if(check.value === 'false'){
            check.parentElement.parentElement.style.display = 'none';
        }
        else{
            check.parentElement.parentElement.style.display = 'block';
        }
    })
    
}

function ShowInaActive(){
    const checkme = document.querySelectorAll('.checkme');
    checkme.forEach(check => {
        if(check.value === 'true'){
            check.parentElement.parentElement.style.display = 'none';
        }
        else{
            check.parentElement.parentElement.style.display = 'block';
        }
    })
    
}
function ShowAll(){
    const checkme = document.querySelectorAll('.checkme');
    checkme.forEach(check => {
            check.parentElement.parentElement.style.display = 'block';
    })
}
const checkme = document.querySelectorAll('.checkme');
checkme.forEach(check => {
    check.value = false
});

function deleteit(element){
    element.parentElement.parentElement.remove();
}