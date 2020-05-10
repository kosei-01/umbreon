'use strict'
{
	
   function Top(){
		
		const top=document.getElementById('top');
		top.classList.add('umbreon1');
     		
		top.addEventListener('click',()=>{
			  

		  if(top.classList.contains('umbreon1')){
				top.classList.remove('umbreon1');
				top.classList.add('umbreon2');
			}
			else if(top.classList.contains('umbreon2')){
				top.classList.remove('umbreon2');
				top.classList.add('umbreon3');
			}
			else{
				top.classList.remove('umbreon3');
				top.classList.add('umbreon1');
			}

	});
	 
}

  function header(){
    
		const header=document.getElementById('header');	

		top.addEventListener('click',()=>{
		
	    header.classList.toggle('hide');
		});
	}

  function introduction(){
		 
		const q1 =document.getElementById('q1')
		const a1 =document.getElementById('a1')
		const q2 =document.getElementById('q2')
		const a2 =document.getElementById('a2')
		const q3 =document.getElementById('q3')
		const a3 =document.getElementById('a3')
		const q4 =document.getElementById('q4')
		const reason =document.getElementById('reason')

		q1.addEventListener('click',()=>{
			a1.classList.remove('none');
		})

		q2.addEventListener('click',()=>{
			a2.classList.remove('none');
		})

		q3.addEventListener('click',()=>{
			a3.classList.remove('none');
		})

		q4.addEventListener('click',()=>{
			reason.classList.remove('none');
		})

	}

	function unfinished(){
		 const unfinished =document.getElementById('unfinished');
		 
		 unfinished.addEventListener('click',()=>{
			 alert('Sorry. This content is underconstructing.');

		 })

	}

	function unfinished2(){
		const unfinished2 =document.getElementById('unfinished2');
		
		unfinished2.addEventListener('click',()=>{
			alert('Sorry. This content is underconstructing.');

		})

 }



Top();
header();
introduction();
unfinished();
unfinished2()

 
	//property
  
	const menuItems =document.querySelectorAll('#menu li a');
	const details =document.querySelectorAll('.details');
  const close=document.getElementById('close');
	const modal=document.getElementById('modal');
  const mask=document.getElementById('mask');
  
	// menu

  menuItems.forEach(clickedItem=>{

    clickedItem.addEventListener('click',e=>{
			e.preventDefault();
			
			menuItems.forEach(item =>{
				item.classList.remove('active');
			})

			clickedItem.classList.add('active');
			
      details.forEach(detail =>{
				
				detail.classList.remove('active');
			});

			document.getElementById(clickedItem.dataset.id).classList.add('active');
		});

	});
	
	//window

 mask.classList.remove('hidden'); 
 modal.classList.remove('hidden'); 
	
 close.addEventListener('click',()=>{
  mask.classList.add('hidden'); 
  modal.classList.add('hidden'); 

 });

 mask.addEventListener('click',()=>{
	 close.click();
 })


}