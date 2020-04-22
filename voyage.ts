class Sejour {
    constructor(private _nom:string, private _prix:number){
        
    }

    get nom():string {
        return this._nom;
    }

    get prix():number {
        return this._prix;
    }
}

class SejourService {
    private sejour:Sejour[];

    constructor(){
        this.sejour =  [
           new Sejour ("Londres", 700) ,
           new Sejour ("Rome", 500) ,
           new Sejour ("Madrid", 400) ,
        ];
    };  

    public findByNom(nom:string): Sejour | void{
        for (let s of this.sejour){
            if(nom === s.nom){
                return s; 
            }           
        };
    }

}
let ssj = new SejourService();

console.log(ssj.findByNom('Madrid'))
