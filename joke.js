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
