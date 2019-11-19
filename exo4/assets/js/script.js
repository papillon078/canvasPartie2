$(function(){
let canvas = document.getElementById('logoCanvas');
let context = canvas.getContext('2d');
//nom de l'ecole
context.fillStyle = '#CECECE';
context.font = '45px serif';
context.fillText('Ecole du Numérique', 450, 400);
context.fillText('du Noyonnais', 450, 450);
//E
context.strokeStyle = 'black';
context.lineWidth = 6;
context.moveTo(200,100);
context.lineTo(100,100);
context.lineTo(100,360);
context.lineTo(200,360);
context.moveTo(200,240);
context.lineTo(100,240);
//N
context.moveTo(450,360);
context.lineTo(450,100);
context.lineTo(680,360);
context.lineTo(680,100);
context.stroke();
//2 rouge
context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 12;
context.moveTo(200,100);
context.quadraticCurveTo(750,-200,150,480);
context.lineTo(350,450);
context.stroke();
//hexagone
context.beginPath();
context.fillStyle = '#909090';
context.moveTo(800,240);
context.lineTo(780,260);
context.lineTo(780,280);
context.lineTo(800,300);
context.lineTo(820,280);
context.lineTo(820,260);
context.closePath();
context.fill();
//un autre hexagone
context.beginPath();
context.fillStyle = '#CECECE';
context.moveTo(850,240);
context.lineTo(830,260);
context.lineTo(830,280);
context.lineTo(850,300);
context.lineTo(870,280);
context.lineTo(870,260);
context.closePath();
context.fill();
//encore un hexagone
context.beginPath();
context.fillStyle = 'red';
context.moveTo(825,200);
context.lineTo(805,220);
context.lineTo(805,240);
context.lineTo(825,260);
context.lineTo(845,240);
context.lineTo(845,220);
context.closePath();
context.fill();
//toujours un hexagone
context.beginPath();
context.fillStyle = '#CECECE';
context.moveTo(800,160);
context.lineTo(780,180);
context.lineTo(780,200);
context.lineTo(800,220);
context.lineTo(820,200);
context.lineTo(820,180);
context.closePath();
context.fill();
//on kiffe les hexagones
context.beginPath();
context.fillStyle = '#595656';
context.moveTo(850,160);
context.lineTo(830,180);
context.lineTo(830,200);
context.lineTo(850,220);
context.lineTo(870,200);
context.lineTo(870,180);
context.closePath();
context.fill();
//devine .... un hexagone
context.beginPath();
context.fillStyle = '#CECECE';
context.moveTo(825,120);
context.lineTo(805,140);
context.lineTo(805,160);
context.lineTo(825,180);
context.lineTo(845,160);
context.lineTo(845,140);
context.closePath();
context.fill();
//tache claire
context.beginPath();
context.fillStyle = '#CECECE';
context.moveTo(880,180);
context.lineTo(875,185);
context.lineTo(875,190);
context.lineTo(880,195);//
context.lineTo(885,190);
context.lineTo(885,185);
context.closePath();
context.fill();
//tache foncée
context.beginPath();
context.fillStyle = '#909090';
context.moveTo(890,190);
context.lineTo(885,195);
context.lineTo(885,200);
context.lineTo(890,205);//
context.lineTo(895,200);
context.lineTo(895,195);
context.closePath();
context.fill();
//tache rouge
context.beginPath();
context.fillStyle = 'red';
context.moveTo(900,180);
context.lineTo(895,185);
context.lineTo(895,190);
context.lineTo(900,195);//
context.lineTo(905,190);
context.lineTo(905,185);
context.closePath();
context.fill();
});
