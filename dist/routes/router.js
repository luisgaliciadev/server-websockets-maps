"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapa = exports.router = void 0;
var express_1 = require("express");
var mapa_1 = require("../classes/mapa");
exports.router = express_1.Router();
exports.router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Todo bien'
    });
});
// Mapa
exports.mapa = new mapa_1.Mapa();
var lugares = [
    {
        id: '1',
        nombre: 'Udmey',
        lat: 37.784679,
        lng: -122.395936
    },
    {
        id: '2',
        nombre: 'Bahia de san fransico',
        lat: 37.798933,
        lng: -122.377732
    },
    {
        id: '3',
        nombre: 'The palace hotel',
        lat: 37.788578,
        lng: -122.401745
    }
];
(_a = exports.mapa.marcadores).push.apply(_a, lugares);
// Ger todos los marcadores
exports.router.get('/mapa', function (req, res) {
    res.json(exports.mapa.getMarcadores());
});
exports.default = exports.router;
