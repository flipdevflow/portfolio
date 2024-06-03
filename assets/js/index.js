

let figures=document.querySelectorAll('figure')
let modal=document.querySelector('.myModal')
let boxModal=document.querySelector('.modal')
 Array.from(figures).map((elements)=>{  
    elements.addEventListener('click',(event)=>{
 
        toggleModal()
       
        
    }) 
})
 

toggleModal=(event)=>{


    if(event==undefined){
        modal.classList.toggle('show')  
        setTimeout(() => {
            boxModal.classList.toggle('show')
        }, "200");
    }else if(event.target==modal){
     
        modal.classList.toggle('show')  
        boxModal.classList.toggle('show')
        
    }
  
    
}