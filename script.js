function handleSubmit (event) {
    event.preventDefault();
    // Creating the div that holds the newly created meme.
    let newMeme = document.createElement("div");
    newMeme.classList.add("meme");
    newMeme.classList.add("my-3");
    // Getting the input values of the form fields.
    let imgUrl = document.getElementById("img-link").value;
    let topText = document.getElementById("top-text").value;
    let bottomText = document.getElementById("bottom-text").value;
    // Creating the top text element and adding the input top text.
    let top = document.createElement("h1");
    top.classList.add("topText");
    top.classList.add("text-center");
    top.classList.add("py-2");
    top.innerText = topText;
    // Creating the img element from the input imgUrl.
    let img = document.createElement("img");
    img.classList.add("memeImg");
    img.classList.add("img-fluid");
    img.classList.add("rounded");
    img.src = imgUrl;
    // Creating the bottom text element and adding the input bottom text.
    let bottom = document.createElement("h1");
    bottom.classList.add("bottomText");
    bottom.classList.add("text-center");
    bottom.classList.add("py-2");
    bottom.innerText = bottomText;
    // Adding the top text, bottom text, and image to the newMeme.
    newMeme.appendChild(top);
    newMeme.appendChild(img);
    newMeme.appendChild(bottom);
    // Adds an event listener that deletes the entire meme after confirmation.
    newMeme.addEventListener("click", handleDelete);
    // Adding the new meme into the meme display area and resetting the meme form fields.
    let memes = document.getElementById("meme-display");
    memes.appendChild(newMeme);
    document.getElementById("meme-form").reset();
}

function handleDelete (event) {
    let currMeme = event.target;
    let del = confirm("Are you sure you would like delete this meme?");
    if (del) {
        currMeme.parentNode.remove();
    }
}

document.addEventListener("submit", handleSubmit);