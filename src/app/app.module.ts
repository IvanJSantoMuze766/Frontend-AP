import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysComponent } from './components/skills/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './components/educacion/educacion.component';
import { Error404Component } from './components/error404/error404.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBannerComponent } from './components/modal/modal-banner/modal-banner.component';
import { ModalEducacionComponent } from './components/modal/modal-educacion/modal-educacion.component';
import { ModalLogoutComponent } from './components/modal/modal-logout/modal-logout.component';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { ModalProyectosComponent } from './components/modal/modal-proyectos/modal-proyectos.component';
import { ModalAcercaDeComponent } from './components/modal/modal-acerca-de/modal-acerca-de.component';
import { ModalPerfilComponent } from './components/modal/modal-perfil/modal-perfil.component';
import { ModalSoftSkillsComponent } from './components/modal/modal-soft-skills/modal-soft-skills.component';
import { ModalHardSkillsComponent } from './components/modal/modal-hard-skills/modal-hard-skills.component';
import { ModalExperienciaComponent } from './components/modal/modal-experiencia/modal-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    NavbarComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectoComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    EducacionComponent,
    Error404Component,
    ModalComponent,
    ModalBannerComponent,
    ModalEducacionComponent,
    ModalLogoutComponent,
    ModalLoginComponent,
    ModalProyectosComponent,
    ModalAcercaDeComponent,
    ModalPerfilComponent,
    ModalSoftSkillsComponent,
    ModalHardSkillsComponent,
    ModalExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
   ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
