fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.type == "single"){
        joke.textContent = data.joke
    }
    else{


    
    joke.textContent = data.setup + "..." + data.delivery; 
    }

}); 
//misc joke //
misc.addEventListener("click", function(){
    console.log("misc");
    fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.type == "single"){
        joke.textContent = data.joke
    }
    else{
        

    
    joke.textContent = data.setup + "..." + data.delivery; 
    }
    console.log(title);
    if(data.title = " "){
        title.textContent = "A Random Miscellaneous Joke" + data.title; 
    }
    else{
        title.textContent = data.title;
    }
   

}); 
})

// programming joke // 
programming.addEventListener("click", function(){
    console.log("programming");
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type == "single"){
            joke.textContent = data.joke
        }
        else{
            joke.textContent = data.setup + "..." + data.delivery;
        }
        console.log(title);
        if(data.title = " "){
            title.textContent = "A Random Programming Joke" + data.title; 
        }
        else{
            title.textContent = data.title;
        }
    });
})
// spooky joke // 
spooky.addEventListener("click", function(){
    console.log("spooky");
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type == "single"){
            joke.textContent = data.joke
        }
        else{
            joke.textContent = data.setup + "..." + data.delivery;
        }
        console.log(title);
        if(data.title = " "){
            title.textContent = "A Random Spooky Joke" + data.title; 
        }
        else{
            title.textContent = data.title;
        }
    });
})
// Christmas joke // 
christmas.addEventListener("click", function(){
    console.log("christmas");
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type == "single"){
            joke.textContent = data.joke
        }
        else{
            joke.textContent = data.setup + "..." + data.delivery;
        }
        console.log(title);
        if(data.title = " "){
            title.textContent = "A Random Christmas Joke" + data.title; 
        }
        else{
            title.textContent = data.title;
        }
    });
})


// pun joke // 
pun.addEventListener("click", function(){
    console.log("pun");
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type == "single"){
            joke.textContent = data.joke
        }
        else{
            joke.textContent = data.setup + "..." + data.delivery;
        }
        console.log(title);
        if(data.title = " "){
            title.textContent = "A Random Pun" + data.title; 
        }
        else{
            title.textContent = data.title;
        }
    });
})





