export default class ToDo {
    constructor(id,titre,contenu,statut) {

        this._id = id
        this._titre = titre
        this._contenu = contenu
        this._statut = statut

    }
    get id() {
        return this._id
    }
    get titre() {
        return this._titre
    }
    get contenu(){
        return this._contenu
    }
    get statut(){
        return this._statut
    }

    set id(value) {
        this._id = value;
    }
    set titre(value){
        this._titre = value;
    }
    set contenu(value) {
        this._contenu = value;
    }
    set statut(value) {
        this._statut = value;
    }

    // display(){
    //     return `ID : ${this._id}, titre : ${this._titre}, contenu : ${this._contenu}, statut : ${this._statut}`
    // }
}