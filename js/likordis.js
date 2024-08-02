

window.addEventListener('click', function(event) {
    // if (event.target.closest('.commentary')) {
    //     const comment = event.target.closest('.commentary')
    // }
    if (event.target.closest('.like')) {
        const comment = event.target.closest('.commentary')
        const likes = comment.querySelector('.people-like')
        const seller_id = parseInt(comment.querySelector('.seller_id').value)
        const user_id = parseInt(document.querySelector('.user_id').value)
        $.ajax({
            type: 'POST',
            url: 'URL',
            data: {action: 'like', seller_id: seller_id, user_id: user_id},
            success: function() {
                likes.innerText = parseInt(likes.innerText) + 1
            }
        })
    } else if (event.target.closest('.dislike')) {
        const comment = event.target.closest('.commentary')
        const likes = comment.querySelector('.people-dislike')
        const seller_id = parseInt(comment.querySelector('.seller_id').value)
        const user_id = parseInt(document.querySelector('.user_id').value)
        $.ajax({
            type: 'POST',
            url: 'URL',
            data: {action: 'dislike', seller_id: seller_id, user_id: user_id},
            success: function() {
                likes.innerText = parseInt(likes.innerText) - 1
            }
        })
    }
})