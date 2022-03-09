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
    ['|>', '1', '0', '|>', '0', '1', '2', '|>', '|>', '1'],
    ['1', '|>', '0', '0', '0', '1', '|>', '3', '2', '1'],
    ['1', '2', '|>', '5', '6', '1', '|>', '1', '3', '|>'],
    ['1', '2', '4', '|>', '6', '3', '3', '3', '3', '3'],
    ['|>', '2', '4', '|>', '6', '3', '3', '|>', '3', '|>'],
    ['|>', '2', '4', '5', '6', '3', '3', '3', '3', '3'],
    ['|>', '2', '4', '5', '|>', '3', '|>', '3', '|>', '3',],
  ]
  tablaResuelta = [
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
  ]
  nombre = '';
  salaId = '';
  arregloSuscripciones: Subscription[] = [];
  mensaje = '';
  data = ''
  mostrar = false

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
          this.logicaJuego()
        }
      });
  }

  verificarJuego(i: number, j: number) {

    this.revelarPieza(i, j)
    if (this.mostrar) {
      if (this.tablaResuelta[i][j] == '|>') {
        this.tablaResuelta = this.tabla
      }
    }
    return 0

  }

  revelarPieza(i: number, j: number) {
    if (this.tablaResuelta[i][j] == '') {
      this.mostrar = true
      this.tablaResuelta[i][j] = this.tabla[i][j]
    }
  }

  logicaJuego() {
    const respEscucharEventoUnirseSala = this.websocketsService
      .escucharEventoUnirseSala()
      .subscribe(
        {
          next: (data) => {
            console.log('Alguien entro', data);
          },
          error: (error) => {
            console.error({error});
          }
        }
      );
    this.arregloSuscripciones.push(respEscucharEventoUnirseSala);
    this.websocketsService.ejecutarEventoUnirseSala(1)
  }


}
