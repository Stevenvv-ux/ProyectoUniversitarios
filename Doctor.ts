import { Paciente } from "./Paciente";

export class Doctor extends Paciente{
    Escuela_Med:string;
    Especializacion:string;
    Exp_Laboral:string;
    Idiomas:string;

    constructor(ID: number, Nombre: string, Apellido: string, T_Sangre: string, Cont_Emer:number,Escuela_Med:string,Especializacion:string,Exp_Laboral:string,Idiomas:string){
        super(ID,Nombre,Apellido,T_Sangre,Cont_Emer);
        this.Escuela_Med=Escuela_Med;
        this.Especializacion=Especializacion;
        this.Exp_Laboral=Exp_Laboral;
        this.Idiomas=Idiomas;
    }
    
    devolverDatos(): string {
        return `Nombre: ${this.Nombre}\nApellido: ${this.Apellido}\nTipo de sangre: ${this.T_Sangre}\nContacto de emergencia: ${this.Cont_Emer}\nEscuela de Medicina: ${this.Cont_Emer}\nEspecialización: ${this.Especializacion}\nExperencia laboral: ${this.Exp_Laboral}\nIdiomas: ${this.Idiomas}`;
    }

}
