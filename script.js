const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'rgb(239, 239, 9)'
        body.style.color = 'rgb(2, 1, 45)'
        body.style.transition = '1s'
    }else {
        body.style.background = 'rgb(2, 1, 45)'
        body.style.color = 'rgb(239, 239, 9)'
        body.style.transition = '1s'
    }
})