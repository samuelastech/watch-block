const path = window.location.pathname

if(path.includes('watch')){
    document.body.innerHTML = "<p>It's blocked!</p>"
}