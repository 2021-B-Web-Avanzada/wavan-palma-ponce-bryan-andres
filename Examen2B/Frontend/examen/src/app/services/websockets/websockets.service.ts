import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket) {
  }


  escucharEventoUnirseSala() {
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }

  ejecutarEventoUnirseSala(salaId: number, nombre: string, puntaje: number) {
    //Emitimos un evento
    this.socket.emit(
      'unirseSala', {
        nombre,
        salaId,
        puntaje
      });
  }


  ejecutarEventoRevelarPieza(salaId: number, x:number, y: number , user:{username:string, puntaje:number, color:string}) {
    //Emitimos un evento
    this.socket.emit(
      'revelarPieza', {
        salaId,
        x,
        y,
        user
      });
  }


  escucharEventoRevelarPieza() {
    return this.socket.fromEvent('escucharEventoRevelarPieza')
  }


  ejecutarEventoFinJuego(salaId: number, user: { username: string, puntaje: number, color: string}) {
    this.socket.emit(
      'finJuego', {
        salaId,
        user,
      });
  }

  escucharEventoFinJuego() {
    return this
      .socket
      .fromEvent('escucharEventoFinJuego');
  }



}
