export class pelicula {
    private titulo: string;
    private genero: string;
    private anio: number;
    private sinopsis: string;
    private calificacion: number;
    private duracion: number;
    private idioma: string;
    private subtitulos: boolean;
    // Constructor de la clase Pelicula
    constructor(titulo: string, genero: string, anio: number, sinopsis: string, calificacion: number, duracion: number, director: string, actores: string[], idioma: string, subtitulos: boolean) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.sinopsis = sinopsis;
        this.calificacion = calificacion;
        this.duracion = duracion;
        this.idioma = idioma;
        this.subtitulos = subtitulos;
    }
    // Métodos de la clase Pelicula
    public getTitulo(): string {
        return this.titulo;
    }
    public getGenero(): string {
        return this.genero;
    }
    public getAnio(): number {
        return this.anio;
    }
    public getSinopsis(): string {
        return this.sinopsis;
    }
    public getCalificacion(): number {
        return this.calificacion;
    }
    public getDuracion(): number {
        return this.duracion;
    }
    public getIdioma(): string {
        return this.idioma;
    }
    public getSubtitulos(): boolean {
        return this.subtitulos;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    public setAnio(anio: number): void {
        this.anio = anio;
    }
    public setSinopsis(sinopsis: string): void {
        this.sinopsis = sinopsis;
    }
    public setCalificacion(calificacion: number): void {
        this.calificacion = calificacion;
    }
    public setDuracion(duracion: number): void {
        this.duracion = duracion;
    }
    public setIdioma(idioma: string): void {
        this.idioma = idioma;
    }
    public setSubtitulos(subtitulos: boolean): void {
        this.subtitulos = subtitulos;
    }
    public toString(): string {
        return `Titulo=${this.titulo}, Género=${this.genero}, Año=${this.anio}, Sinopsis=${this.sinopsis}, Calificación=${this.calificacion}, Duración=${this.duracion},Idioma=${this.idioma}, Subtítulos=${this.subtitulos}`;
    }
    

    }

