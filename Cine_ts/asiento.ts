export class asiento {
  private numero: number;
  private fila: string;
  private ocupado: boolean;

  constructor(numero: number, fila: string, ocupado: boolean = false) {
    this.numero = numero;
    this.fila = fila;
    this.ocupado = ocupado;
  }

  public getNumero(): number {
    return this.numero;
  }

  public getFila(): string {
    return this.fila;
  }

  public isOcupado(): boolean {
    return this.ocupado;
  }

  public setOcupado(ocupado: boolean): void {
    this.ocupado = ocupado;
  }
}

export function mostrarAsiento(asiento: Asiento): string {
  return `Asiento ${asiento.getFila()}-${asiento.getNumero()} ${asiento.isOcupado() ? 'Ocupado' : 'Disponible'}`;
}
