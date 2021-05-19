"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraficaData = void 0;
var GraficaData = /** @class */ (function () {
    function GraficaData() {
        this.meses = ['january', 'february', 'march', 'april'];
        this.valores = [0, 0, 0, 0];
    }
    GraficaData.prototype.getData = function () {
        return [
            { data: this.valores, label: 'Ventas' }
        ];
    };
    GraficaData.prototype.incrementarValor = function (mes, valor) {
        mes = mes.toLowerCase().trim();
        for (var i in this.meses) {
            if (this.meses[i] === mes) {
                this.valores[i] += valor;
            }
        }
        return this.getData();
    };
    return GraficaData;
}());
exports.GraficaData = GraficaData;
