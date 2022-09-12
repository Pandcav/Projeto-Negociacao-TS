export class Negociacao {
    constructor(_data, 
    /*private _quantidade: number,
    private _valor: number*/
    //public readonly data: Date,
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /*get data(): Date {
        return this._data
    }
    get quantidade(): number {
        return this._quantidade
    }
    get valor(): number {
        return this._valor
    }*/
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
