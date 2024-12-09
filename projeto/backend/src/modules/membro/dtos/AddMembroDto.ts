export class AddMembroDto {
  constructor(
    public nome: string,
    public data_nascimento: Date,
    public genero: string,
    public foto_url: string,
    public descricao: string,
    public habilidades: string,
    public redes_sociais: object,
    public squad_id: string,
    public email: string
  ) {}
}
