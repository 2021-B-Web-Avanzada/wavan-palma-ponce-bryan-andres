import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoHola() {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'hola', {
      nombre: 'Adrian'
    });
    console.log(resp);
  }

  escucharEventoHola(){
    return this.socket
      .fromEvent('escucharEventoHola');
  }

  ejecutarEventoUnirseSala(salaId: number) {
    //Emitimos un evento
    this.socket.emit(
      'unirseSala', {
        salaId
      });
  }

  escucharEventoUnirseSala() {
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }


  ejecutarEventoEnviarMensaje(salaId: number, mensaje: string) {
    //Emitimos un evento
    this.socket.emit(
      'revelarPieza', {
        salaId,
        mensaje
      });
  }

  escucharEventoMensajeSala() {
    return this.socket.fromEvent('escucharEventoRevelarPieza')
  }

}
