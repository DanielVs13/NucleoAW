import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  servicio = inject(LoginService);

  email: any;
  password: any;
  nombre: any;
  usuario: any;

  registro(usuario: NgForm) {
    this.servicio.postRegistrar(usuario.value).subscribe();
    window.location.href = 'login';
  }
}
