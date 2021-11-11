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
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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