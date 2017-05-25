export class ReportViewModel {
  Placa: string;
  Veiculo: string;
  Descricao: string;

  constructor(s: any) {
    this.Placa = s.Placa;
    this.Veiculo = s.Veiculo;
    this.Descricao = s.Descricao;
  }

}
