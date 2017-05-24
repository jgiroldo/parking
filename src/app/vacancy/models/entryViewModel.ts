export class EntryViewModel{
    Placa:string;
    Veiculo:string;
    Cor:string;
    Vaga:number;

    constructor(s:any) {
        this.Placa = s.Placa;
        this.Veiculo = s.Veiculo;
        this.Cor = s.Cor;
        this.Vaga = s.Vaga;
    }

}
