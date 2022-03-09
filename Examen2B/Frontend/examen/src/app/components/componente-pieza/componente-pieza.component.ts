import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-pieza',
  templateUrl: './componente-pieza.component.html',
  styleUrls: ['./componente-pieza.component.scss']
})
export class ComponentePiezaComponent implements OnInit {
  @Input()
  data = ''
  mostrar = false

  constructor() {
  }

  ngOnInit(): void {
  }

  verificarJuego() {

    this.mostrarDato()
    if (this.mostrar) {
      if (this.data == '|>') {
        return 1
      }
    }
    return 0

  }

  mostrarDato() {
    if (!this.mostrar) {
      this.mostrar = true
    }
  }

}
