let btnUp = document.querySelector('.arrow_footer');
console.log(btnUp);

btnUp.addEventListener("click",function(){
    window.scrollTo(0,0);
    
})

// $(".slider_foto_dog").slick({
//     dots:true,
    
//     // autoplay:true,
//     // autoplaySpeed:1000,
// })


// $('.slider_foto_dog').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay:true,
//     autoplaySpeed:3000,
//     arrows:true,


//   });


  AOS.init();