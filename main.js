var slides1 = 1;
Slideshow1(slides1);

function plusSlide1(n) {
  Slideshow1(slides1 += n);
}

function Slideshow1(n) {
  var i;
  var x = document.getElementsByClassName("slideshow1");
  if (n > x.length) {slides1 = 1}
  if (n < 1) {slides1 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slides1-1].style.display = "block";  
}


var slides2 = 1;
Slideshow2(slides2);

function plusSlide2(n) {
  Slideshow2(slides2 += n);
}

function Slideshow2(n) {
  var i;
  var x = document.getElementsByClassName("slideshow2");
  if (n > x.length) {slides2 = 1}
  if (n < 1) {slides2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slides2-1].style.display = "block";  
}

//Zoom effect for the first column
document.getElementById("zoom1").addEventListener("mouseover", mouseOver1);
document.getElementById("zoom1").addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.getElementById("zoom1").style.fontSize = "120%";
}

function mouseOut1() {
  document.getElementById("zoom1").style.fontSize = "100%";
}

//Zoom effect for the second column
document.getElementById("zoom2").addEventListener("mouseover", mouseOver2);
document.getElementById("zoom2").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("zoom2").style.fontSize = "120%";
}

function mouseOut2() {
  document.getElementById("zoom2").style.fontSize = "100%";
}

//Zoom effect for the third column
document.getElementById("zoom3").addEventListener("mouseover", mouseOver3);
document.getElementById("zoom3").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("zoom3").style.fontSize = "120%";
}

function mouseOut3() {
  document.getElementById("zoom3").style.fontSize = "100%";
}

