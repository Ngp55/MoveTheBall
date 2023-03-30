let ballsource = document.querySelector('.ball');

window.addEventListener('load', () =>{
    ballsource.style.position = 'absolute';
    ballsource.style.left = 0;
    ballsource.style.top = 0;
});

window.addEventListener('keypress', (event) => {
    var key_code = event.which || event.keyCode;;
 switch (key_code) {
    case 97:
        ballsource.style.left = parseInt(ballsource.style.left) -5 + 'px';
        console.log("1allor left");
        console.log("1allor left"+event.keyCode);
        break;
    case 119:
        ballsource.style.top = parseInt(ballsource.style.top) -5 + 'px';
        console.log("2allor top");
        console.log("1allor left"+event.keyCode);
        break;
    case 100:
        ballsource.style.left = parseInt(ballsource.style.left) +5 + 'px';
        console.log("3allor right");
        console.log("1allor left"+event.keyCode);
        break;
    case 120:
        ballsource.style.top = parseInt(ballsource.style.top) + 5 + 'px';
        console.log("4allor bottom");
        console.log("1allor left"+event.keyCode);
        break;
    default:
        alert("Only Arrow Keys Are Allowed!");
    }
});