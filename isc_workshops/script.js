const navButton = document.getElementById('navButton');
// console.log(navButton)
const navLinks = document.getElementById('navLinks');
// console.log(navLinks)
navButton.addEventListener('click', function(){
    navLinks.classList.toggle('active');
})