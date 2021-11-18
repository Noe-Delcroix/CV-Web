const toggleButton = document.getElementById("toggle-button");
const navList= document.getElementById("toggleable-list");

toggleButton.addEventListener('click', () =>{
    if (navList.style.top=="50px"){
        navList.style.top="-500px";
    }else{
        navList.style.top="50px";
    }
    
});


window.onscroll = function() {
    navList.style.top="-500px";
}