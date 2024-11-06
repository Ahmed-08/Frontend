'use strict'


window.addEventListener('DOMContentLoaded', ()=>{

    const form = document.querySelector('.form');

    
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const dt = {
            name: form.querySelector('.top').firstElementChild.value,
            lastName: form.querySelector('.top').lastElementChild.value,
            service: form.querySelector('.service').value,
            date: form.querySelector('.date').value
        }

        const request = async (dt)=>{
            return await fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(dt)
            });
        }

        try{
            request(dt).then(res=>{
                if(res.ok){
                    alert('success')
                }else{
                    alert('SOMETHING WRONG!')
                }
            });
        }catch{
            alert('SOMETHING WRONG!');
        }

    });
});