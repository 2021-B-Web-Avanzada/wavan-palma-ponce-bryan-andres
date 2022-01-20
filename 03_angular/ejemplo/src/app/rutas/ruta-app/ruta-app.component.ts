import {Component, OnInit} from '@angular/core';
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {UserJPHService} from "../../servicios/http/user-jph.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-app', templateUrl: './ruta-app.component.html', styleUrls: ['./ruta-app.component.scss']
})
export class RutaAppComponent implements OnInit {
  arreglo: UserJphInterface[] = [];
  buscarUsuario = '';

  constructor(private readonly userJphService: UserJPHService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute.queryParams

    parametrosConsulta$
      .subscribe({
        next: (queryParams) => { //try
          this.buscarUsuario = queryParams['name']
          this.buscarUsuarios();
        }, error: () => { //catch

        }, complete: () => {

        }
      })

    this.activatedRoute
      .queryParams
      .subscribe((queryParams) => {
        this.buscarUsuario = queryParams['name']
        this.buscarUsuarios();
      })

  }

  actualizarParametrosDeConsulta(){
    this.router
      .navigate(['/app'], {
        queryParams: {
          name: this.buscarUsuario
        }
      })
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.userJphService
      .buscarTodos({
        name: this.buscarUsuario
      })
      .subscribe({
        next: (datos) => { // try then
          this.arreglo = datos;
          this.buscarUsuario = '';
        }, error: (error) => { // catch
          console.error({error});
        },
      })
  }

  gestionarUsuario(idUsuario: number) {
    const ruta = ['/app' , 'usuario' , idUsuario]; // /app/usuario/1
    this.router.navigate(ruta);
  }

}
