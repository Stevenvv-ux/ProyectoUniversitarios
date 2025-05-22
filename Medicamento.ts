export class Medicamento {
    Clave:number;
    Nombre:string;
    Precio:number;
    Descripcion:string;
    Cantidad:string;
    
    constructor(Clave:number,nombre:string, precio:number, Descripcion:string, Cantidad:string){
        this.Clave = Clave;
        this.Nombre = nombre;
        this.Precio = precio;
        this.Descripcion = this.Descripcion;
        this.Cantidad=Cantidad
    }
}