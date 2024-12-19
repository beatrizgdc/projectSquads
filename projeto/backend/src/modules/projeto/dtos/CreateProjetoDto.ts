export class CreateProjetoDto {
  constructor(
    public nome: string,
    public descricao: string,
    public tecnologias: string,
    public status: string,
    public squad_id: string
  ) {}
}
