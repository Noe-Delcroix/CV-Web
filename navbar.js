const toggleButton = document.getElementById("toggle-button");
const navList= document.getElementById("toggleable-list");

toggleButton.addEventListener('click', () =>{

    if (navList.style.opacity==0){
        navList.style.opacity=1;
    }else{
        navList.style.opacity=0;
    }
});


window.onscroll = function() {
    navList.style.opacity=0;
}