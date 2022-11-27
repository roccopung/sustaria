import './typography.css'
import './main.css'

var lastScrollTop; 
var navbar = document.getElementById('nav'); 

document.addEventListener("scroll", (event) => {
    console.log("page is fully loaded");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if(scrollTop > lastScrollTop){ 
      navbar.style.top='-80px';
    }
    else{
      navbar.style.top='20px';
    }
    lastScrollTop = scrollTop; 
  });
