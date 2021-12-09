console.log('file correctly linked')

const buttons = document.querySelectorAll('.delete-btn')

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', async(e) => {
        e.preventDefault()
        const postId = e.target.id
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        // console.log(data)
        if (data.message === "Success") {
            const post = document.querySelector(`#post-container-${postId}`)
            post.remove()
        }
    })
}