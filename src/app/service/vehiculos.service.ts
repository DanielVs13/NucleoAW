import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) { }

  // Cambié la URL para reflejar que es una API de vehículos
  private API_VEHICULOS = "http://localhost:3000/vehiculos";

  // Crear un nuevo vehículo (en vez de libro)
  postVehiculo(vehiculo: JSON): Observable<any> {
    return this.http.post(this.API_VEHICULOS, vehiculo);
  }

  // Eliminar un vehículo por ID
  dropVehiculo(id: string): Observable<any> {
    return this.http.delete(`${this.API_VEHICULOS}/${id}`);
  }

  // Editar un vehículo existente
  putVehiculo(vehiculo: any): Observable<any> {
    return this.http.put(`${this.API_VEHICULOS}/${vehiculo.id}`, vehiculo);
  }

  // Obtener un solo vehículo por ID
  getVehiculo(id: string): Observable<any> {
    return this.http.get(`${this.API_VEHICULOS}/${id}`);
  }

  // Obtener la lista de todos los vehículos
  getVehiculos(): Observable<any> {
    return this.http.get(this.API_VEHICULOS);
  }
}
