import { CommonModule } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent {
  private servicio = inject(LoginService);
  private platformId = inject(PLATFORM_ID);

  email: any;
  password: any;

  login(usuario: any) {
    this.servicio.postLogin(usuario.value).subscribe((u) => {
      if (u.accessToken !== '') {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('login', 'true');
          window.location.href = 'privado';
        }
      }
    });
  }
}
