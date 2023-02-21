// Async/Await requirements: Latest Chrome/FF browser or Babel: https://babeljs.io/docs/plugins/transform-async-to-generator/
// Fetch requirements: Latest Chrome/FF browser or Github fetch polyfill: https://github.com/github/fetch

// async function
const fetchAsync = async() =>{
   // await response of fetch call
   let response = await fetch('/citations.json');
   // only proceed once promise is resolved
   let data = await response.json();
   // only proceed once second promise is resolved
   console.log(data)
   // let citations = JSON.stringify(data);
   
   console.log(data)
   console.log(data[0]);
var randomNum = Math.floor(Math.random() * data.length);
    document.getElementById("quote").innerHTML = data[randomNum];
   // console.log("random",randomNum, "citations", data[randomNum]);
   return data[randomNum];
}

fetchAsync();




// document.getElementById("quote").innerHTML = citations[randomNum];
// fetchAsync().then(randomQuote => () {
//    // var randomNum = Math.floor(Math.random() * citations.length);
//    // document.getElementById("quote").innerHTML = citations[randomNum];
//    console.log("test")
// }
 // trigger async function
 // log response or catch error of fetch promise
//  var citations = fetchAsync()
//  citations.then(data => {
// console.log(JSON.stringify(data));
//  }



//  console.log(citations);

// const getIP = async () => {
//    let ;
//    await fetch('/citations.json')
//    .then(result => result.json())
//    .then(data => {
//        ip = data.ip;
//        console.log('test',ip);
//    });
//    console.log('test2',ip);
// };

// getIP();

// function randomQuote(){
//    console.log("test")
// }
// randomQuote();

































// // 
// // const getQuot= async() {
// //    const response = await fetch('/citations.json');
// //    if (!response.ok) {
// //       const message = `An error has occured: ${response.status}`;
// //       throw new Error(message);
// //    }
// //    const data = await response.json();

// //    console.log(data);
// // }
// // getQuotes().catch(error => {
// //    error.message; // 'An error has occurred: 404'
// // });

// // const citations = getQuotes();

// // // };


// // function getData() {
// //    return new Promise((resolve, reject) => {
// //      fetch('URL')
// //       .then(response => {
// //         return response.json();
// //        }).then(data_from_fetched => {
// //           let data = data_from_fetched.results;
// //           resolve(data);
// //     }
// //  })    
// //  }

// const getData = async() {
//    const response = await fetch('/citattions.json');
//    if (!response.ok) {
//      const message = `An error has occured: ${response.status}`;
//      throw new Error(message);
//    }
//    const data = await response.json();
//    console.log(data);
//  }
// .catch(error => {
//    error.message; // 'An error has occurred: 404'
//  });



//  // Example POST method implementation:
// async function postData(url = '', data = {}) {
//    // Default options are marked with *
//    const response = await fetch(url, {
//      method: 'POST', // *GET, POST, PUT, DELETE, etc.
//      mode: 'cors', // no-cors, *cors, same-origin
//      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//      credentials: 'same-origin', // include, *same-origin, omit
//      headers: {
//        'Content-Type': 'application/json'
//        // 'Content-Type': 'application/x-www-form-urlencoded',
//      },
//      redirect: 'follow', // manual, *follow, error
//      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//      body: JSON.stringify(data) // body data type must match "Content-Type" header
//    });
//    return response.json(); // parses JSON response into native JavaScript objects
//  }
 
//  postData('https://example.com/answer', { answer: 42 })
//    .then((data) => {
//      console.log(data); // JSON data parsed by `data.json()` call
//    });




// console.log(citations);

// // const fetc= async () => {
// //    try {
// //        const res = await fetch('/citations.json');
// //        if (!res.ok) {
// //            throw new Error(res.status);
// //        }
// //        const data = await res.json();
// //        console.log(data);
// //    } catch (error) {
// //        console.log(error);
// //    }
// // }

// // fetchUsers();



// // let jsonstring = JSON.stringify(Object.assign({}, arr))

// // console.log(jsonstring);
// console.log("test")

// // console.log(citations);

// function randomQuote() {
//    // var randomNum = Math.floor(Math.random() * citations.length);
//    // document.getElementById("quote").innerHTML = citations[randomNum];
//    console.log("test")
// }

// // randomQuote();


// // function randomQuote() {

// //    let randomNum = Math.floor(Math.random() * jsonstring.length);
// //    // console.log(jsonstring.slice(randomNum));
// //    console.log(randomNum);
// // }


// // for (const [key, value] of Object.entries(jsonstring)) {
// //    console.log(`${key}: ${value}`);
// // }






// // function afficherProps(jsonstring, nomObjet) {
// //    let resultat = "";
// //    for (let i in jsonstring) {
// //       if (jsonstring.hasOwnProperty(i)) {
// //          resultat += `${nomObjet}.${i} = ${jsonstring[i]}\n`;
// //       }
// //    }
// //    console.log(resultat);
// // }