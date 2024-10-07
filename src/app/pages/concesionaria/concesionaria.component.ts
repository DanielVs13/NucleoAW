import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-concesionaria',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './concesionaria.component.html',
  styleUrl: './concesionaria.component.css',
})
export class ConcesionariaComponent {
  cerrar() {
    localStorage.removeItem('login');
    window.location.href = 'login';
  }
}
