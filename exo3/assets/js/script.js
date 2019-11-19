$(function(){
let canvas = document.getElementById('canvas1');
let context = canvas.getContext('2d');
//tete
context.beginPath();
context.fillStyle = '#976F0F';
context.arc(200, 80, 60, 0, Math.PI*2);
context.fill();
context.closePath();
//contour du corps
context.beginPath();
context.fillStyle = '#976F0F';
context.moveTo(200,120);
context.lineTo(60,120);
context.quadraticCurveTo(40,140,60,160);
context.lineTo(140,160);
context.lineTo(140,340);
context.quadraticCurveTo(160,360,180,340);
context.lineTo(180,300);
context.quadraticCurveTo(200,280,220,300);
context.lineTo(220,340);
context.quadraticCurveTo(240,360,260,340);
context.lineTo(260,160);
context.lineTo(340,160);
context.quadraticCurveTo(360,140,340,120);
context.fill();
context.closePath();
//les yeux
context.beginPath();
context.fillStyle = 'white';
context.arc(180, 60, 10, 0, Math.PI*2);
context.arc(220, 60, 10, 0, Math.PI*2);
context.fill();
context.closePath();
//les boutons
context.beginPath();
context.fillStyle = '#7A2976';
context.arc(200, 180, 10, 0, Math.PI*2);
context.arc(200, 220, 10, 0, Math.PI*2);
context.fill();
context.closePath();
//Bouche
context.beginPath();
context.strokeStyle = 'red';
context.moveTo(170,90);
context.quadraticCurveTo(200,110,230,90);
context.quadraticCurveTo(200,120,170,90);
context.stroke();
context.closePath();
//sourcils
context.beginPath();
context.strokeStyle = 'white';
context.moveTo(170,45);
context.quadraticCurveTo(180,35,190,45);
context.moveTo(210,45);
context.quadraticCurveTo(220,35,230,45);
context.stroke();
context.closePath();
});
