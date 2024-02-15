$(document).ready(function(){
  //
  $(".open-topbar").click(function(){
    $('.topbar').addClass("open");
  })
  $(".close-topbar").click(function(){
    $('.topbar').removeClass("open");
  })
})

//custom select
       
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select-style");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected label");
  
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      this.classList.remove("label");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


$('.testimonial-carousel .owl-carousel').owlCarousel({
    // loop: true,
    // autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:15,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: false,
    dots: true,
//   dotsData: true,
    center:true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//



$('.case-study-carousel .owl-carousel').owlCarousel({
  // loop: true,
  // autoplay: false,
  autoplayTimeout: 6000,
  autoplaySpeed: 1500,
  smartSpeed: 1500,
  margin:15,
  lazyLoad: true,
  items: 1,
  responsiveClass: true,
  nav: true,
  dots: false,
//   dotsData: true,
  center:true,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

//
$('.dowlable-carousel .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1200:{
        items:6
      }
  }
})
//

$('.service-carousel .owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  margin:10,
  nav:false,
  dots:false,
  center:true,
  autoplayHoverPause:true,
  autoWidth:true,
  autoPlayTimeout:100,
  autoplaySpeed:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1200:{
        items:3
      }
  }
})

// $('.service-carousel .owl-carousel .owl-stage-outer').addClass('mmm', function(){
//   setTimeout(function(){$('.service-carousel .owl-carousel .owl-stage-outer').removeClass('mmm')}, 2300);
// });

//




var logos = function(){
    $('.logos-carousel .owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      margin:10,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:4
          },
          600:{
              items:6
          },
          1000:{
              items:9
          }
      }
    })
  }


    if($(window).width() <= 1024){
      logos()
    }
    $(window).resize(function(){
      if($(window).width() <= 1024){
        logos();
      }
    });



//

$('.hwv-carousel .owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})



//

$('.pro-carousel .owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  margin:30,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
//


$('.related-pro .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1200:{
        items:4
    }
  }
})
//

$('.ba-carousel .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
//



// console.log($('#milestones').length)

if($('#milestones').length > 0){
  $(function () {
    $("#milestones").bootstrapNews({
        newsPerPage: 4,
        autoplay: false,
        
        onToDo: function () {
        }
    });
    
  });
}



var dots = document.querySelectorAll(".testimonial-carousel .owl-dots .owl-dot");
let num=1;
dots.forEach((elem)=>{
    elem.innerHTML = ("0"+ num).slice(-2);
    num++;
    
})

if($(window).width() < 991){
  $('.map').appendTo(".contact-form-wrap")
}

$('.pro-carousel .item').click(function(){
  $('.fancybox-inner .fancybox-navigation').remove();
})


if($('#counter').length>0){
  var oTop = $(".counter-box").offset().top - window.innerHeight;
}

var a = 0;

$(window).scroll(function () {

  var sticky = $('header'),
          scroll = $(window).scrollTop();

      if (scroll >= 250) {
          sticky.addClass('sticky-nav');
          $('body').addClass('fixed-content');
      } else {
          sticky.removeClass('sticky-nav');
          $('body').removeClass('fixed-content');
      }
//

if (a == 0 && $(window).scrollTop() > oTop) {

   $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-number");
        $({
            countNum: $this.text()
        }).animate(
            {
                countNum: countTo
            },

            {
                duration: 850,
                easing: "swing",
                step: function () {
                    $this.text(
                        Math.ceil(this.countNum).toLocaleString("en")
                    );
                },
                complete: function () {
                    $this.text(
                        Math.ceil(this.countNum).toLocaleString("en")
                    );

                    $this.addClass('zoom-text')
                }
            }
        );
    });
    
    a = 1;
}

 
});




AOS.init({
    once: true,
});











