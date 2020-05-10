'use strict'
{

   function draw(){
			
     const canvas =document.querySelector('canvas');
     if(typeof canvas.getContext ==='undefined'){
		   return;
	    }

		const ctx = canvas.getContext('2d');
		 
		ctx.shadowOffsetX=8;
		ctx.shadowOffsetY=8;
		ctx.shadowBlur=8;
		ctx.shadowColor='rgba(0,0,0,0.3)';

		ctx.font='bold 48px Verdana';
		ctx.fillStyle='#D81B60';
	  ctx.fillText('We love umbreon!!! And you?',200,200);
		
  }

   draw();
}