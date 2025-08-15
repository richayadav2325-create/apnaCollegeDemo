let currSlide=0;
function changeSlide(direction){
    const slides=document.querySelectorAll('.slides img');
    slides[currSlide].style.display='none';
    currSlide=(currSlide+ direction +slides.length)%slides.length;
    slides[currSlide].style.display='block';
}
document.addEventListener('DOMContentLoaded',()=>{
    const slides=document.querySelectorAll('.slides img');
    slides.forEach((slide,index)=>{
      slide.style.display= index===0?'block':'none';
    });
});