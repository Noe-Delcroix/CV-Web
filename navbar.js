const toggleButton = document.getElementById("toggle-button");
const navList= document.getElementById("toggleable-list");

toggleButton.addEventListener('click', () =>{
    if (navList.style.top=="35px"){
        navList.style.top="-300px";
    }else{
        navList.style.top="35px";
    }
    
});


window.onscroll = function() {
    navList.style.top="-300px";
}