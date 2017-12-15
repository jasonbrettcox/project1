var modal = document.getElementsByClassName('modal');

var btn = document.getElementsByClassName( 'myBtn');

var span = document.getElementsByClassName('close');

// btn.addEventListener("click", displayElement());

function displayElement() {
    console.log(modal);
    modal[0].style.display = "block";    
}

   function hideElement(){
   modal[0].style.display= "none";
   }


window.onclick = function(event){
if (event.target == modal[0]) {
    modal[0].style.display = "none";
}
console.log("go away");
}
