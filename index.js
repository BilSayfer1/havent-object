let form = document.forms.signup
let inputs = form.querySelectorAll('input')
let requireds = document.querySelectorAll(`.req`).length
form.onsubmit = (event) => {
    event.preventDefault()
    let errors = 0

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')

        if (isRequest === true && inp.value.length === 0) {
            errors +=1
            inp.parentNode.classList.add('error')
        } else {
            inp.parentNode.classList.remove('error')
        }
    });
    console.log({
        errors,
        succes: requireds - errors
    });

    if (errors > 0) {
        alert('Error fill all fields')
        return
    }

    submit(event.target)
}

function submit(form) {
    let fm = new FormData(form)

    let user = {}

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}
