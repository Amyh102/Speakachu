


// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
document.querySelector('.get-pokemon').addEventListener('click', getData);

const category = ["color", "habitat", "shape", "egg_groups", "flavor_text_entries", "genera"];

function getData(e){

    var num = Math.floor(Math.random() * Math.floor(807));
    var ques = category[Math.floor(Math.random() * Math.floor(6))];
    var lang = "en";

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://pokeapi.co/api/v2/pokemon-species/${num}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response.name);

            for(d = 0; d < response.names.length; d++){
                if(response.names[d].language.name == lang){
                    poke_name = response.names[d].name;
                    break;
                }
            }
            console.log(poke_name);

            switch(ques){
                case "color":
                    document.querySelector('.pokemon-color').innerHTML = `<li>${response.color.name}</li>`;
                    break;
                case "habitat":
                    document.querySelector('.pokemon-color').innerHTML = `<li>${response.habitat.name}</li>`;
                    break;
                case "shape":
                    document.querySelector('.pokemon-color').innerHTML = `<li>${response.shape.name}</li>`;
                    break;
                case "egg_groups":
                    document.querySelector('.pokemon-color').innerHTML = `<li>${response.egg_groups[0].name}</li>`;
                    break;
                case "flavor_text_entries":
                    for(j = 0; j < response.flavor_text_entries.length; j++){
                        if(response.flavor_text_entries[j].language.name == lang){
                            index = j;
                            break;
                        }
                    }
                    document.querySelector('.pokemon-color').innerHTML = `<li>${response.flavor_text_entries[index].flavor_text}</li>`;
                    break;
                case "genera":
                    for(j = 0; j < response.genera.length; j++){
                        if(response.genera[j].language.name == lang){
                            index = j;
                            break;
                        }
                    }
                    document.querySelector('.pokemon-color').innerHTML = `<li>${response.genera[index].genus}</li>`;
                    break;
            }
            document.querySelector('.pokemon-name').innerHTML = `<li>${response.name}</li>`;

            document.getElementById('image').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + num + '.png';
            document.getElementById('image-back').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + num + '.png';
        }
    }
    xhr.send();
    e.preventDefault();
}

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
