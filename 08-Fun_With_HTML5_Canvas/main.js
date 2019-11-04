const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "pink";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e){
     if(!isDrawing) return; //stop the function when not running

     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

     ctx.beginPath();

     //where the line starts
     ctx.moveTo(lastX, lastY);

     //where the line goes to
     ctx.lineTo(e.offsetX, e.offsetY);
     ctx.stroke();

     //destructuring an array
     [lastX, lastY] = [e.offsetX, e.offsetY];

     hue++;

     if(hue >= 360) hue = 0;

     if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
     
     (direction) ? ctx.lineWidth++ : ctx.lineWidth-- ;
}


canvas.addEventListener('mousedown', (e) => {
     isDrawing = true;
     [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
