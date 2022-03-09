import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        }
    })
export class EventosGateway {
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message: { nombre: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensaje: 'Bienvenido ' + message.nombre
                });
        return 'ok';
    }

    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: { salaId: string, },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);
        const mensajeAEnviar: any = {};
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('revelarPieza')
    enviarMensaje(
        @MessageBody()
            message: {salaId: string, piezaId: string},
        @ConnectedSocket()
            socket: Socket
    ) {
        const nuevoMensaje = {
            salaId: message.salaId,
            PiezaId: message.piezaId,
        } as any;
        socket.broadcast.to(message.salaId)
            .emit(
                'escucharEventoRevelarPieza',
                nuevoMensaje
            );
        return 'ok';
    }


}
