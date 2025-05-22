export class Paciente{
    ID:number;
    Nombre:string;
    Apellido:string;
    T_Sangre:string;
    Cont_Emer:number;

    constructor(ID: number, Nombre: string, Apellido: string, T_Sangre: string, Cont_Emer:number){
        this.ID = ID;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.T_Sangre = T_Sangre;
        Cont_Emer = Cont_Emer;
    }

    imprimirPaciente(): void{
        console.log("ID: " + this.ID);
        console.log("Nombre: " + this.Nombre);
        console.log("Apellido: " + this.Apellido);
        console.log("Tipo de sangre: " + this.T_Sangre);
        console.log("Contacto de emergencia: " + this.Cont_Emer);

    }
}