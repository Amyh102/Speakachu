document.querySelector('.get-pokemon').addEventListener('click', getData);
document.querySelector('.get-answer').addEventListener('click', getAnswer);

const category = ["color", "habitat", "shape", "egg_groups", "flavor_text_entries", "genera"];
answer = "";

function getData(e){
    var num = Math.floor(Math.random() * Math.floor(807));
    var ques = "color"; //category[Math.floor(Math.random() * Math.floor(6))];
    var option = document.getElementById("dropdown");
    var lang = option.options[option.selectedIndex].value;
    console.log(lang);
    // lang = "en";

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
            document.querySelector('.pokemon-name').innerHTML = poke_name;
            console.log(poke_name);

            default_question = "What is " + poke_name + "'s " + ques + "?";
            switch(ques){
                case "color":
                    answer = response.color.name;
                    document.querySelector('.pokemon-fact').innerHTML = poke_name + " is " + response.color.name + ".";
                    document.querySelector('.pokemon-question').innerHTML = default_question;
                    // translate(default_question, lang);
                    break;
                case "habitat":
                    answer = response.habitat.name;
                    document.querySelector('.pokemon-fact').innerHTML = poke_name + " is from " + response.habitat.name + ".";
                    document.querySelector('.pokemon-question').innerHTML = default_question;
                    break;
                case "shape":
                    answer = response.shape.name;
                    document.querySelector('.pokemon-fact').innerHTML = poke_name + " is " + response.shape.name + " shape.";
                    document.querySelector('.pokemon-question').innerHTML = default_question;
                    break;
                case "egg_groups":
                    answer = response.egg_groups[0].name;
                    document.querySelector('.pokemon-fact').innerHTML = poke_name + " is from the " + response.egg_groups[0].name + " egg group.";
                    document.querySelector('.pokemon-question').innerHTML = "What is " + poke_name + "'s egg group?";
                    break;
                case "flavor_text_entries":
                    for(j = 0; j < response.flavor_text_entries.length; j++){
                        if(response.flavor_text_entries[j].language.name == lang){
                            index = j;
                            break;
                        }
                    }
                    answer = poke_name;
                    document.querySelector('.pokemon-fact').innerHTML = `<li>${response.flavor_text_entries[index].flavor_text}</li>`;
                    document.querySelector('.pokemon-question').innerHTML = "Who is the Pokemon?";
                    break;
                case "genera":
                    for(j = 0; j < response.genera.length; j++){
                        if(response.genera[j].language.name == lang){
                            index = j;
                            break;
                        }
                    }
                    answer = response.genera[index].genus;
                    document.querySelector('.pokemon-fact').innerHTML = `<li>${response.genera[index].genus}</li>`;
                    document.querySelector('.pokemon-question').innerHTML = "What is " + poke_name + "'s genus?";
                    break;
            }

            
            document.getElementById('image').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + num + '.png';
            document.getElementById('image-back').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + num + '.png';
        }
    }
    xhr.send();
    e.preventDefault();
}
getData();

function getAnswer(){
    // if(document.getElementById("user-answer") == answer){
    console.log(document.getElementById("user-answer").value.toLowerCase() == answer.split(" ")[0].toLowerCase());
    // }
    console.log("Answer is: " + answer);
}
getAnswer();
