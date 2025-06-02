export class comestibles {
    private nombre: string;
    private tipo: string; // e.g., snack, bebida
    private precio: number;
    private cantidad: number;

    // Constructor de la clase Comestible
    constructor(nombre: string, tipo: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Métodos de la clase Comestible
    public getNombre(): string {
        return this.nombre;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }
}
 