/*-- 
Get button element and assign it to 'btn' variable
--*/
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log("Clicked")
    retrieveData();
});


/*--
Ajax function - Fetch data and parse the text to JSON format
--*/
function fetchData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        console.log("Data loaded.");
        // Parse plain text to JSON and assign it to var data
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}

function retrieveData() {
    fetchData('https://api.github.com/orgs/HackYourFuture/repos', data => {
        console.log(data);
        const ul = document.querySelector('#list');
        for (const link of data) {
            li = document.createElement('li');
            li.innerHTML = `<a href="${link.url}" target="_blank">${link.url}</href>`;
            ul.appendChild(li);
        }
    });
}