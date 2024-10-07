import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../service/vehiculos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  servicio = inject(VehiculosService);

  id: any;
  marca: any;
  modelo: any;
  anio: any;
  imagen: any;

  guardar(formulario: any) {
    alert('Vehículo guardado');
    this.servicio.postVehiculo(formulario.value).subscribe({
      next: (response) => {
        console.log('Datos del vehículo guardados con éxito', response);
      },
      error: (error) => {
        console.error('Error al guardar los datos del vehículo', error);
      },
    });
    this.borrar();
    location.href = 'vehiculos';
  }

  borrar() {
    this.id = '';
    this.marca = '';
    this.modelo = '';
    this.anio = '';
    this.imagen = '';
  }
}
