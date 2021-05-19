"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapa = void 0;
var Mapa = /** @class */ (function () {
    function Mapa() {
        this.marcadores = [];
    }
    Mapa.prototype.getMarcadores = function () {
        return this.marcadores;
    };
    Mapa.prototype.agregarMarcador = function (marcador) {
        this.marcadores.push(marcador);
    };
    Mapa.prototype.borrarMarcador = function (id) {
        this.marcadores = this.marcadores.filter(function (mark) { return mark.id !== id; });
        return this.marcadores;
    };
    Mapa.prototype.moverMarcador = function (marcador) {
        for (var i in this.marcadores) {
            if (this.marcadores[i].id === marcador.id) {
                this.marcadores[i].lat = marcador.lat;
                this.marcadores[i].lng = marcador.lng;
                break;
            }
        }
    };
    return Mapa;
}());
exports.Mapa = Mapa;
