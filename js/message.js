const btn = document.querySelector('.send-message')

btn.addEventListener('click', function() {
    const userMessage = document.querySelector('.user-message').value
    if (userMessage) {
        $.ajax({
            type: 'POST',
            url: 'URL',
            data: {userMessage: userMessage}
        })
    }
})