localStorage.setItem('workFieldActive', 'ux');

let uxClick = document.getElementById('ux-work');
let illustrationsClick = document.getElementById('illustrations-work');
let animationsClick = document.getElementById('animations-work');

uxClick.addEventListener('click', function (e) {
    localStorage.setItem('workFieldActive', 'ux');
})

illustrationsClick.addEventListener('click', function (e) {
    localStorage.setItem('workFieldActive', 'illustration');
})

animationsClick.addEventListener('click', function (e) {
    localStorage.setItem('workFieldActive', 'animation');
})