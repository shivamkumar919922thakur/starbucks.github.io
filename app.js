const firstUpperNav = document.getElementById("first-upper-nav");
const secondUpperNav = document.getElementById("second-upper-nav");
const thirdUpperNav = document.getElementById("third-upper-nav");
const sliderUpperNav = document.getElementById("slider-upper-nav");
const bannerButton = document.querySelector(".banner-sticky-button");
const buttonHover = document.querySelector(".first-menu-nav");
const hoverContent = document.querySelector(".content-nav-menu");
const designNav = document.querySelector(".design-nav");
const moving_slider = document.querySelector(".moving-slider-rating");
const firstRtaing = document.querySelector("#first-heading-rating");
const secondRating = document.querySelector("#second-heading-rating");
const thirdRating = document.querySelector("#third-heading-rating");
const fourthRating = document.querySelector("#fourth-heading-rating");
const fifthRating = document.querySelector("#fifth-heading-rating");
const firstImage = document.querySelector(".first-image");
const secondImage = document.querySelector(".second-image");
const thirdImage = document.querySelector(".third-image");
const fourthImage = document.querySelector(".fourth-image");
const fifthImage = document.querySelector(".fifth-image");



// a whole bunch of eventlisterns

firstUpperNav.addEventListener("click", function(){
  sliderUpperNav.style = "left:6.9rem;width:4rem;";
})

secondUpperNav.addEventListener("click", function(){
  sliderUpperNav.style = "left:10.55rem;width:6rem;";
});

thirdUpperNav.addEventListener("click", function(){
  sliderUpperNav.style = "left:15.95rem;width:7rem;";
});

bannerButton.addEventListener("click", function(){
  bannerButton.style.animation = "scaling 0.5s linear 1"
});

buttonHover.addEventListener("click",function(){
  hoverContent.style.right = "0"
});

designNav.addEventListener("click",function (){
  hoverContent.style.right = "-50rem"
});


firstRtaing.addEventListener("click",function(){
  moving_slider.style.left = "0";  
  firstImage.style = "z-index:8"
  secondImage.style = "z-index:7"
  thirdImage.style = "z-index:7"
  fourthImage.style = "z-index:7"
  fifthImage.style = "z-index:7"
})

secondRating.addEventListener("click",function(){
  moving_slider.style.left = "18%";
  firstImage.style = "z-index:7;"
  secondImage.style = "z-index:8"
  thirdImage.style = "z-index:7"
  fourthImage.style = "z-index:7"
  fifthImage.style = "z-index:7"
})

thirdRating.addEventListener("click",function(){
  moving_slider.style.left = "37%"
  firstImage.style = "z-index:7"
  secondImage.style = "z-index:7"
  thirdImage.style = "z-index:8"
  fourthImage.style = "z-index:7"
  fifthImage.style = "z-index:7"
})

fourthRating.addEventListener("click",function(){
  moving_slider.style.left = "57%"
  firstImage.style = "z-index:7"
  secondImage.style = "z-index:7"
  thirdImage.style = "z-index:7"
  fourthImage.style = "z-index:8"
  fifthImage.style = "z-index:7"
})

fifthRating.addEventListener("click",function(){
  moving_slider.style.left = "77%"
  firstImage.style = "z-index:7"
  secondImage.style = "z-index:7"
  thirdImage.style = "z-index:7"
  fourthImage.style = "z-index:7"
  fifthImage.style = "z-index:8"
})