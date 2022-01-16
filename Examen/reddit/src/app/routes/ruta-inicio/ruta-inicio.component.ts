import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  arregloPosts = [
    {
      numVotes: 2.5,
      subrName: 'r/news',
      subrPhoto: 'https://image.winudf.com/v2/image1/Y29tLndvcmxkbmV3c19pY29uXzE1NjY5OTU5NjlfMDMx/icon.png?w=&fakeurl=1',
      postData: 'Posted by u/DangitBebby 4 hours ago',
      postTitle: 'As Sinema Defends Filibuster, Progressives Say Vote Her the Hell Out',
      postImage: 'https://www.commondreams.org/sites/default/files/styles/banner_image_1x_xl/public/2022-01/arizona-voting-rights.jpg.webp?h=04762a9d&itok=GMHzNOhQ',
      numComments: 20
    },

  ]
  arregloTrending= [
    {

    },
    {

    },
    {

    },
    {

    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

}
