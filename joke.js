fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.type == "single"){
        joke.textContent = data.joke
    }
    else{


    
    joke.textContent = data.setup + " " + data.delivery; 
    }

}); 

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
        

    
    joke.textContent = data.setup + " " + data.delivery; 
    }
   

}); 
})


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
            joke.textContent = data.setup + " " + data.delivery;
        }
    });
})

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
            joke.textContent = data.setup + " " + data.delivery;
        }
    });
})

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
            joke.textContent = data.setup + " " + data.delivery;
        }
    });
})

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
            joke.textContent = data.setup + " " + data.delivery;
        }
    });
})


