import { asiento } from './asiento';
import { pelicula } from './pelicula';
export class sala{
    private numero: number;
    private capacidad: number;
    private horario: string;
    asiento:asiento[]=[];
    // Constructor de la clase sala
    constructor(numero: number,horario: string) {
        this.numero = numero;
        this.capacidad = 30;
        this.horario = horario;  
    }
    // Métodos de la clase sala
    public getNumero(): number {
        return this.numero;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }
    public getHorario(): string {
        return this.horario;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public setHorario(horario: string): void {
        this.horario = horario;
    }
}