
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        document.querySelector('nav').style.backgroundColor = 'white'
    }else{
        document.querySelector('nav').style.backgroundColor = 'transparent'
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });