import { Socket } from 'socket.io';
export declare class EventosGateway {
    devolverHola(message: {
        nombre: string;
    }, socket: Socket): string;
}
