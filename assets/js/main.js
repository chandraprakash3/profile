/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/*========work details section=====*/

// Get the modal
// var modal = document.getElementById('work-details-modal');

// // Function to open modal and display job details
// function openModal(jobRole, jobDetails) {
//     var modalJobRole = document.getElementById('job-role');
//     var modalJobDetails = document.getElementById('job-details');

//     modalJobRole.textContent = jobRole;
//     modalJobDetails.textContent = jobDetails;

//     modal.style.display = 'block';
// }

// // Function to close modal
// function closeModal() {
//     modal.style.display = 'none';
// }

// // Add click event listeners to work items
// var workItems = document.querySelectorAll('.work__item');
// workItems.forEach(function(workItem) {
//     workItem.addEventListener('click', function(e) {
//         e.preventDefault();
//         var jobRole = workItem.getAttribute('data-info');
//         var jobDetails = 'Here are the responsibilities and details for the ' + jobRole + ' position.';
//         openModal(jobRole, jobDetails);
//     });
// });
