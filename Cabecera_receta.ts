import { Doctor } from "./Doctor";
import { Paciente } from "./Paciente";

export class Cabecera_receta{
    fecha:Date;
    Doctor:Doctor;
    Paciente:Paciente;

    constructor(fecha:Date, Doctor:Doctor, Paciente:Paciente){
            this.fecha = fecha;
            this.Doctor = Doctor;
            this.Paciente = Paciente;
    }
}