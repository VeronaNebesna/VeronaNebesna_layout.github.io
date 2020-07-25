  
// --------Прокручування сторінки вверх -------

$(".arrow_footer").click(function(){
  $("body,html").animate({
    scrollTop:0
  },1000)
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



  // --------------------- Мобільне меню ------------
  
  let burgerMenu = document.querySelector(".mobile-menu");

  let showMenu = document.querySelector(".navigation");

  burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle("active_menu")
    if(burgerMenu.classList.contains("active_menu")){
      showMenu.classList.add("active_menu");
    }else{
      showMenu.classList.remove("active_menu")
    }
  })

  let closeBtnMobileMenu = document.querySelector(".close");
  // console.log(closeBtnMobileMenu)
  closeBtnMobileMenu.addEventListener("click",function(){
    
      showMenu.classList.remove("active_menu");
      burgerMenu.classList.toggle("active_menu")
    
  })

    // ----------------------MENU SCROLL

let scrollMenu = document.querySelector(".header_sticky");
console.log(scrollMenu);
window.addEventListener("scroll",function(){
  scrollMenu.classList.add("fixed_menu");
  if(window.pageYOffset == 0){
    scrollMenu.classList.remove("fixed_menu");
  }
})
