window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.reg_form');
    const overlay = document.querySelector('.overlay');
    const btn_auth =  document.querySelector('.auth-link');

    btn_auth.addEventListener('click', ()=>{
        overlay.style = 'display: flex';
    });

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        const inputs = document.querySelectorAll('input');
        const dt = {
            name: inputs[1].value,
            lastname: inputs[2].value,
            email: inputs[3].value,
            password: inputs[4].value
        }

        const sendData = async ()=>{

            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(dt)
            });

            if(response.ok){
                alert("You have successfully registered");
                overlay.style = 'display: none';

                const exit = document.createElement('a');
                exit.classList.add('auth-link');
                exit.style.color = 'blue';
                exit.textContent = 'exit';
                btn_auth.replaceWith(exit);
                
                document.querySelector('.auth').append(exit);
        
                exit.addEventListener('click', (e)=>{
                    e.preventDefault();
                    exit.replaceWith(btn_auth);
                });
            }
        }
        sendData();
        inputs.forEach(item => {
            console.log(item.value)
            item.value = '';
        });
    });

    document.querySelector('.close').addEventListener('click', ()=>{
        overlay.style = 'display: none';
    });


});