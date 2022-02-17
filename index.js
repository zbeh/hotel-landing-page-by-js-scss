var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " actives";
}
 setInterval(function(){ 
     plusSlides(1);
 }, 3000);


/////////////////////////////////////////////////////////
function openMenu() {
  $(".three").addClass("active");
  $(".drawer-menu").animate(
   {
     width: "22vw", 
     // height: "100vh",
   },
      "slow"
  );
  
  $(".three").animate(
    {
      marginRight: "10vw",
    },
    "slow"
  );
  
  $(".logo").css({
    display: "none",
  });
}
///////////////////////////////////////////
function closeMenu() {
  $(".three").removeClass("active");
  $(".drawer-menu").animate(
    {
     width: "0",
      // height: "100vh",
    },
    100
  );
  $(".logo").css({
    display: "flex",
  });
  $(".three").animate(
    {
      marginRight: "0vw",
    },
    "slow"
  );
}
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////






