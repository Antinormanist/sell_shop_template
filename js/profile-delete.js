const menu5 = document.querySelector('.sure-menu')
const label = document.querySelector('.label-s')
const inp = document.querySelector('.input-s')
let code


window.addEventListener('click', function(event) {
    if (!menu5.classList.contains('none') && event.target.closest('.sure-menu') === null) {
        menu5.classList.add('none')
        if (!label.classList.contains('none')) {
            label.classList.add('none')
            inp.classList.add('none')
        }
    }
    
    if (event.target.closest('.del-btn')) {
        if (menu5.classList.contains('none')) {
            menu5.classList.remove('none')
        }
    }
})

window.addEventListener('click', function(event) {
    if (event.target.closest('.sure-btn')) {
        if (code) {
            if (code === inp.value) {
                $.ajax({
                    type: 'POST',
                    url: 'URL',
                    data: {success: 1}
                })
            } else {
                window.location = 'URL'
            }
        } else {
            label.classList.remove('none')
            inp.classList.remove('none')
            $.ajax({
                type: 'POST',
                url: 'URL',
                data: {card: 1},
                success: function(response) {
                    code = JSON.parse(response).code
                }
            })
        }
    }
})