/*-- 
Get button element and assign it to 'btn' variable
--*/
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log("Clicked")
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
