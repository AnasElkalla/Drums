const button = document.querySelectorAll(".drum");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

});
function makeSound(key){
  switch (key) {
    case "w":
      let crash = new Audio("crash.mp3");
      crash.play();
      break;
      case "a":
        let kick = new Audio("kick-bass.mp3");
        kick.play();
        break;
      case "s":
        let snare = new Audio("snare.mp3");
        snare.play();
        break;
      case "d":
        let tom1 = new Audio("tom-1.mp3");
        tom1.play();
        break;
      case "j":
        let tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;
      case "k":
        let tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;
      case "l":
        let tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;

    default:

  }
}
function buttonAnimation(current){
let active=document.querySelector("."+current);
active.classList.add("pressed");
setTimeout(function(){
  active.classList.remove("pressed")
},100)
}
