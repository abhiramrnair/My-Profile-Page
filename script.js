let menuIcon=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top>=offset && top<offset+height){
            navlinks.forEach(links => {
                links.classList.remove('head');
                document.querySelector('header nav a[href*=' + id +']').classList.add('head');
            })
        }
    })
};
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('head')
}