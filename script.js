// Async/Await requirements: Latest Chrome/FF browser or Babel: https://babeljs.io/docs/plugins/transform-async-to-generator/
// Fetch requirements: Latest Chrome/FF browser or Github fetch polyfill: https://github.com/github/fetch

// async function
const fetchAsync = async() =>{
   // await response of fetch call
   let response = await fetch('citations.json');
   // only proceed once promise is resolved
   let data = await response.json();
   // calcul aléatoire et implémentation de la citation au chargement de la page
var randomNum = Math.floor(Math.random() * data.length);
    // document.getElementById("quote").innerHTML = data[randomNum];
    // Essai javascript condition selon le viewport
   // console.log("random",randomNum, "citations", data[randomNum]);
//    let lo = (data[randomNum].length);
   let longStr = data[randomNum].length
   console.log(longStr)
// // console.log(longStr.length)
//    longStr = 50  &&  (window.matchMedia("(min-width: 600px)").matches) 
// console.log(longStr)

let condition = longStr < 70 ? 1 : 0
// let condition = longStr > 80 ? 1 : 0

// console.log(window.matchMedia)
console.log(condition,longStr)

let taille = (window.matchMedia("(min-width: 700px)").matches) || condition ? document.getElementById("quote").innerHTML = data[randomNum] : 0  
// let taille = (window.matchMedia("(min-width: 700px)").matches) || condition ? Math.floor(Math.random() * data.length) ? document.getElementById("quote").innerHTML = data[randomNum] : Math.floor(Math.random() * data.length) 

console.log(taille) 


// var func2 = function(affichage) {
//     let quote = affichage
//     return (window.matchMedia("(min-width: 700px)").matches) || condition ? document.getElementById("quote").innerHTML = data[randomNum]
//          : condition  ? Math.floor(Math.random() * data.length)
         
//   }

// document.getElementById("quote").innerHTML = data[randomNum]  
    //  document.getElementById("quote").innerHTML = data[randomNum];
   
    /* La largeur minimum de l'affichage est 600 px inclus */
//   } else {
//     /* L'affichage est inférieur à 600px de large */
//   }{
//     document.getElementById("quote").innerHTML = data[randomNum];
//    }
//    else{
//       let citationmob = document.querySelector(".citation");
//       citationmob.remove
//       // documentElement.querySelector("citation").innerHTML = data[randomNum];


   return data[randomNum];
   
}






var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}












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