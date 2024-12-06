
const quoteElement = document.querySelector('#quote');
const authElement = document.querySelector('#author');
const button = document.querySelector('#button');


const urlApi = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiKey = 'DcilkCWD0TAEC6drLDD5Pw==rcebgl82JOBveK18';

const getQuote = () => {
    fetch(urlApi, {
        headers: { 'X-Api-Key': apiKey },
    }).then(data => data.json()).then(item => {
        console.log(item);
        quoteElement.textContent = item[0].quote
        authElement.textContent = item[0].author

    }).catch(error => {
        console.log(error);
    });

}

getQuote()

button.addEventListener('click', getQuote)

