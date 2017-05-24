export class ExitViewModel {
  Placa: string;
  Veiculo: string;
  Cor: string;
  Vaga: number;
  HoraEntrada: string;
  HoraSaida: string;
  TempoContado: string;
  Valor: number;

  constructor(s: any) {
    this.Placa = s.Placa;
    this.Veiculo = s.Veiculo;
    this.Cor = s.Cor;
    this.Vaga = s.Vaga;
    this.HoraEntrada = s.HoraEntrada;
    this.HoraSaida = s.HoraSaida;
    this.TempoContado = s.TempoContado;
    this.Valor = s.Valor;
  }

}
