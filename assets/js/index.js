

let figures=document.querySelectorAll('figure')
let modal=document.querySelector('.modal')
 Array.from(figures).map((elements)=>{  
    elements.addEventListener('click',()=>{

        modal.style.cssText="display:block"
    }) 
})
 

toggleModal=()=>{
    modal.style.cssText="display:none"

}