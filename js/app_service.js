 // --------Прокручування сторінки вверх -------

$(".arrow_footer").click(function(){
  $("body,html").animate({
    scrollTop:0
  },1000)
}) 
 
 
 
 
 
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
  
  AOS.init();
