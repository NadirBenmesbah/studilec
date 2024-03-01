const navButton = document.getElementById('navButton');
const navLinks = document.getElementById('navLinks');
navButton.addEventListener('click', function () {
    navLinks.classList.toggle('active');
})
const up = document.getElementById('up');
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        up.classList.remove('activeScroll');
    }
    else {
        up.classList.add('activeScroll');
    }
})
up.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
    });
  });
  const modulesButton = document.getElementById('modulesButton');
  const modules = document.getElementById('modules');
  modulesButton.addEventListener('click', function () {
      modules.classList.toggle('modulesActive');
      modulesButton.classList.toggle('modulesDivActive')
  })
  const studentButton = document.getElementById('studentDiv');
  const student = document.getElementById('student');
  studentButton.addEventListener('click', function(){
      student.classList.toggle('studentActive');
      navLinks.classList.toggle('active2');
  })
