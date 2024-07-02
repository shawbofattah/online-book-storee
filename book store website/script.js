
/*== toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*== counter section  ===*/

let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {

 let startValue = 0;
 let endValue = parseInt(valueDisplay.getAttribute('data-value'));

 let duraction = Math.floor(interval/endValue);
 let counter = setInterval(function(){

    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue) {
        clearInterval(counter);

    }
    



 }, duraction);


});

/*== scroll section active ===*/

let cesctions = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top >=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' +id + ']').classList.add('active');


            });
        };
    });


    /*== sticky navbar ===*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*== remove toggle icon navbar when click navbar link ===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}

    /*== swiper demo ===*/


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
       
      });


      /* scroll reveal */


ScrollReveal().reveal( {
    distance:'120px'
});

ScrollReveal().reveal('.home-content', { duration:1500, delay: 500 });
ScrollReveal().reveal('.home-content h2, .price-row, .contact-row', {origin:'top' ,delay: 500 });
/* ScrollReveal().reveal('.counter-row', { duration: 1500 ,delay: 2500 });  this part is not working */
ScrollReveal().reveal('#overview .row .col-2', { origin:'left', duration:1000, delay: 1000 });
ScrollReveal().reveal('#overview .row .col-2 img', { origin: 'top', duration: 1000, delay: 1500 });
ScrollReveal().reveal('.review .video', { origin: 'bottom', duration: 500, delay: 1000});
ScrollReveal().reveal('#author .author-row', { origin: 'right', duration: 500, delay: 1000 });
