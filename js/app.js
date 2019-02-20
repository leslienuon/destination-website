$(document).foundation();

$('.button').on('click',function(){

	// check for username
	if( $('input[type=text]').val() ){
		// display the name that was input
		$('.username').text($('input[type=text]').val());
	} else {
		// display a default name
		$('.username').text('Captain Anonymous');
	}

	// check for email
	if( $('input[type=email]').val() ){
		// display the email address that was input
		$('.useremail').text('send email to ' + $('input[type=email]').val());
	} else {
		// display default message
		$('.useremail').text('not send you email until you give us a working email address');
	}
	
});
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

