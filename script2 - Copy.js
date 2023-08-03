'strict mode'





const navBar = document.querySelector('.nav-bars');
const closeBtn = document.querySelector('.fa-times');
const menuBars = document.querySelector('.fa-bars');
const linkAdd = document.querySelector('.link-1')

// const swiper = new swiper("#swiper-1", {
//     effect:"fade",
// });  
 





//sniper markup in my js file



menuBars.addEventListener('click', function(){
    navBar.classList.add('active2')

    console.log('clicked')

})

closeBtn.addEventListener('click', function(){
    navBar.classList.remove('active2')

})
linkAdd.addEventListener('click',function(){
    linkAdd.location.replace("https:www.Amazon.com")
    console.log('jhcnd m')

})
