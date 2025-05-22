import {Medicamento} from './Medicamento';

export class Detalle_receta {
    Medicamento: Medicamento;
    cantidad: number;
   
    
    constructor(producto: Medicamento, cantidad: number) {
        this.Medicamento = producto;
        this.cantidad = cantidad;
    }

}