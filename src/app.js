

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// document.querySelector('.get-pokemon').addEventListener('click', getData);

// const category = ["color", "habitat", "shape", "egg_groups"];

// function getData(e){

//     var num = Math.floor(Math.random() * Math.floor(807));
//     var ques = category[Math.floor(Math.random() * Math.floor(4))];

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',`https://pokeapi.co/api/v2/pokemon-species/${num}`, true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             const response = JSON.parse(this.responseText);
//             console.log(response.name);
//              
//             switch(ques){
//             case "color":
//                 document.querySelector('.pokemon-color').innerHTML = `<li>${response.color.name}</li>`;
//                 break;
//             case "habitat":
//                 document.querySelector('.pokemon-color').innerHTML = `<li>${response.habitat.name}</li>`;
//                 break;
//             case "shape":
//                 document.querySelector('.pokemon-color').innerHTML = `<li>${response.shape.name}</li>`;
//                 break;
//             case "egg_groups":
//                 document.querySelector('.pokemon-color').innerHTML = `<li>${response.egg_groups[0].name}</li>`;
//                 break;
//             }
//             document.querySelector('.pokemon-name').innerHTML = `<li>${response.name}</li>`;
            
//       

//         }
//     }
//     xhr.send();
//     e.preventDefault();
// }

// getData();


// curl -s -X POST -H "Content-Type: application/json" -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) --data "{'q':'how do i make rice','source':'en','target':'zh','format':'text'}" "https://translation.googleapis.com/language/translate/v2"



const { exec } = require('child_process');
exec("curl -s -X POST -H \"Content-Type: application/json\" -H \"Authorization: Bearer \"$(gcloud auth application-default print-access-token) --data \"{'q':'how do i make rice','source':'en','target':'zh','format':'text'}\" \"https://translation.googleapis.com/language/translate/v2\"", (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
  }
});
