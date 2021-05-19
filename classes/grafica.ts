export class GraficaData {
    private meses = ['january', 'february', 'march', 'april'];
    private valores = [0,0,0,0];
    
    constructor(){}
    
    getData() {
        return [
            { data: this.valores, label: 'Ventas' }
        ]
    }
    incrementarValor(mes: string, valor: number) {
        mes = mes.toLowerCase().trim();
        for (let i in this.meses) {
            if (this.meses[i] === mes) {
                this.valores[i] += valor;
            }
        }
        return this.getData()
    }
}