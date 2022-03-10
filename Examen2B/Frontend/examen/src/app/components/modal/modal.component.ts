import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../routes/ruta-juego/ruta-juego.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<RutaJuegoComponent>) {
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  cerrarDialogo(){
    this.dialogRef.close({nombre:'Andrés'})
  }

}
