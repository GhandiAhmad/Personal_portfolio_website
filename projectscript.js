

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

/////////////////




function ageCalculation() {
        
    var input =  document.getElementById("DOB").value;
    var dob = new Date(input);
    var xx = dob.getTime();
    var dayy= dob.getDate()+1;
    var monthy= dob.getMonth()+1;
    if (dayy==32){dayy=1; monthy=monthy+1};
    if (dayy==31 && (monthy==4||monthy==6||monthy==9||monthy==11)){dayy=1; monthy=monthy+1};
    if ((dayy==29 || dayy==30 ||dayy==31) && (monthy==2)){dayy=1; monthy=monthy+1};
      document.getElementById("day").innerHTML =dayy;
      document.getElementById("month").innerHTML =monthy;
    var yeary= dob.getFullYear();
      document.getElementById("year").innerHTML = yeary ;
    var today=new Date()
    var dd=today.getTime();
    var  ConverterNum = 1000 * 60 * 60 * 24;
    var  Result = Math.round((dd - xx) / ConverterNum);
    return  document.getElementById("result").innerHTML ="Calculated Age in Days is: 🎉" + Result + "🎉days.";
    
}

///////
function ale(){
  if (document.SubmitForm.vorname.value == "" || 
      document.SubmitForm.anrede.value == ""||
      document.SubmitForm.nachname.value == ""||
      document.SubmitForm.email.value == "") 
          alert("You have to Complete Filling the Form!!");
 else 
          alert("Your request has been sent successfully")};