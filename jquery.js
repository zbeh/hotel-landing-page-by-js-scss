$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoWidth: true,
      autoplay: true,
      autoPlaySpeed: 500,
      autoplayTimeOut: 500,
      dots: true,
      navText: [
        "<div class='nav-btn prev-slide'><</div>",
        "<div class='nav-btn next-slide'><</div>",
      ],
    });
  
    $(".owl-carousel").on("changed.owl.carousel", function (event) {
      let item = event.item.index - 2;
      $("h3 , button").removeClass("animated fadeInUp");
      $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find("h3 , button")
        .addClass("animated fadeInUp");
    });
   /////////////////////////////////////////
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
    
    $(".three").click(function () {
      if ($(".three").hasClass("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    ///////////////////////////////////////////////////////////
    $("#home").click(function(){
      $('.sub-menu-1').css({
        width:"150px",
        padding:"1rem"
      }, "slow")
    })
    $(".sub-menu-1").mouseleave(function(){
      $(this).css({
        width:"0",
        padding:"0"
      }, "slow")
    })
    $("#more").click(function(){
      $('.sub-menu-2').css({
        width:"200px",
        padding:"1rem"
      }, "slow")
    })
    $(".sub-menu-2").mouseleave(function(){
      $(this).css({
       width:"0",
       padding:"0"
      }, "slow")
    })
    //////////////////////////////////////////////////////////////////////////
    $("#quote").click(function () {
  
      let checkInDate = new Date($("#chk-in").val()).getTime();
      let checkOutDate = new Date($("#chk-out").val()).getTime();
      if (checkInDate && checkOutDate) {
        $.ajax({
          url: "./JSON/room.json",
          type: "GET",
          success: (result) => {
            result.map((date) => {
              let fromTimeStamp = new Date(date.from).getTime();
              let toTimeStamp = new Date(date.to).getTime();
              if (checkInDate >= fromTimeStamp && checkOutDate <= toTimeStamp) {
                // console.log(date.room);
                $("#mdl").css("display", "block");
                $("#tbody").append(`<tr>
                              <td>${date.from}</td>
                              <td>${date.to}</td>
                              <td>${date.room}</td>
                              <td>${date.bed}</td>
                            </tr>`);
                $("#tbody tr:last").css({ backgroundColor: "#6fb586" });
              } else {
                $("#tbody").append(`<tr>
                  <td>${date.from}</td>
                  <td>${date.to}</td>
                  <td>${date.room}</td>
                  <td>${date.bed}</td>
                </tr>`);
              }
            });
          },
        });
      }
    });
  
    $(".cancel").click(function () {
      $("#mdl").fadeOut();
      $("#tbody").empty();
    });
  
    ///////////////////////////////////////////////////////////////
  
    var sIndex = 1;
    show(sIndex); 
    function plus(n) {
      show(sIndex+=n);
    }
    function current(n) {
      show(sIndex= n);
    }
    function show(n) {
      var slides = $(".slides");
      var dotss = $(".dott");
      if (n > slides.length) {sIndex = 1}    
      if (n < 1) {sIndex = slides.length}
      $.each( slides,function(index, value){
        console.log(value);
        $(value).css({display:"none"})
      })
      $.each(dotss,function(index,value){
        let cls = $(value).removeClass('actv').addClass('')
        $(value).addClass($(cls).attr('class'))
      })
      $(slides[sIndex-1]).css({display:"flex"})
      $(dotss[sIndex-1]).addClass('actv')
      console.log(dotss[sIndex-1]);
  
    }
    window.onload= function () {
      setInterval(function(){ 
       plus(1);
      }, 3000);
    }

  /////////////////////////////////////////////////////////
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#back-to-top").addClass("showing");
    } else {
      $("#back-to-top").removeClass("showing");
    }
  });

  $("#back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "100");
  });
});