$(document).ready(function () {
    
    // smoth work for section
$(".main-menu li a").on('click',function(slow){
    if(this.hash !== " "){
        slow.preventDefault();
 
        var hash=this.hash;
        $("html, body").animate({
            scrollTop:$(hash).offset().top
        },800,function(){
            window.location=hash;
        } 
        );
    }
 })
 


// slider jq
$(".owl-carousel").owlCarousel({
    loop:true,
    autoplayTimeout:800,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1200:{
            items:6,
        }
    }
});

//   serch option jq 

$(".navbar-serch").click(function(){
    $(".serch-option").toggle();
  });



  // scroll top btn jq
  $(".top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },2000)
 });

 $(window).scroll(function(){
    var ourwindow=$(this).scrollTop();
 
    if(ourwindow<200){
     $(".top").fadeOut();
     }
    else{
      $(".top").fadeIn();
    }
 // nav bar jq
    if(ourwindow>100){
        $("nav").addClass("sticky-menu");
    }
    else{ 
        $("nav").removeClass("sticky-menu")
    }
 
 });


 $('[data-fancybox="glarry"]').fancybox({
    
    thumbs : {
        autoStart : true
      }
  });



//  wow js for animation
 
new WOW().init();

$('.carousel').carousel({
          
  })
    
  


});


// var navserchbtn=document.querySelector(".navbar-serch");
// var navserchoption=document.querySelector(".serch-option");
// navserchbtn.addEventListener("click",function(){
//     navserchoption.style.display = 'none';
// })

var webloder=document.querySelector(".loder");
function siteloder(){
    webloder.style.display="none";
}
alert("Hey Do You Know That? It Is Demo Web tamplate Created By Developer Jahed");


