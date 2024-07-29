export class Conteudo {
    codigo: string;
    urlImagem: string;
    titulo: string;
    descricao: string;

    constructor(codigo: string, urlImagem: string, titulo: string, descricao: string) {
        this.codigo = codigo;
        this.urlImagem = urlImagem;
        this.titulo = titulo;
        this.descricao = descricao;
    }
}
