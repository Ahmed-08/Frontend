'use strict'

const doctors = [
    {
        fullname: 'Ламбина Татьяна Александровна',
        post: 'Врач-офтальмолог',
        experience: '3 лет',
        about: `Врач-офтальмолог высшей категории, кандидат медицинских наук, главный врач,
                основатель центра зрения «Доктор Линз» (Новосибирск) 
                и «Центра зрения доктора Нагорского» (Кемерово)`,
        photo: './img/doctor.png'

    },
    {
        fullname: 'Ламбина Юлия Александровна',
        post: 'Главный врач, офтальмолог',
        experience: '5 лет',
        about: `Врач-офтальмолог высшей категории, кандидат медицинских наук, главный врач,
                основатель центра зрения «Доктор Линз» (Новосибирск) 
                и «Центра зрения доктора Нагорского» (Кемерово)`,
        photo: './img/doctor.png'
    },
    {
        fullname: 'Ламбина Светлана Александровна',
        post: 'Врач-офтальмолог',
        experience: '4 лет',
        about: `Врач-офтальмолог высшей категории, кандидат медицинских наук, главный врач,
                основатель центра зрения «Доктор Линз» (Новосибирск) 
                и «Центра зрения доктора Нагорского» (Кемерово)`,
        photo: './img/doctor.png'
    },
]

window.addEventListener('DOMContentLoaded', ()=>{

    const ul = document.createElement('ul');
    let innerUl = '';
    let index = 1;
    doctors.forEach(item=>{
        innerUl += `<li data-number=${index++}>
                <div class="photo">
                    <img src=${item.photo} alt="doctor">
                </div>
                <div class="fullname">
                    <p>${item.fullname}</p>
                    <p>${item.post}</p>
                </div>
            </li>`
    });
    index = 0;
    ul.innerHTML = innerUl;
    document.querySelector('.doctors__list>.list>.arrow_up').after(ul);
    ul.firstChild.classList.add('active');

    index = parseInt(ul.querySelector('.active').dataset.number)-1;

    const doctorElement = document.querySelector('.doctors>.container>.doctors__list>.about__doctor').children;
    doctorElement[0].firstElementChild.src = doctors[index].photo;
    doctorElement[1].children[0].firstElementChild.textContent = doctors[index].fullname;
    doctorElement[1].children[0].lastElementChild.textContent = doctors[index].post;
    doctorElement[1].children[2].lastElementChild.textContent = doctors[index].about;

    document.querySelectorAll('.doctors>.container>.doctors__list>.list>.arrow').forEach(arrow=>{

        arrow.addEventListener('click', (e)=>{
            index = parseInt(ul.querySelector('.active').dataset.number) - 1;
            ul.children[index].classList.remove('active');
            if(e.target.classList.contains('arrow_up')){
                index = index - 1 < 0 ? ul.children.length - 1 : index-1;
            }else if(e.target.classList.contains('arrow_down')){
                index = index + 1 > ul.children.length - 1 ? 0 : index+1;
            }
            ul.children[index].classList.add('active');

            doctorElement[0].firstElementChild.src = doctors[index].photo;
            doctorElement[1].children[0].firstElementChild.textContent = doctors[index].fullname;
            doctorElement[1].children[0].lastElementChild.textContent = doctors[index].post;        
            doctorElement[1].children[2].lastElementChild.textContent = doctors[index].about;
        });
    });
});