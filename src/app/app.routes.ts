import { Routes } from '@angular/router';
import { ConcesionariaComponent } from './pages/concesionaria/concesionaria.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { LoginComponent } from './pages/login/login.component';
import { accesoGuard, privadoGuard } from './guards/privado.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'concesionaria',component:ConcesionariaComponent,canActivate:[privadoGuard]},
    {path:'usuario',component:UsuarioComponent,canActivate:[privadoGuard]},
    {path:'vehiculosUsuario',component:VehiculosComponent,canActivate:[privadoGuard]},
    {path:'editar/:idVehiculo',component:EditarComponent,canActivate:[privadoGuard]},
    {path:'vehiculo/:idVehiculo1', component:DetallesComponent,canActivate:[privadoGuard] },

    {path:'login',component:LoginComponent,canActivate:[accesoGuard]},
    {path:'registro',component:RegistroComponent,canActivate:[accesoGuard]},
    {path:'',redirectTo:'home',pathMatch:'full'},
];
