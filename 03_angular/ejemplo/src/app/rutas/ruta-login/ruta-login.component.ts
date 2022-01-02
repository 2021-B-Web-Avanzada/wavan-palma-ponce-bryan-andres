import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner=true

  arregloUsuarios=[
    {
      id:1,
      nombre:'Adrian',
      color:'#00BCFF',
      link:'https://www.webcomponents.org/',
      link_imagen:'https://cdn.custom-cursor.com/packs/3475/meme-pop-cat-pack.png'
    },
    {
      id:2,
      nombre: 'Andres',
      color:'#ff5ef5',
      link:'https://www.webcomponents.org/',
      link_imagen:'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/cat-behaviour.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarSegundoBanner(){
    this.mostrarSegundoBanner=!this.mostrarSegundoBanner
  }
}
