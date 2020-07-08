  
  let btnUp = document.querySelector('.arrow_footer');
  console.log(btnUp);
  
  btnUp.addEventListener("click",function(){
      window.scrollTo(0,0);
      
  })
  
  
  $('.slider_foto_dog').slick({
    centerMode: true,
    autoplay:true,
    autoplaySpeed:2000,
    centerPadding: '100px',
    slidesToShow: 1,
    dots:true,
    infinite:true,
  });

  AOS.init();