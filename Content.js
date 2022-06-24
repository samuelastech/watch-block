const path = window.location.pathname
const domain = window.location.hostname

if(domain.includes('youtube') && path.includes('watch')){
    document.body.innerHTML = "<p>It's blocked!</p>"
}