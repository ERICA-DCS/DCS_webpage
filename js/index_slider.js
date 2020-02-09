let show = "show";
let ani = "slide_ani_1"
let firstslide = document.querySelector(".visual_item:first-child");
let sliders = document.querySelectorAll(".visual_item");
let bullets = document.querySelectorAll(".bullet ul li");

function getIdx(){
    let result;
    sliders.forEach(function(value,index){
        // console.log(value.classList.length)
        if(value.classList.contains(show)) result = index;
    })
    return result;
}

function setBullets(){
    let cur = getIdx()
    bullets.forEach(function(val,idx){
        val.innerHTML = "○";
        if(idx == cur){
            val.innerHTML = "●";
        }
    });
}

function slide(next){
    let currentSlide = document.querySelector(`.${show}`);
    let nextSlide;
    if(next+1){
        if(next == getIdx())    return;
        nextSlide = sliders[next];
    }else{
        nextSlide = currentSlide.nextElementSibling;
    }
    
    if(currentSlide){
        currentSlide.classList.remove(show);
        currentSlide.classList.add(ani);
        currentSlide.addEventListener("animationend",()=>{currentSlide.classList.remove(ani)},false)

        if(!nextSlide){
            nextSlide = firstslide;
        }
        nextSlide.classList.add(show);
        setBullets();
    }else{
        firstslide.classList.add(show);
    }
}

document.addEventListener('DOMContentLoaded',() => {
    // console.log(bullets)
    bullets.forEach(function (curValue, curIndex, listObj){
        curValue.addEventListener("click",()=>{slide(curIndex)},false);
        // console.log(curValue + " " + curIndex + " ",listObj);
    })
    // let interval = setInterval(slide, 4500)
});