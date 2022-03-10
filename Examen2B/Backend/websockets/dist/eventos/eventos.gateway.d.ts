import { Socket } from 'socket.io';
export declare class EventosGateway {
    devolverHola(message: {
        nombre: string;
    }, socket: Socket): string;
    finJuego(message: {
        salaId: string;
        user: {
            username: string;
            puntaje: number;
            color: string;
        };
    }, socket: Socket): string;
    unirseSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
    revelarPieza(message: {
        salaId: string;
        mensaje: string[][];
        jugadas: boolean[][];
        user: {
            username: string;
            puntaje: number;
            color: string;
        };
    }, socket: Socket): string;
}
