$(function(){
let canvas = document.getElementById('canvas1');
let context = canvas.getContext('2d');
//cone
context.beginPath();
context.fillStyle='#AA6522';
context.moveTo(140,200);
context.lineTo(200,340);
context.lineTo(260,200);
context.fill();
context.closePath();
//glace
context.beginPath();
context.fillStyle='#8a0908';
context.moveTo(140,200);
context.quadraticCurveTo(200,60,260,200);
context.fill();
context.closePath();

});
