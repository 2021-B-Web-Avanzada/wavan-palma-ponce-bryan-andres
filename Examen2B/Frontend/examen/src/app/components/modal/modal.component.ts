import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../routes/ruta-juego/ruta-juego.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  ganador=''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<RutaJuegoComponent>) {
  }

  ngOnInit(): void {
    this.ganador=this.data['user']['username']
    console.log(this.ganador)
  }



}
