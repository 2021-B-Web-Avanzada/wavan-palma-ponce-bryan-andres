import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {environment} from 'src/environments/environment';
import {UserJphInterface} from "./interfaces/user-jph.interface";
import {UserJphCreateInterfaces} from "./interfaces/user-jph-create-interfaces";

@Injectable({
  providedIn: 'any'
})
export class UserJPHService {

  constructor(private readonly httpClient: HttpClient) {
  }

  buscarTodos(params?: any): Observable<UserJphInterface[]> {
    const url = environment.urlJPC + '/users';
    Object
      .keys(params)
      .forEach(k => {
        if (!params[k]) {
          delete params[k]
        }
      })
    return this.httpClient
      .get(url, {
        params
      },)
      .pipe(map((resultadoDatos) => resultadoDatos as UserJphInterface[]))
  }

  buscarUno(idUsuario: number) {
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(map((resultadoDatos) => resultadoDatos as UserJphInterface))
  }

  actualizarPorId(
    idUsuario: number,
    datosActualizar:UserJphCreateInterfaces):Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario
    return this.httpClient
      .put(url,datosActualizar)
      .pipe(map(
        (resultadoDatos) => resultadoDatos as UserJphInterface
      ))
  }


}
