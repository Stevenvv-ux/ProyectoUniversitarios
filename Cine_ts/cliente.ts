export class cliente {
    private nome: string;
    private idade: number;
    private email: string;

    constructor(nome: string, idade: number, email: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getEmail(): string {
        return this.email;
    }
}