
let  card = document.querySelector(".value_card");
let  member = document.querySelectorAll(".member");
let wrap = document.querySelector("#wrap")
document.addEventListener('scroll', handleScroll);

 function handleScroll(event){   
   let height = window.innerHeight;
   console.log(height)
    if(window.pageYOffset > 400 && window.pageYOffset < height+300){        
       card.classList.add("active")}
       else{card.classList.remove("active")}
    if(window.pageYOffset > (height+500)){
      for(let i=0; i<member.length; i++){
      member[i].classList.add("active")}
   }else if(window.pageYOffset < height){
      for(let i=0; i<member.length; i++){
         member[i].classList.remove("active")}
   }
}


let  gnb = document.querySelector(".gnb") 
let naviList = document.querySelectorAll(".gnb li")

gnb.addEventListener("click", naviClick)

function naviClick(event){
    let naviPage = event.target.getAttribute("data-type");
    offset = innerHeight*naviPage;
 
   $("html, body").stop().animate({scrollTop:offset},500,"easeInOutExpo");
   
   }

// let show = document.querySelector("#show");
// let popup = document.querySelector("#popup")
// popup.addEventListener("click", handleClick)

// function handleClick(){
//    popup.classList.add(".show")
// }

