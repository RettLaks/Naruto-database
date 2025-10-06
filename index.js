document.getElementById("search").addEventListener("click", function searching() {
    let char = document.getElementById("searchText").value.toLowerCase();
    const myAPI = "https://dattebayo-api.onrender.com/characters"
    let funnet = false;


    fetch(myAPI)
        .then(response => response.json())
        .then(data => {
            for (const character of data.characters) {
                if (char == character.name.toLowerCase()) {
                    funnet = true
                    console.log(character.name + ": " + character.actor + " " + character.image);
                    let name = document.getElementById("name")
                    let species = document.getElementById("species")
                    let gender = document.getElementById("gender")
                    let house = document.getElementById("house")
                    let year = document.getElementById("year")
                    let blood = document.getElementById("blood")
                    let patronus = document.getElementById("patronus")
                    let actor = document.getElementById("actor")
                    let img = document.getElementById("img")

                    name.innerHTML = character.name
                    species.innerHTML = character.debut.manga
                    gender.innerHTML = character.personal.sex
                    house.innerHTML = character.personal.clan
                    year.innerHTML = character.personal.birthdate
                    blood.innerHTML = character.personal.bloodType
                    patronus.innerHTML = character.jutsu[0]
                    actor.innerHTML = character.voiceActors.japanese[0]
                    img.src = character.images[0]
                }
            }
            if (funnet == true) {
                document.getElementById("hidster").className = "none"
                document.getElementById("img").className = "none"
                document.getElementById("feilMelding").className = "hidden"
            } else {
                document.getElementById("hidster").className = "hidden"
                document.getElementById("img").className = "hidden"
                document.getElementById("feilMelding").className = "none"
            }
        })
        
})

document.getElementById("searchText").addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("search").click();
    }
})