'use strict';

window.addEventListener('DOMContentLoaded', ()=>{

    const currentSlide = document.querySelector('.slider__items');

    document.querySelectorAll('.slider>.slider__arrow').forEach(arrow=>{
        arrow.addEventListener('click', (e)=>{
            const slides = Array.from(currentSlide.children);
            slides.forEach(item=>{
                if(e.target.classList.contains('left')){

                    let order = parseInt(getComputedStyle(item).order);
                    --order;
                    if(order < 1){
                        item.style.order = slides.length;
                    }else{
                        item.style.order = order;
                    }

                }else if(e.target.classList.contains('right')){
                    let order = parseInt(getComputedStyle(item).order);
                    ++order;
                    if(order > slides.length){
                        item.style.order = 1;
                    }else{
                        item.style.order = order;
                    }
                }
            });
        });
    });
});
