let date = new Date();
hours = date.getHours();
console.log(hours);
window.onscroll = function () {
  myFunction();
};
setTimeout(() => {
  if (hours >= 0 && hours < 12) {
    console.log("Good morning");
    document.getElementById("hello").innerHTML = "GOOD MORNING...";
  } else if (hours >= 12 && hours < 18) {
    console.log("Good afternoon");
    document.getElementById("hello").innerHTML = "GOOD AFTERNOON...";
  } else if (hours >= 18 && hours < 22) {
    console.log("Good evening");
    document.getElementById("hello").innerHTML = "GOOD EVENING...";
  } else {
    console.log("Good night");
    document.getElementById("hello").innerHTML = "GOOD NIGHT...";
  }
}, 1000);

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("logo").style.width = "75px"
    document.getElementById("main_nav").style.height = "60px";
    document.getElementById("main_nav").style.top = "0px";
    document.getElementById("nav").style.top = "30px";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("up").style.display = "inline";
  } else {
    document.getElementById("logo").style.width = "125px";
    document.getElementById("main_nav").style.height = "100px";
    document.getElementById("main_nav").style.top = "45px";
    document.getElementById("nav").style.top = "5%";
    document.getElementById("nav2").style.display = "inline";
    document.getElementById("up").style.display = "block";
  }
}
function onclickmenu_11(){
  document.getElementById("main-popup-11").style.opacity = "10";
  document.getElementById("main-popup-11").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_11(){
  document.getElementById("main-popup-11").style.opacity = "-1";
  document.getElementById("main-popup-11").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_10(){
  document.getElementById("main-popup-10").style.opacity = "10";
  document.getElementById("main-popup-10").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_10(){
  document.getElementById("main-popup-10").style.opacity = "-1";
  document.getElementById("main-popup-10").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_9(){
  document.getElementById("main-popup-9").style.opacity = "10";
  document.getElementById("main-popup-9").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_9(){
  document.getElementById("main-popup-9").style.opacity = "-1";
  document.getElementById("main-popup-9").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_8(){
  document.getElementById("main-popup-8").style.opacity = "10";
  document.getElementById("main-popup-8").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_8(){
  document.getElementById("main-popup-8").style.opacity = "-1";
  document.getElementById("main-popup-8").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_7(){
  document.getElementById("main-popup-7").style.opacity = "10";
  document.getElementById("main-popup-7").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_7(){
  document.getElementById("main-popup-7").style.opacity = "-1";
  document.getElementById("main-popup-7").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_6(){
  document.getElementById("main-popup-6").style.opacity = "10";
  document.getElementById("main-popup-6").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_6(){
  document.getElementById("main-popup-6").style.opacity = "-1";
  document.getElementById("main-popup-6").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_5(){
  document.getElementById("main-popup-5").style.opacity = "10";
  document.getElementById("main-popup-5").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_5(){
  document.getElementById("main-popup-5").style.opacity = "-1";
  document.getElementById("main-popup-5").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_4(){
  document.getElementById("main-popup-4").style.opacity = "10";
  document.getElementById("main-popup-4").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}
function outclickmenu_4(){
  document.getElementById("main-popup-4").style.opacity = "-1";
  document.getElementById("main-popup-4").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_3(){
  document.getElementById("main-popup-3").style.opacity = "10";
  document.getElementById("main-popup-3").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_3(){
  document.getElementById("main-popup-3").style.opacity = "-1";
  document.getElementById("main-popup-3").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_2(){
  document.getElementById("main-popup-2").style.opacity = "10";
  document.getElementById("main-popup-2").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_2(){
  document.getElementById("main-popup-2").style.opacity = "-1";
  document.getElementById("main-popup-2").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_1(){
  document.getElementById("main-popup-1").style.opacity = "10";
  document.getElementById("main-popup-1").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_1(){
  document.getElementById("main-popup-1").style.opacity = "-1";
  document.getElementById("main-popup-1").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}