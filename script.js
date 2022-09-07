const form = document.querySelector('form');
const container = document.querySelector('.container');
const inputEmail = document.querySelector('#inputEmail4'),
      inputName = document.querySelector('#inputName'),
      inputPhone = document.querySelector('#inputPhone'),
      inputWebsite = document.querySelector('#inputWebsite');

function createPost(body) {
    const request = new XMLHttpRequest();

    request.open('POST', 'https://jsonplaceholder.typicode.com/users');

    request.addEventListener('load', () => {
        const response = JSON.parse(request.responseText);
    });

    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    request.send(JSON.stringify(body));
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const newPost = {
        inputEmail: inputEmail.value,
        inputName: inputName.value,
        inputPhone: inputPhone.value,
        inputWebsite: inputWebsite.value
    };
    
    createPost(newPost);
    createCard(newPost);
    
});

function createCard(userInfo, cb) {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-5');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const res = Object.values(userInfo);
    res.forEach((item, i) => {
        if ((i + 1)  === res.length) {
            cardBody.append(`${item}`);
        } else {
            cardBody.append(`${item}, `);
        }
        
        
        
    });

    card.appendChild(cardBody);
    container.appendChild(card);
}




    

