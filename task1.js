const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        e.target.parentNode.style.backgroundColor = '#ffffff';
        e.target.style.color = '#000000';
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        e.target.parentNode.style.backgroundColor = '';
        e.target.style.color = '';
    }
});
