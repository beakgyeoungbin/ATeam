//header event 관련 스크립트 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const bannerCloseBtn = document.querySelector(".closeBtn");
const headerBanner = document.querySelector(".headerBanner");
const header = document.querySelector("header");

const headerBannerHeight = headerBanner.offsetHeight;

bannerCloseBtn.addEventListener('click', function() {
    headerBanner.classList.add("off");
});


window.addEventListener('scroll',function(){
    let windowScrollY = window.scrollY;
    
    if(windowScrollY>0){
        header.classList.add("scrollHeader");
    }else{
        header.classList.remove("scrollHeader");
    }
    
});

//slide event 관련 스크립트 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const slides = document.querySelector(".slides");
const slide = document.querySelector(".slide");
console.log(slides);

//slide setting


