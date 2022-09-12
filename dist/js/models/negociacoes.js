export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
}
/*const negociacoes =new Negociacoes();
negociacoes.list().forEach(n =>{
    n.
});*/ 
