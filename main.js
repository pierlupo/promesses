function myFunc(event){
//Des instructions
console.log("hello world")
}

function DoLongTask(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (Math.random() > 0.5) {
                resolve("Tout s'est bien passé.");
            } else {
                reject(new Error("Il y a une erreur!"))
            }
        },5000)
    })
}

function DoLongTaskB(param){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            
                resolve(param + " , something added");
    
        },3000)
    })
}

function addition(a, b, callBack){
    const result = a + b;
    console.log(result);
    callBack(result);
}

function logResult(result){
    console.log(result);
}

function logError(result){
    console.log(result);
}
// document.querySelector('#myButtonA').addEventListener("click", () => {
// addition(2, 5, logResult)
// })

document.querySelector('#myButtonA').addEventListener("click", () => {
    // let result = DoLongTask();
    // console.log(result);
    DoLongTask().then(logResult).catch(logError)
});

document.querySelector('#myButtonB').addEventListener("click", () => {
/******Ancienne syntaxe******/ 
    DoLongTask()
    .then(res => {
        DoLongTaskB(res)
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    })
/***************************/ 
    DoLongTaskB("Blabla")
    .then(res => {
        console.log(res);
    })
    console.log("je suis lancé");
    console.log("Du texte");
})
async function myAsyncfunc() {

}
/******Nouvelle syntaxe******/ 
document.querySelector("myButtonC").addEventListener("click", async () => {
    try {
    let result = await DoLongTask();
    //ne marche pas google (comme d'autres sites) se protège de ceci car si on met ceci dans une boucle infinie
    //plus personne ne peut accéder au site !
    //let google = await fetch("https://www.google.fr");
    //console.log(google);
    console.log("Etape 1 finie");
    let resultB = await DoLongTaskB(result);
    console.log("Etape 2 finie");
    console.log(resultB);
    } catch (error) {
        console.error(error);
    }
});
/***************************/ 