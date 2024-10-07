import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../service/vehiculos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  servicio = inject(VehiculosService);
  ruta = inject(ActivatedRoute);

  id: any;
  marca: any;
  modelo: any;
  anio: any;
  imagen: any;

  ngOnInit() {
    this.ruta.params.subscribe((parametro) => {
      this.servicio
        .getVehiculo(parametro['idVehiculo'])
        .subscribe((vehiculo) => {
          this.id = vehiculo.id;
          this.marca = vehiculo.marca;
          this.modelo = vehiculo.modelo;
          this.anio = vehiculo.anio;
          this.imagen = vehiculo.imagen;
        });
    });
  }

  editar(formulario: any) {
    const vehiculoEditado = {
      id: this.id,
      marca: formulario.value.marca,
      modelo: formulario.value.modelo,
      anio: formulario.value.anio,
      imagen: formulario.value.imagen,
    };

    this.servicio.putVehiculo(vehiculoEditado).subscribe(() => {
      location.href = '/vehiculos';
    });
  }
}
