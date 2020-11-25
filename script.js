const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 0 + "px";
    cursor.style.top = y + 0 + "px";
  });

  

        const menu = document.querySelector('.menu')
        const overlay = document.querySelector('.overlay')
        const close = document.querySelector('.menu-close')
        const body = document.querySelector('body')
    
        menu.addEventListener('click', () =>{

            console.log('click')
    
            if(overlay.style.display='none'){
                overlay.style.display='flex'
                body.style.overflowY='hidden'
    
            } 
            
        })
    
        close.addEventListener('click', () =>{
    
    if(overlay.style.display='flex'){
        overlay.style.display='none'
        body.style.overflowY='auto'
    
    } 
    
    })
