let date = new Date();
hours = date.getHours();
console.log(hours);
window.onscroll = function() {myFunction()};
setTimeout(() => {
    if (hours >= 0 && hours < 12) {
        console.log("Good morning");
        document.getElementById("hello").innerHTML = "GOOD MORNING...";
      } else if (hours >= 12 && hours < 18) {
        console.log("Good afternoon");
        document.getElementById("hello").innerHTML = "GOOD AFTERNOON...";
      } else {
        console.log("Good night");
        document.getElementById("hello").innerHTML = "GOOD NIGHT...";
      }
}, 300);
