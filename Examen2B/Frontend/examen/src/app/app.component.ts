import {Component, OnInit} from '@angular/core';
import {WebsocketsService} from "./services/websockets/websockets.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit() {
  }

  title = 'ejemplo';

  constructor(
    private readonly websocketsService: WebsocketsService
  ) {
  }


}
