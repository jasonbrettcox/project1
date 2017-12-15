var modal = document.getElementsByClassName('modal');

var btn = document.getElementsByClassName( 'myBtn');

var span = document.getElementsByClassName('close');

// var modalNumber = ()
// btn.addEventListener("click", displayElement());

function displayElement(modalNumber) {
   
    modal[modalNumber].style.display = "block";    
}

   function hideElement(modalNumber){
   modal[modalNumber].style.display= "none";
   }


window.onclick = function(event){
if (event.target == modal[0]) {
    modal[0].style.display = "none";
}

}


