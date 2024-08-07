const form = document.querySelector('.menu')
const label = document.querySelector('.hidden')
const inp = document.querySelector('#code')
let code
let tries = 5
let eol_type


form.addEventListener('sumbit', function(event) {
    event.preventDefault();
    const formData = new FormData(form)

    const eol = formData.get('eol')
    const password = formData.get('password')
    // CHECK DATA ON VALIDATION
    if (eol.contains('@')) {
        eol_type = 'email'
    } else {
        eol_type = 'login'
    }

    if (code) {
        if (tries === 0) {
            tries = 5
            code = undefined
            // REMOVE CODE INPUT
            label.classList.add('hidden')
            inp.classList.add('hidden')
        } else {
            const userCode = formData.get('code')
            if (userCode === code) {
                $.ajax({
                    type: 'POST',
                    url: 'URL',
                    data: {success: true},
                })
                window.location = 'URL'
            }
            tries -= 1
        }
    } else {
        $.ajax({
            type: 'POST',
            // PUT URL HERE
            url: 'url',
            data: {eol: [eol, eol_type], password: password},
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