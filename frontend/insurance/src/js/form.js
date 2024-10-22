window.addEventListener('DOMContentLoaded', () => {

    const url           = 'http://localhost:3000/users';
    const inputs        = document.querySelectorAll('input');
    const form          = document.querySelector('.reg_form');
    const overlay       = document.querySelector('.overlay');
    const btnAuthLink   =  document.querySelector('.auth-link');

    const exit          = document.createElement('a');
    exit.style.color    = 'blue';
    exit.textContent    = 'exit';
    exit.classList.add('auth-link');

    btnAuthLink.addEventListener('click', ()=>{
        overlay.style = 'display: flex';
    });

    const request = async (url, options)=>{
        return await fetch(url, options);
    }

    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const dt = {
            name: inputs[1].value,
            lastname: inputs[2].value,
            email: inputs[3].value,
            password: inputs[4].value
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(dt)
        };

        try{
            request(url, options)
                .then(result=>{
                    if(result.ok){
                        alert("You have successfully registered");
                        overlay.style = 'display: none';
                        btnAuthLink.replaceWith(exit);
                        document.querySelector('.auth').append(exit);
                
                        exit.addEventListener('click', (e)=>{
                            e.preventDefault();
                            exit.replaceWith(btnAuthLink);
                        });
                    }else{
                        alert('SOMETHING WRONG!');
                    }
                })
        }catch{
            alert('SOMETHING WRONG!');
        }finally{
            inputs.forEach(item => {
                item.value = '';
            });
        }
    });
    document.querySelector('.close').addEventListener('click', ()=>{
        overlay.style = 'display: none';
    });
});