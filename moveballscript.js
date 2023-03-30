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
        break;
    case 119:
        ballsource.style.top = parseInt(ballsource.style.top) -5 + 'px';
        break;
    case 100:
        ballsource.style.left = parseInt(ballsource.style.left) +5 + 'px';
        break;
    case 120:
        ballsource.style.top = parseInt(ballsource.style.top) + 5 + 'px';
        break;
    default:
        alert("Only A,D,W,X allowed!");
    }
});
