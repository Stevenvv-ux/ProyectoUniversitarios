import { Cabecera_receta } from "./Cabecera_receta";
import { Detalle_receta } from "./Detalle_receta";
import { Medicamento } from "./Medicamento";

export class Receta{
    //Agregación
    Cabecera_receta:Cabecera_receta;
    //Composición
    Detalle_receta:Detalle_receta[] = [];

    constructor(Cabecera_receta:Cabecera_receta){
        this.Cabecera_receta= Cabecera_receta;
        this.llenarDetalleReceta();
    }

    llenarDetalleReceta():void{
        const medicamento1 = new Medicamento(2100,"Buprenorfina", 40.0,"Tableta sublingual","0.2 mg");
        this.Detalle_receta.push(new Detalle_receta(medicamento1, 91));
        const medicamento2 = new Medicamento(4026,"Buprenorfina", 25.0,"Solución inyectable","0.30 mg/ ml");
        this.Detalle_receta.push(new Detalle_receta(medicamento2, 17));
        const medicamento3 = new Medicamento(4027,"Fentanilo", 14.5,"Parche","4.2 mg");
        this.Detalle_receta.push(new Detalle_receta(medicamento3, 1));
        const medicamento4 = new Medicamento(4028,"Clonixinato de lisina", 54.1,"Solución inyectable","100 mg/ 2 ml");
        this.Detalle_receta.push(new Detalle_receta(medicamento4, 9));
        const medicamento5 = new Medicamento(2104,"Morfina", 33.3,"Tableta o cápsula de liberación prolongada","100 mg");
        this.Detalle_receta.push(new Detalle_receta(medicamento5, 2));
        const medicamento6 = new Medicamento(4033,"Oxicodona", 1.5,"Tableta de liberación prolongada","10 mg");
        this.Detalle_receta.push(new Detalle_receta(medicamento6, 7));
        
        
    }
       
    devolverInformacion():string{
        let informa = `Fecha: ${this.Cabecera_receta.fecha}\n`;
        informa += `RUC: ${this.Cabecera_receta.Doctor.ID}\n`; 
        informa += `Empresa: ${this.Cabecera_receta.Doctor.Nombre}\n`;
        informa += `Nombre Cliente: ${this.Cabecera_receta.Paciente.Nombre}\n`;
        informa += `RUC: ${this.Cabecera_receta.Paciente.ID}\n`;
        informa += `Direccion: ${this.Cabecera_receta.Paciente.T_Sangre}\n`;
        informa += `Telefono: ${this.Cabecera_receta.Paciente.Cont_Emer}\n`;
        informa += `Detalles del recetario:\n`;
        informa += `PRODUCTO-\tCANTIDAD-\tSUBTOTAL\n`;
        for(let i=0; i<this.Detalle_receta.length; i++){
            informa += `${this.Detalle_receta[i].Medicamento.Clave}\t-\t${this.Detalle_receta[i].Medicamento.Nombre}\t-\t${this.Detalle_receta[i].Medicamento.Precio * this.Detalle_receta[i].cantidad}\t-\t${this.Detalle_receta[i].Medicamento.Descripcion}\n`;
        }
        return informa;
    }
       

    calcularTotal():number{
        let total = 0;
        for(let i=0; i<this.Detalle_receta.length; i++){
            total += this.Detalle_receta[i].Medicamento.Precio * this.Detalle_receta[i].cantidad;
        }
        return total;
    }


}