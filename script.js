const cursor = document.getElementById("cursor");
const submit = document.querySelector('.submit');
const scrolling = document.querySelector('.scrolling');
const circleAbout = document.getElementById('circle-about')
const circleProjects = document.getElementById('circle-projects')
const circleContact = document.getElementById('circle-contact')


scrolling.addEventListener('mouseenter', () => {
    
    cursor.style.width='50px';
    cursor.style.height='50px'
})

scrolling.addEventListener('mouseleave', () => {
    
    cursor.style.width='5px';
    cursor.style.height='5px'
})

const fillAbout = () => {
    
    circleAbout.style.background='white';
    cursor.style.display='none'
}

const unfillAbout = () => {
    
    circleAbout.style.background='var(--second-color)';
    cursor.style.display='flex'
}

const fillProjects = () => {
    
    circleProjects.style.background='white';
    cursor.style.display='none'
}

const unfillProjects= () => {
    
    circleProjects.style.background='var(--second-color)';
    cursor.style.display='flex'
}

const fillContact = () => {
    
    circleContact.style.background='white';
    cursor.style.display='none'
}

const unfillContact = () => {
    
    circleContact.style.background='var(--second-color)';
    cursor.style.display='flex'
}




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
 