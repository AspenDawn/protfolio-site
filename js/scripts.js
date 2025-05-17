console.log("hello world")

var text1 = "Hello";
var text2 = "Hello, spaces are also OK!";



/******************** menu toggle **************************/


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className ==='navtoggle'){
    x.className += ' responsive';
  } else{
    x.className = 'navtoggle';
  }
}


