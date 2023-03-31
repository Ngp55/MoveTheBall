let ballsource = document.querySelector('.ball');
// var container = document.getElementById('#container');

window.addEventListener('load', () =>{
    ballsource.style.position = 'absolute';
    ballsource.style.left = 0;
    ballsource.style.top = 0;
});

window.addEventListener('keypress', (event) => {
    var key_code = event.keyCode;;
 switch (key_code) {
    case 97:
       {
        
        myLeft();

        break;
       }
    case 119:
       {
      
      myTop();
     
        break;
       }
    case 100:
        {
        myRight();
        break;    
        }
        
    case 115:
       {
        
        myBottom();
        break;
       }
    default:
        window.alert("Only a d w s allowed");
    }
});
let x=0;
let y=0;
let speed = 10;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function myLeft(){
    if(x > 0){
        x = x - speed;
        ballsource.style.left= x + 'px';
    }

}

function myTop(){
       if(y > 0 ){
        y -= speed;
        ballsource.style.top = y + 'px';
    }


}


function myRight(){
  
    if(x + 100 < windowWidth){
        x += speed;
        console.log(x);
        ballsource.style.left= x + 'px';
    }


}

function myBottom(){
  
    if(y + 100 < windowHeight){
        y += speed;
        console.log(y);
        ballsource.style.top = y + 'px';
    }

}


