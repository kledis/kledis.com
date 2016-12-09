var clideIndex = 1;


showSlides(clideIndex);

function plusSlides(n) {
  showSlides(clideIndex += n);
}



function currentSlide(n) {
  showSlides(clideIndex = n);
}

function showSlides(n) {
  var a;


  var clides = document.getElementsByClassName("myslides");
  var bots = document.getElementsByClassName("period");

 
 if (n > clides.length) {clideIndex = 1}    
  if (n < 1) {clideIndex = clides.length}
  

for (a = 0; a < clides.length; a++) {
      clides[a].style.display = "none";  
  }
  

for (a = 0; a < bots.length; a++) {
      bots[a].className = bots[a].className.replace(" active", "");
  }


  clides[clideIndex-1].style.display = "block";  
  bots[clideIndex-1].className += " active";
}