const menuBtn = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeBtn = document.querySelector('.theme-button i');



//dark mode 
themeBtn.addEventListener('click',()=>{
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode? "enabled": "disabled");
    themeBtn.classList.toggle('fa-sun', isDarkMode);
    themeBtn.classList.toggle('fa-moon',!isDarkMode);
})

// initialize dark mode based on localStorage
if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add('dark-mode');
    themeBtn.classList.replace("fa-moon","fa-sun");
}else{
    themeBtn.classList.replace("fa-sun","fa-moon");
}


// Toggle sidebar visibility when menu buttons clicked
menuBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        document.body.classList.toggle("sidebar-hidden");
    });
});


// Toggle sidebar visibility when menu screen overlay clicked
// **** note 
screenOverlay.addEventListener('click',()=>{
    document.body.classList.toggle('sidebar-hidden');
})


//show sidebar on large screen by default
if(window.innerWidth >= 768){
    document.body.classList.remove('sidebar-hidden');
}