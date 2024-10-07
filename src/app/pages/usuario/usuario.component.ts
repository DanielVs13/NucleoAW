import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  ruta = inject(ActivatedRoute);
  service = inject(LoginService);
  user: any;

  ngOnInit() {
    this.ruta.params.subscribe((parametro) => {
      console.log(parametro);

      this.service.getUsuario(parametro['idUsuario']).subscribe((u) => {
        this.user = u;
      });
    });
  }
}
