import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../services/websockets/websockets.service";

@Component({
  selector: 'app-ruta-juego',
  templateUrl: './ruta-juego.component.html',
  styleUrls: ['./ruta-juego.component.scss']
})
export class RutaJuegoComponent implements OnInit {
  tabla = [
    ['0', '0', '0', '1', '|>', '2', '|>', '2', '1', '0'],
    ['1', '1', '0', '1', '1', '3', '3', '|>', '1', '0'],
    ['|>', '2', '1', '0', '0', '1', '|>', '4', '3', '1'],
    ['2', '|>', '2', '1', '1', '2', '3', '|>', '|>', '1'],
    ['1', '2', '|>', '1', '1', '|>', '4', '4', '3', '1'],
    ['0', '1', '2', '2', '2', '2', '|>', '|>', '3', '1'],
    ['0', '0', '1', '|>', '1', '1', '3', '|>', '|>', '1'],
  ]
  tablaResuelta = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]

  tablaJugadas = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ]

  tablaColores =[
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
  ]

  username = '';
  salaId = '';
  puntaje = 0
  color = '#ffffff'
  arregloSuscripciones: Subscription[] = [];
  mensaje = '';
  data = ''
  finJuego=false
  arregloJugadores: {
    username: string
    puntaje: number
    color: string
  }[] = []
  user: {
    username: string
    puntaje: number
    color: string
  } = {username: 'null', puntaje: 0, color:'#fff'}
  ganador:{
    username: string
    puntaje: number
    color: string
  }= {username: 'null', puntaje: 0, color:'#fff'}

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly websocketsService: WebsocketsService
  ) {

  }


  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe({
        next: (parametrosDeRuta) => {
          const salaId = parametrosDeRuta['salaId'];
          const username = parametrosDeRuta['username']
          this.salaId = salaId
          this.username = username
          this.color='#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
          this.arregloJugadores.push({
            'username': this.username,
            'puntaje': this.puntaje,
            'color': this.color
          })
          this.logicaJuego();
        }
      });

  }


  verificarJuego(i: number, j: number) {
    this.revelarPieza(i, j)
    if (this.tablaResuelta[i][j] == '|>' && (!this.tablaJugadas[i][j])) {
      this.puntaje += 1
    }
    this.tablaJugadas[i][j] = true
    this.websocketsService.ejecutarEventoRevelarPieza(+this.salaId, this.tablaResuelta, this.tablaJugadas,
      {'username': this.username, 'puntaje': this.puntaje, 'color': this.color})
    for (let user of this.arregloJugadores) {
      if (this.username == user['username']) {
        user['puntaje'] = this.puntaje
      }
    }
    if (this.puntaje>2){
      this.finJuego=true
      this.ganador={'username':this.username,'puntaje':this.puntaje,'color':this.color}
      this.websocketsService.ejecutarEventoFinJuego(+this.salaId,
        {'username': this.username, 'puntaje': this.puntaje, 'color': this.color})
    }
  }

  revelarPieza(i: number, j: number) {
    this.tablaResuelta[i][j] = this.tabla[i][j]
  }

  logicaJuego() {
    this.desSuscribirse();
    const respEscucharEventoRevelarPieza = this.websocketsService
      .escucharEventoRevelarPieza()
      .subscribe(
        {
          next: (data: any) => {
            this.tablaResuelta = data['mensaje']
            this.tablaJugadas = data['jugadas']
            let flag = true
            for (let user of this.arregloJugadores) {
              if (data['user']['username'] == user['username']) {
                user['puntaje'] = data['user']['puntaje']
                flag = !flag
              }
            }
            if (flag) {
              this.arregloJugadores.push(data['user'])
            }

          },
          error: (error) => {
            console.error({error});
          }
        }
      );

    const respEscucharEventoUnirseSala = this.websocketsService
      .escucharEventoUnirseSala()
      .subscribe(
        {
          next: (data: any) => {
          },
          error: (error) => {
            console.error({error});
          }
        }
      );

    const respEscucharEventoFinJuego= this.websocketsService
      .escucharEventoFinJuego()
      .subscribe(
        {
          next: (data: any) => {
            this.finJuego=true
            this.ganador=data
            console.log(this.ganador)
          },
          error: (error) => {
            console.error({error});
          }
        }
      );
    this.arregloSuscripciones.push(respEscucharEventoFinJuego)
    this.arregloSuscripciones.push(respEscucharEventoUnirseSala);
    this.arregloSuscripciones.push(respEscucharEventoRevelarPieza);
    this.websocketsService.ejecutarEventoUnirseSala(+this.salaId, this.username, this.puntaje)


  }

  private desSuscribirse() {
    this.arregloSuscripciones.forEach(
      (suscripcion) => {
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }
}
