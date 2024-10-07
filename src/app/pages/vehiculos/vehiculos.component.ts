import { Component, inject } from '@angular/core';
import { VehiculosService } from '../../service/vehiculos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css',
})
export class VehiculosComponent {
  servico = inject(VehiculosService);

  vehiculo: any;

  ngOnInit() {
    this.servico.getVehiculos().subscribe((p) => {
      this.vehiculo = p;
    });
  }
}
