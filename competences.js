class Slider{
    isDown = false;
    startX;
    scrollLeft;

    constructor(slider){
        slider.addEventListener('mousedown', (e) => {
            this.isDown = true;
            slider.classList.add('active');
            this.startX = e.pageX - slider.offsetLeft;
            this.scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            this.isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            this.isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!this.isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - this.startX) * 1; //scroll-fast
            slider.scrollLeft = this.scrollLeft - walk;
        });
    }
}

var slider1=new Slider(document.getElementById("list-languages"));
var slider1=new Slider(document.getElementById("list-librairies"));
var slider1=new Slider(document.getElementById("list-logiciels"));