import ToDo from "./classes/ToDo.js";



const ajoutTodo = document.querySelector('#ajoutTache');
const ajoutTitre = document.querySelector('#ajoutTitre');
const ajoutContenu = document.querySelector('#ajoutContenu');
const recherche = document.querySelector('#buttonS');
const tableauElem = document.querySelector('#result')
const buttonSearch = document.querySelector('#buttonS');
const btnSupprimer = document.querySelector('#btnSupprimer')
const toDos = new Array(); 

let id = 0;
id = toDos.length+1
console.log(id);

ajoutTodo.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clic");
    //const toDo = findtoDo();
    addtoDo()
    ajoutTitre.value = "";
    ajoutContenu.value ="";
    buttonSearch.value ="";
});

recherche.addEventListener("click", ()=>{
    console.log("clac");
});

// btnSupprimer.addEventListener("click", ()=> {
// console.log("plouic");
// })
// const refreshTableElement = () => {
//     console.log("refresh table");
//     tableDatas.innerHTML="";
// }
// function findTodo(){
//     //trouver une tache en fonction de son titre
//     return toDos.findtoDo(toDo => {
//         return toDo.titre
//     })
// }

function addtoDo(){
    toDos.push(new ToDo(toDos.length+1, ajoutTitre.value, ajoutContenu.value,'<input type="button" value="supprimer" class="btnSuppr" id="btnSupprimer" onclick="deleteToDo(${todo._id})">'));
    //toDos.push(new ToDo(`${this._id} ${this._titre }${this._contenu}${this._statut}`))
    console.table(toDos);
    tableauElem.innerHTML = "";
    //displayBox(succesBox,"Veuillez prendre votre ticket pour le véhicule "+licencePlate.value,3000)
    for(const todo of toDos){
        
        tableauElem.innerHTML += 
         `
             <td>${todo._id}</td>
             <td>${todo._titre}</td>
             <td>${todo._contenu}</td>
             <td>${todo._statut}</td>
      
        `
    }
}

function deleteToDo(id) {
    toDos.slice(id, toDos.length-1)
}

deleteToDo();

// function init(){
//     //Ajouter des taches à mon tableau
//     toDos.push(new ToDo(toDos.length+1,'Grimper l\'Everest','description','fait/àfaire'))
//     toDos.push(new ToDo(toDos.length+1,'nager avec des requins blancs','description','fait/àfaire'))
//     toDos.push(new ToDo(toDos.length+1,'voir des aurores boréales','description','fait/àfaire'))
    
//     console.table(toDos);
// }
// window.onload = init();
