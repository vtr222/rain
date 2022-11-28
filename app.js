let canvas = document.querySelector('canvas');

let p = canvas.getContext('2d');

p.canvas.height = 600;
p.canvas.width = 1300;
document.querySelector('body').style.backgroundColor = '#010019';




let sp = 1;



function loadRaindrops() {
	
	
let raindrops = [];
	
	
for(let x=0; x<1600; x++) {
		
		
raindrops[x] = 
			

{
				
x: Math.floor(Math.random() * window.innerWidth + 1 ),
				
y: -(Math.floor(Math.random() * 800 + 1)),
				
size: Math.floor(Math.random() * 10 + 6),
		  	   
speed: Math.floor(Math.random() * 12 + 8)
		 	
}
	

}

return raindrops;
}



p.strokeStyle = '#534cf7';

p.lineWidth = 2;

let rd = loadRaindrops();


function rain() {


p.clearRect(0,0,window.innerWidth,window.innerHeight);	
	
	
for(let cont = 0; cont < rd.length;cont++){

rd[cont].y += rd[cont].speed  * sp;
	
p.beginPath();
		
p.moveTo(rd[cont].x, rd[cont].y),
		
p.lineTo(rd[cont].x, rd[cont].y + rd[cont].size);

p.stroke();


if (rd[cont].y > 680) {

rd[cont].x = Math.floor(Math.random() * window.innerWidth + 1);
rd[cont].y = -(Math.floor(Math.random() * 800 + 1));
rd[cont].size = Math.floor(Math.random() * 10 + 6);		  	   
rd[cont].speed = Math.floor(Math.random() * 12 + 8);


}
}


id = window.requestAnimationFrame(rain);
	
}

window.addEventListener('keydown', function(e) {e.preventDefault(); if (e.key === 'ArrowUp') {sp = 0.4;} if (e.key === 'ArrowDown'){sp = 3;} }  );
window.addEventListener('keyup', function() { sp = 1;}  );

let id = window.requestAnimationFrame(rain);