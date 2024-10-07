import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosComponent } from '../../pages/vehiculos/vehiculos.component';
import { VehiculosService } from '../../service/vehiculos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  servico = inject(VehiculosService);

  libro: any;

  ngOnInit() {
    this.servico.getVehiculos().subscribe((p) => {
      this.libro = p;
    });
  }

  eliminar(id: string) {
    this.servico.dropVehiculo(id).subscribe();
    location.href = 'vehiculos';
  }
}
