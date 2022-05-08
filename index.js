let buttons=document.getElementsByClassName("drum");
// therefore buttons containe all the elements which has the class drum as an array
let noOfBtns=buttons.length;
console.log(noOfBtns)
 for (let i = 0; i < noOfBtns; i++) {
    buttons[i].addEventListener("click",  function run(){
      var buttonsinnerHTML=this.innerHTML;
makeSound(buttonsinnerHTML);
btnisActive(buttonsinnerHTML);
       });
   
 }

 // taking input from the keyboard.
 document.addEventListener("keypress",function(event){
     makeSound(event.key);
     btnisActive(event.key);

 })

 function makeSound(key){
     switch (key) {
         case 'w':
             var tom1=new Audio("./sounds/tom-1.mp3");
             tom1.play();
             break;
             case "a":
                var tom2=new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;
            case "j":
                var snare=new Audio("./sounds/snare.mp3")
              snare.play();
                break;
            case "k":
                var crash=new Audio("./sounds/crash.mp3")
                crash.play();
                break;
            case "l":
                var kick=new Audio("./sounds/kick-bass.mp3")
                kick.play();
                break;
     
         default:
             break;
     }

 }


 function btnisActive(keyword){
     console.log(keyword);
   var btnPressed=  document.querySelector("."+ keyword);
   btnPressed.classList.add("btnIsActive");

   setTimeout(function(){
       btnPressed.classList.remove("btnIsActive"),.1000
   })
 }