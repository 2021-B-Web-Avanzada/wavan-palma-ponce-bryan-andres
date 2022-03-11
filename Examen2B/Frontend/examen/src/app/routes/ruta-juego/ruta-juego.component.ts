import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../services/websockets/websockets.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-ruta-juego',
  templateUrl: './ruta-juego.component.html',
  styleUrls: ['./ruta-juego.component.scss']
})
export class RutaJuegoComponent implements OnInit {
  tabla = [
    ['0', '0', '0', '1', '|>', '2', '|>', '2', '2', '|>'],
    ['1', '1', '0', '1', '1', '3', '3', '|>', '2', '1'],
    ['|>', '3', '1', '0', '0', '1', '|>', '4', '3', '1'],
    ['|>', '|>', '2', '1', '1', '2', '3', '|>', '|>', '1'],
    ['2', '3', '|>', '1', '1', '|>', '4', '4', '3', '1'],
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

  tablaColores = [
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
    ['#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF', '#9A9A9AFF'],
  ]

  username = '';
  salaId = '';
  puntaje = 0
  color = '#ffffff'
  arregloSuscripciones: Subscription[] = [];
  mensaje = '';
  data = ''
  finJuego = false
  arregloJugadores: {
    username: string
    puntaje: number
    color: string
  }[] = []
  user: {
    username: string
    puntaje: number
    color: string
  } = {username: 'null', puntaje: 0, color: '#fff'}
  ganador: {
    username: string
    puntaje: number
    color: string
  } = {username: 'null', puntaje: 0, color: '#fff'}

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly websocketsService: WebsocketsService,
    public dialog: MatDialog
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
          this.color = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
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
    this.websocketsService.ejecutarEventoRevelarPieza(+this.salaId, i, j,
      {'username': this.username, 'puntaje': this.puntaje, 'color': this.color})
    for (let user of this.arregloJugadores) {
      if (this.username == user['username']) {
        user['puntaje'] = this.puntaje
      }
    }
    if (this.puntaje > (17/(this.arregloJugadores.length))) {
      this.finJuego = true
      this.ganador = {'username': this.username, 'puntaje': this.puntaje, 'color': this.color}
      this.abrirDialogo(this.ganador)
      this.websocketsService.ejecutarEventoFinJuego(+this.salaId, this.ganador)
    }
  }

  revelarPieza(i: number, j: number) {
    if (!this.tablaJugadas[i][j]) {
      this.tablaResuelta[i][j] = this.tabla[i][j]
      this.tablaColores[i][j] = this.color
    }

  }

  logicaJuego() {
    this.desSuscribirse();
    const respEscucharEventoRevelarPieza = this.websocketsService
      .escucharEventoRevelarPieza()
      .subscribe(
        {
          next: (data: any) => {
            let x = data['x']
            let y = data['y']
            this.tablaResuelta[x][y] = this.tabla[x][y]
            this.tablaColores[x][y] = data['user']['color']
            this.tablaJugadas[x][y] = true
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

    const respEscucharEventoFinJuego = this.websocketsService
      .escucharEventoFinJuego()
      .subscribe(
        {
          next: (data: any) => {
            this.finJuego = true
            this.ganador = data
            for (let lista of this.tablaJugadas) {
              for (let item of lista) {
                item = true
              }
            }
            console.log(data)
            console.log(this.ganador)
            this.abrirDialogo(this.ganador)
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

  abrirDialogo(user: { username: string, puntaje: number }) {
    const referenciaDialogo = this.dialog.open(ModalComponent, {
      disableClose: true, data: {
        user,
      }
    })
    const despuesCerrado$ = referenciaDialogo.afterClosed()
    despuesCerrado$
      .subscribe((datos) => {
      })
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
