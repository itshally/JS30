const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "pink";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
     // e.preventDefault();
     if(!isDrawing) return; //stop the function when not running
     console.log(e)

     ctx.beginPath();

     //where the line starts
     ctx.moveTo(lastX, lastY);

     //where the line goes to
     ctx.lineTo(e.offsetX, e.offsetY);
     ctx.stroke();

     //destructuring an array
     [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
     isDrawing = true;
     [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
