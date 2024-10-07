import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../../service/vehiculos.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
  constructor(
    private ruta: ActivatedRoute,
    private servici: VehiculosService
  ) {}

  vehiculos: any;

  ngOnInit() {
    this.ruta.params.subscribe((params) => {
      let id = params['idVehiculo1'];

      this.servici.getVehiculo(id).subscribe((vehiculo) => {
        this.vehiculos = vehiculo;
      });
    });
  }
}
