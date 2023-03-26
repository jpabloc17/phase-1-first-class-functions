function makeDinner(day){

    if (day === "monday" || day === "thursday"){
        return "Pasta";
    } else if (day === "tuesday" || day === "friday"){
        return "Salad";
    } else if (day === "wednesday" || day === "saturday"){
        return "Bacon and eggs"
    } else {
         return "Today wil buy dinner"
    }
}

function receivesAFunction(makeDinner){
    return makeDinner();
}

function returnsANamedFunction(){
    return makeDinner;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I'm not hungry right now")
    }
}