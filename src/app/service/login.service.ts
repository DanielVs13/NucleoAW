import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Constructor con la inyección de HttpClient
  constructor(private http: HttpClient) {}

  // URL para el servicio de login
  private API_LOGIN = 'http://localhost:3000/login';

  // Método para iniciar sesión (Login)
  postLogin(user: JSON): Observable<any> {
    return this.http.post(this.API_LOGIN, user);
  }

  // Método alternativo para iniciar sesión con almacenamiento en localStorage
  postLoginWithRole(user: JSON): Observable<any> {
    return this.http.post(this.API_LOGIN, user).pipe(
      tap((response: any) => {
        // Guardar datos de sesión en localStorage
        localStorage.setItem('login', 'true');
        localStorage.setItem('role', response.role); // 'role' debe estar presente en la respuesta del servidor
      })
    );
  }

  // URL para el servicio de registro de usuarios
  private API_REGISTRO = 'http://localhost:3000/users';

  // Método para registrar un nuevo usuario
  postRegistrar(user: JSON): Observable<any> {
    return this.http.post(this.API_REGISTRO, user);
  }

  // Método para obtener un usuario específico por ID
  getUsuario(id: string): Observable<any> {
    return this.http.get(`${this.API_LOGIN}/${id}`);
  }
}
