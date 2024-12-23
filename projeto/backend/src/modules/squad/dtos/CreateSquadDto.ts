export class CreateSquadDto {
  constructor(
    public nome: string,
    public logo_url: string,
    public descricao: string,
    public area_atuacao: string,
    public status: string
  ) {}
}
