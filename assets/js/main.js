const ratings = document.querySelectorAll('.rating-item');
let formValue = null

function send() {
    if(!formValue){
        return window.alert('You must choose an option.')
    } else {
        window.open('validate.html')
    }


}

function unclick() {
    const selected = document.querySelectorAll('.rating-item.active');
    for(var rating of ratings){
        rating.classList.remove('active')
    }
}

function select(event) {
    const button = event.target
    const value = button.innerText;

    if (formValue == value) {
        formValue = null
    } else {
        unclick()
        formValue = value
    }

    button.classList.toggle('active')
    console.log(formValue)

    window.localStorage.setItem('containForm', formValue);

}

for(var rating of ratings){
    rating.addEventListener('click', select)
}


