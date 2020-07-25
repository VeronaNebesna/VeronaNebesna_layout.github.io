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
  // ---------------Анімація блоків------------
  AOS.init();


// ---------------TABS-----------

let nameOfTabs = document.querySelectorAll(".name_tab");
// console.log(nameOfTabs);

let contantOfTabs = document.querySelectorAll(".tab");
// console.log(contantOfTabs);


function hideContantsTabs(i){
  contantOfTabs[i].classList.remove("show");
  contantOfTabs[i].classList.add("hide");
 
}

function showContantsTabs(i){
  contantOfTabs[i].classList.add("show");
  contantOfTabs[i].classList.remove("hide");
}

function addColorNameTabs(i){
  nameOfTabs[i].classList.add("click_tab_name");
}

function removeColorNameTabs(i){
   nameOfTabs[i].classList.remove("click_tab_name");
}

for(let i=0; i<nameOfTabs.length;i++){
  hideContantsTabs(1);
}

for(let i=0; i<nameOfTabs.length;i++){
nameOfTabs[i].addEventListener("click",function(e){
  if(e.target.classList.contains("name_tab")){
    showContantsTabs(i);
    addColorNameTabs(i);
    if(contantOfTabs[i].classList.contains("show")){
      for(let j =0; j<nameOfTabs.length; j++){
        if(j !==i){
          hideContantsTabs(j);
          removeColorNameTabs(j);
        }
      }

    }
    
}
})

}


    // ----------------------MENU SCROLL

    let scrollMenu = document.querySelector(".header_sticky");
    console.log(scrollMenu);
    window.addEventListener("scroll",function(){
      scrollMenu.classList.add("fixed_menu");
      if(window.pageYOffset == 0){
        scrollMenu.classList.remove("fixed_menu");
      }
    })
    