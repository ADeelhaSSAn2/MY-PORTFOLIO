var menu = document.querySelector("#menu-btn");
var header = document.querySelector(".header");

menu.onclick =() =>{
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

var themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}