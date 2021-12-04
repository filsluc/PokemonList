var container = document.getElementById("main");
var pokemonArray = [];
async function getPokemon(){
    const xhr = new XMLHttpRequest()
            // method  // url                     // async?
    xhr.open("GET", "https://api.vschool.io/pokemon", true)
    xhr.send()

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const JSONdata = xhr.responseText
            const data = JSON.parse(JSONdata)
            pokemonArray = data.objects[0].pokemon;
            console.log(pokemonArray)
            

        } else if(xhr.readyState === 4 && xhr.status !== 200){
            console.log(xhr.responseText)
        }
    }
}

function loadPokemon(){

    for(var z=0; z< pokemonArray.length; z++){
        var tag = document.createElement("P");
        tag.innerHTML = pokemonArray[z].name
        container.appendChild(tag);
    }

}




getPokemon();     
window.setTimeout(loadPokemon, 1000);  