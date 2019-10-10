export class OrdemServicoModel
{
  id: number;
  nuDocumento: number;
  idCliente: number;
  nmCliente: string;
  idColaborador: number;
  nmColaborador: string;
  dtEmisao: Date;
  dtFinalizacao: Date;
  dtPrevisao: Date;
  dsAssunto: string;
  dsServico: string;
  dsServicoInterno: string;
  dsStatus: string;
  horas: Array<HorasOsModel>;
  dsSituacao: string;
  dtSuporte: Date;
  dtTeste: Date;
  dtTreinamento: Date;
  dtProgramacao: Date;
}

export class HorasOsModel {
  dtInicio: Date;
  dtFinal: Date;
  tpServico: string;
}
