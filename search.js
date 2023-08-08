const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")
const inpWord = document.getElementById("inp-word")

const fetched = () =>{
    let word = inpWord.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) =>  response.json())
    .then((data) =>{
        console.log(data)
        
        result.innerHTML =
        `
        <div class="word">
            <h3>${word}</h3>
            <button onclick="playSound()">
                <i class="fas fa-volume-up"></i>
            efwefe</button>
       
        </div>

        <div class="details">
            <p>
                ${data[0].meanings[0].definitions[0].definition}
            </p>
        </div>

        <div class="word-example">
            <p>
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>
        </div>
        `

         sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
     })
     .catch(() =>{
              result.innerHTML = `<h3> Couldn't Find THe Word</h3>`
            })
    
}

function playSound(){
    sound.play();
}

btn.addEventListener("click", () =>{
    fetched()
})