const form = document.querySelector('.menu')
const label = document.querySelector('.hidden')
const inp = document.querySelector('#hidden')

let code
let tries = 5
let eol_type

form.addEventListener('sumbit', function(event) {
    event.preventDefault();
    const formData = new FormData(form)
    const email = formData.get('email')
    const username = formData.get('username')
    const password1 = formData.get('password1')
    const password2 = formData.get('password2')

    // VALIDATION
    if (password1 != password2) {
        window.location = 'URL'
    }

    if (email.contains('@')) {
        eol_type = 'email'
    } else {
        eol_type = 'login'
    }

    // OTHER BORING THINGS
    if (code) {
        if (tries === 0) {
            tries = 5
            code = undefined
            label.classList.add('hidden')
            inp.classList.add('hidden')
        } else {
            const userCode = formData.get('code')
            if (userCode === code) {
                $.ajax({
                    type: 'POST',
                    url: 'URL',
                    data: {success: true}
                })
            }
            tries -= 1
        }
    } else {
        $.ajax({
            type: 'POST',
            url: 'URL',
            data: {email: email, username: username, password: password1},
            success: function(response) {
                code = JSON.parse(response).code
                if (label.classList.contains('hidden')) {
                    label.classList.remove('hidden')
                    inp.classList.remove('hidden')
                }
            },
            error: function() {
                window.location = 'URL'
            }
        })
    }
})