var reLength = document.querySelectorAll(".drum");

var reqLength = reLength.length;

for(var i=0;i<reqLength;i++){
  reLength[i].addEventListener("click", function (){
    var buttoninnerhtml = this.innerHTML;
    makeSound(buttoninnerhtml);
    hovering(buttoninnerhtml);
  });
}
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  hovering(event.key);
});
function makeSound(key){
  switch(key){
  case 'w': var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
  case 'a': var audio = new Audio('sounds/tom-2.mp3');
                      audio.play();
                      break;
  case 's': var audio = new Audio('sounds/tom-3.mp3');
                                audio.play();
                                break;
  case 'd': var audio = new Audio('sounds/tom-4.mp3');
                        audio.play();
                        break;
  case 'j': var audio = new Audio('sounds/snare.mp3');
                          audio.play();
                          break;
  case 'k': var audio = new Audio('sounds/crash.mp3');
                        audio.play();
                        break;
  case 'l': var audio = new Audio('sounds/kick-bass.mp3');
                        audio.play();
                        break;
}
}
function hovering(currentpos){
  var activeButton = document.querySelector("."+currentpos);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
var selector = document.querySelector("input");
selector.addEventListener("click",function(){
  selector.setAttribute("value","");
});
var cnt=0;
 selector.addEventListener("keydown",function(event){
   cnt+=1;
   var key = event.key;
      if (!isNaN(key))
    {
      alert("you entered number.");
    }
    else if(key===key.toUpperCase()){
   alert("You entered uppser case.");
   }
   if(key=="Enter"){
     var input = selector.value;
     alert(input);
   }
 });
