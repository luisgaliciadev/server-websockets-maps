import {Router, Request, Response} from 'express' ;
import Server from '../classes/server';
import { Mapa } from '../classes/mapa';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo bien'
    });
});

// Mapa
export const mapa = new Mapa();
const lugares = [
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

mapa.marcadores.push(...lugares)

// Ger todos los marcadores
router.get('/mapa', (req: Request, res: Response) => {
    res.json(mapa.getMarcadores());
});





export default router;