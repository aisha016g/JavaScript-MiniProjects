/* APT - Application Programming Interface 
Fetch API provides an interface for fetching (sending/ receiving) resources.
it uses Request & Response objects.
The fetch() method is used to fetch a resource(data).
let promise = fetch(url,[options])
*/
const URL = "https://catfact.ninja/fact";

const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// using async-await
const getFacts = async () => {
    console.log("Getting data....");

    let response = await fetch(URL);

    console.log(response.status);

    let data = await response.json();

    fact.innerText = data.fact;
};

btn.addEventListener("click", getFacts);

/* Terms in API
AJAX - is Asynchronous JS & XML
JSON - is JS OBject Notion
json() method - returns a second promise that resolve with the result of parsing the response body text as JSON(input is JSON, Output is JS object) 
*/

// using promise chaining 

// function getFacts1() {
//     fetch(URL)
//     .then((resp) => {
//         return resp.json();
//     })
//     .then ((data) => {
//         console.log(data);
//         fact.innerText = data.fact;
//     });
// }
// btn.addEventListener("click", getFacts1);


/* Request & Response 
HTTP Verbs - GET, HEAD, POST, PUT, DELETE , ETC.
Response Status Code - 200(success), 500(server error), 400(Bad request),404(page not found)

HTTP response headers also contain details about the responses, such as content type, HTTP status code.etc.
*/