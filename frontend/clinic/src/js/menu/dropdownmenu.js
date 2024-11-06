'use strict';


window.addEventListener('DOMContentLoaded', ()=>{
    const btnsDropDown = document.querySelectorAll('.dropdown');
    btnsDropDown.forEach(item=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();

            if(item.classList.contains('cliniks')){
                item.after(document.querySelector('.cliniks__location'));
                if(Boolean(item.dataset.active)){
                    document.querySelector('.cliniks__location').style = 'display: block';
                    item.children[1].src = './img/svg/up.svg';
                    item.dataset.active = '';
                }else{
                    document.querySelector('.cliniks__location').style = 'display: none';
                    item.children[1].src = './img/svg/down.svg';
                    item.dataset.active = '1';
                }

            }else{
                
                document.querySelectorAll('.links__list>.link').forEach(item=>{
                    if(parseInt(e.target.dataset.number) !== parseInt(item.dataset.number)){
                        item.lastElementChild.style = 'display: none;';
                        item.style = 'color: #000';
                    }else{
                        e.target.lastElementChild.style = 'display: flex';
                        item.style = 'color: #028ECE';
                    }
                });

                document.querySelectorAll('.dropdownContent').forEach(item=>{
                    console.log(item)
                    if(parseInt(e.target.dataset.number) === parseInt(item.dataset.number)){
                        item.style = 'display: flex;left:0;top:0';
                    }else{
                        item.style = 'display: none';
                    }
                });
            }
        })    
    });
});