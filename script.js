const endpoint = 'https://api.adviceslip.com/advice';
const quoteEl = document.querySelector('.quote');
const btnUpdate = document.querySelector('.btn');
const adviceHeading = document.querySelector('.advice-heading')



async function updateAdvice(){
    const response = await fetch(endpoint, {cache: 'no-cache'});
    const data = await response.json();
    quoteEl.innerText = `"${data.slip.advice}"`;
    adviceHeading.innerText = `Advice #${data.slip.id}`
}

btnUpdate.addEventListener('click', updateAdvice);