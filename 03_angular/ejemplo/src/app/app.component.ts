import {Component, OnInit} from '@angular/core';
import {WebsocketsService} from "./servicios/websockets/websockets.service";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ejemplo';

  constructor(private readonly websocketsService: WebsocketsService) {


  }

  ngOnInit(): void {
        this.websocketsService
          .escucharEventoHola()
          .subscribe(
            {
              next: (data) =>{
                console.log(data)
              },
              error: (data) =>{
                console.error(data)
              }
            }
          )

    }

  eventoHola() {
    this.websocketsService.ejecutarEventoHola()
  }

}
