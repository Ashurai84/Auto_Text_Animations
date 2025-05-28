const container = document.querySelector(".container");

const careers = [  "Enegineers","YouTuber", "Web Developer", "UI & UX Designer", "Instructor"];

let careersIndex = 0;

let characterindex = 0;


updatetext()

function updatetext(){
    characterindex++
    container.innerHTML =
     `<h1>I am a ${careers[careersIndex].slice(0, characterindex)}</h1>`;


 if (characterindex === careers[careersIndex].length) {
        careersIndex++;        
        characterindex = 0    
    }

    if (careersIndex === careers.length) {
        careersIndex = 0;
        
        
    }

     setTimeout(updatetext,  400);


}
