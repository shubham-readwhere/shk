$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          dots: false,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

$('.single-item').slick(
  {
      dots:true,
      slidesToScroll: 1,
      autoplay:false,
     autoplaySpeed: 1100,
     arrows:false,
     
    
  }
 );

 $('.not-item').slick(
  {
  dots:true, 
  centerMode: true,
  centerPadding: '25%',
  autoplay:false,
  slidesToShow: 1,
 responsive: [
  {
    breakpoint:768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      autoplay:true,
    autoplaySpeed:1000
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      autoplay:true,
     autoplaySpeed:1000
    }
  }
]

  }
 );

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




//window.onscroll = function() {myFunction()

//};
//var header = document.getElementById("myHeader");

// Get the offset position of the navbar
//var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
  //if (window.pageYOffset > sticky) {
   // header.classList.add("sticky");
 // } else {
   // header.classList.remove("sticky");
  //}
//}





