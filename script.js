const cursor = document.getElementById("cursor");
const submit = document.querySelector('.submit');






/* submit button */


submit.addEventListener('click', () => {

    console.log('submit')
} )


/* cursor pointer */

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

/* overlay */
    
        close.addEventListener('click', () =>{
    
    if(overlay.style.display='flex'){
        overlay.style.display='none'
        body.style.overflowY='auto'
    
    } 
    
    });


    

/* const welcome = document.querySelector('.welcome');
const gallery = document.querySelector('.gallery')

    welcome.onscroll = (e) => {

        console.log(welcome.scrollTop)
        console.log()

        gallery.scroll

        
        var top  = welcome.pageYOffset + welcome.innerHeight,
  
      
            black = welcome.scrollTop > 3222  
      

      
            if(black) {
                document.documentElement.style.setProperty('--second-color', '#F6F6E9')
              
                
            } ;
        }; */

const menuLink = document.querySelector('.menu-link')
    

const closeMenu = () => {

    if(overlay.style.display='flex'){
        overlay.style.display='none'
        body.style.overflowY='auto'
    
    } 

}
 