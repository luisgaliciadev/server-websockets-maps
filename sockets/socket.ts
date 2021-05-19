import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { mapa } from '../routes/router';


// Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: {de: string, cuerpo: string}) => {
        console.log('Mensaje recibido: ', payload);
        io.emit('mensaje-nuevo', payload);
    });
}

// Mapas
export const marcadorNuevo = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('marcador-nuevo', (marcador) => {
        // Agregar marcador
        mapa.agregarMarcador(marcador);

        // Emitir nuevo marcador a todos los clientes
        // io.emit('marcador-nuevo', marcador);

        // Emitir nuevo marcador a todos los clientes menos al cliente que emite
        cliente.broadcast.emit('marcador-nuevo', marcador);
    });
}

export const marcadorBorrar = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('marcador-borrar', (id: string) => {
        // Agregar marcador
        mapa.borrarMarcador(id);
        // Emitir marcador borrado a todos los clientes menos al cliente que emite
        cliente.broadcast.emit('marcador-borrar', id);
    });
}

export const marcadorMover = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('marcador-mover', (marcador) => {
        // Agregar marcador
        mapa.moverMarcador(marcador);
        // Emitir marcador movido a todos los clientes menos al cliente que emite
        cliente.broadcast.emit('marcador-mover', marcador);
    });
}





