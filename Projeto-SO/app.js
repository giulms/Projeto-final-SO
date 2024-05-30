const links = document.querySelectorAll('.link');
const contentLink = document.querySelectorAll('.content-link');
const anchors = document.querySelectorAll('a');
const currentUrl = window.location.href;

links.forEach(link => {
    if (currentUrl.includes(link.href)) {
        link.classList.add('active');
    }
})

contentLink.forEach(link => {
    link.addEventListener('click', () => {
        contentLink.forEach(item => item.classList.remove('current-content'));
        link.classList.add('current-content');
    });
});


window.onload = () => {

    contentLink.forEach(link => {
        if (link.firstElementChild.href === currentUrl) {
            link.classList.add('current-content');
        }
    })
    
}


