import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Socket} from 'socket.io';


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
/*
    @SubscribeMessage('enviarUsuarios')
    enviarUsuarios(
        @MessageBody()
            message: {
            salaId: string, users: {
                username: string
                puntaje: number
            }[]
        },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: message.users
        };
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoEnviarUsuarios',
                mensajeAEnviar
            );
        return 'ok';
    }


 */

        @SubscribeMessage('finJuego')
        finJuego(
            @MessageBody()
                message: {
                salaId: string, user: {
                    username: string
                    puntaje: number
                    color: string
                }
            },
            @ConnectedSocket()
                socket: Socket
        ) {
            socket.join(message.salaId);
            const mensajeAEnviar: any = {
                mensaje: message.user
            };
            socket.broadcast
                .to(message.salaId)
                .emit(
                    'escucharEventoFinJuego',
                    mensajeAEnviar
                );
            return 'ok';
        }




    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: { salaId: string, nombre: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido' + message.nombre
        };
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('revelarPieza')
    revelarPieza(
        @MessageBody()
            message: { salaId: string, mensaje: string[][], jugadas:boolean[][], user:{ username: string, puntaje: number, color: string } },
        @ConnectedSocket()
            socket: Socket
    ) {
        const nuevoMensaje = {
            salaId: message.salaId,
            mensaje: message.mensaje,
            jugadas:message.jugadas,
            user:message.user
        } as any;
        socket.broadcast.to(message.salaId)
            .emit(
                'escucharEventoRevelarPieza',
                nuevoMensaje
            );
        return 'ok';
    }


}
