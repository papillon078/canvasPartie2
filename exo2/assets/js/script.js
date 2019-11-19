$(function(){
let canvas = document.getElementById('canvas1');
let context = canvas.getContext('2d');
/*La courbe quadratique nécessite un point de contrôle en moins.
Elle tracera une courbe à partir du point courant
(défini par les précédents tracés, moveTo, lineTo, arc, etc...) jusqu'au point de destination (destx, desty) en étirant vers le point de contrôle (cpx, cpy).
quadraticCurveTo( cp1x, cp1y, destx, desty )*/
//cabine
context.beginPath();
context.fillStyle='white';
context.moveTo(160,200);
context.quadraticCurveTo(200,50,240,200);
context.fill();
context.closePath();
//capot supérieur
context.beginPath();
context.fillStyle='#E0E1F3';
context.moveTo(100,200);
context.quadraticCurveTo(200,120,300,200);
context.fill();
context.closePath();
//capot inférieur
context.beginPath();
context.fillStyle='#E0E1F3';
context.moveTo(100,200);
context.quadraticCurveTo(200,280,300,200);
context.fill();
context.closePath();

});
