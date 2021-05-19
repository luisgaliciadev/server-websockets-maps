"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcadorMover = exports.marcadorBorrar = exports.marcadorNuevo = exports.mensaje = void 0;
var router_1 = require("../routes/router");
// Escuchar mensajes
var mensaje = function (cliente, io) {
    cliente.on('mensaje', function (payload) {
        console.log('Mensaje recibido: ', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
// Mapas
var marcadorNuevo = function (cliente, io) {
    cliente.on('marcador-nuevo', function (marcador) {
        // Agregar marcador
        router_1.mapa.agregarMarcador(marcador);
        // Emitir nuevo marcador a todos los clientes
        // io.emit('marcador-nuevo', marcador);
        // Emitir nuevo marcador a todos los clientes menos al cliente que emite
        cliente.broadcast.emit('marcador-nuevo', marcador);
    });
};
exports.marcadorNuevo = marcadorNuevo;
var marcadorBorrar = function (cliente, io) {
    cliente.on('marcador-borrar', function (id) {
        // Agregar marcador
        router_1.mapa.borrarMarcador(id);
        // Emitir marcador borrado a todos los clientes menos al cliente que emite
        cliente.broadcast.emit('marcador-borrar', id);
    });
};
exports.marcadorBorrar = marcadorBorrar;
var marcadorMover = function (cliente, io) {
    cliente.on('marcador-mover', function (marcador) {
        // Agregar marcador
        router_1.mapa.moverMarcador(marcador);
        // Emitir marcador movido a todos los clientes menos al cliente que emite
        cliente.broadcast.emit('marcador-mover', marcador);
    });
};
exports.marcadorMover = marcadorMover;
