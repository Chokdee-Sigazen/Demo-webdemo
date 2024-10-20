
// function ChangeName(){
//     let myName = document.getElementById("myname"); /* '1' */
//     number = myName.innerHTML
//     number = parseInt(number); 
//     number = number + 1;
//     myName.innerHTML = number
// }



let programCount = 5;

function AddProject(){
    let project_grid = document.getElementById("project-container");
    let project_card = document.createElement("div")
    project_card.className = "project-card";
    project_card.innerHTML = `<img src="./images/projects/project${programCount % 2 + 1}.png" alt="Project 1" class="project-image">
                            <div class="project-info">
                                <h3>Project ${programCount} Title</h3>
                                <p>Brief description of Project ${programCount}. Explain what it does and the technologies used.</p>
                                <div class="project-links">
                                    <a href="https://chokdee-sigazen.github.io/Algorithm.io/" class="btn">View Project</a>
                                    <a href="https://github.com/Chokdee-Sigazen/Algorithm.io" class="btn">GitHub</a>
                                </div>
                            </div>`
    project_grid.appendChild(project_card)
    programCount = programCount + 1;
}

function AddText(){
    let profile_text = document.getElementById("text-profile")
    let new_text = document.createElement("h3")
    new_text.innerHTML = `And I'm a <span class="typed-text">Developer</span>`
    profile_text.appendChild(new_text)

}


document.addEventListener('DOMContentLoaded',function(){
    let cursor = document.getElementById("cursor");
    let typed_text = document.getElementById("typed");

    let vocab = ["Developer","Engineer","Designer"]

    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    let textArrayIndex = 0;
    let charIndex = 0;

    function type(){
        if (charIndex < vocab[textArrayIndex].length) {
            if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
            typed_text.innerHTML += vocab[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursor.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
            typed_text.textContent = vocab[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursor.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= vocab.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(vocab.length) setTimeout(type, newTextDelay + 250);

})

