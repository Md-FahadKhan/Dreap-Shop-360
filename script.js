

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".navbar img");
    const cartButton = document.querySelector(".btn");
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const nav = document.querySelector(".navbar ul");
    const aboutLink = document.querySelector('.navbar ul li a[href="about.html"]');
    const aboutContent = document.getElementById("about-content");
  
    cartIcon.addEventListener("click", function () {
      alert("Cart icon clicked!");
    });
  
    cartButton.addEventListener("click", function () {
      alert("Shop Now button clicked!");
    });
  
    mobileMenuIcon.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      aboutContent.classList.toggle("hidden");
    });
  });

  














  
const daysEl =   document.getElementById('days');
const hourEl =document.getElementById('hours');
const minEl =document.getElementById('mins');
const secondEl = document.getElementById('sec');

const newYears = '12 october 2023';
function countdown(){
    const newYearDate = new Date(newYears)
    const currentDate = new Date();
    
    const totalseceonds = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalseceonds/3600 /24);
    const hours = Math.floor(totalseceonds/3600)%24;
    const minutes =Math.floor(totalseceonds/60)%60;
    const seconds = Math.floor(totalseceonds)%60;
  
    daysEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time <10 ?(`0${time}`) :time;
}
countdown();
setInterval(countdown,1000)


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
  
   

   
});


  