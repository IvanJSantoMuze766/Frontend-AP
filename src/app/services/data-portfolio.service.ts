import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { SobreMi } from '../models/sobremi';
import { Experiencia } from '../models/experiencia';
import { Educacion } from '../models/educacion';
import { DescripcionEducacion } from '../models/descripcioneducacion';
import { HabTec } from '../models/habilidadtecnica';
import { Proyectos } from '../models/proyectos';
import { FraseContacto } from '../models/frasecontacto';
import { Contacto } from '../models/contacto';
import { User } from '../models/user';
import { Mensaje } from '../models/mensaje';

// Este servicio sera el encargado de manejar la data del portfolio

@Injectable({
  providedIn: 'root'
})
export class DataPortfolioService {

  // API URL:
  //private urlAPI = 'http://localhost:5000/experiencia'; 
  private json = './assets/data/data.json';
  private backendISM = "http://localhost:8080";
  private RenderBackendISM = "https://portfolio-backend-g1r7.onrender.com";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  /* --------------------------------------- HERO --------------------------------------------- */
  public obtenerDatosHero(): Observable<Hero[]> {
    //return this.http.get(this.json) //para cuando no tenemos API, cargamos JSON local en Angular.
    // return this.http.get('http://localhost:5000/hero') //ese es el puerto que configuramos en el package.json para usarlo con una API (json-server)
    return this.http.get<Hero[]>(this.RenderBackendISM + "/hero/ver") 
    // 3 meses despues de haber hecho la configuracion en Angular, creamos nuestro backend en Java
    //con Spring Boot, Hibernate, JPA; y ahora si tenemos backend.
  }

  public editarHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.RenderBackendISM + `/hero/editar/`, hero, this.httpOptions);
  }

  //-------------------------------------- SOBRE MI ------------------------------------------------

  public obtenerDatosSobreMi(): Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>(this.RenderBackendISM +"/sobremi/ver");
  }

  public editarSobreMi(sobremi: SobreMi): Observable<SobreMi> {
    return this.http.put<SobreMi>(this.RenderBackendISM +`/sobremi/editar/`, sobremi, this.httpOptions);
  }

  //---------------------------------------- EXPERIENCIA -----------------------------------------


  public obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.RenderBackendISM +"/experiencia/ver")
  }

  public crearExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.RenderBackendISM +`/experiencia/crear/`, expe, this.httpOptions);
  }

  public editarExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.RenderBackendISM +`/experiencia/editar/`, expe, this.httpOptions);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.RenderBackendISM +"/experiencia/borrar" + id.toString());
  }


  //---------------------------------------- EDUCACION ------------------------------------------


  public obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.RenderBackendISM +"/educacion/ver")
  }

  public crearEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.RenderBackendISM +`/educacion/crear/`, edu, this.httpOptions);
  }

  public editarEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.RenderBackendISM +`/educacion/editar/`, edu, this.httpOptions);
  }

  public borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.RenderBackendISM +"/educacion/borrar" + id.toString());
  }


  //                                      Descripcion Educacion

  public obtenerDatosDescripcionEducacion(): Observable<DescripcionEducacion[]> {
    return this.http.get<DescripcionEducacion[]>(this.RenderBackendISM +"/descripcioneducacion/ver")
  }

  public editarDescripcionEducacion(descedu: DescripcionEducacion): Observable<DescripcionEducacion> {
    return this.http.put<DescripcionEducacion>(this.RenderBackendISM +`/descripcioneducacion/editar/`, descedu, this.httpOptions);
  }


  //---------------------------------------- HABILIDADES TECNICAS --------------------------------


  public obtenerDatosHabTec(): Observable<HabTec[]> {
    return this.http.get<HabTec[]>(this.RenderBackendISM +"/habilidadtecnica/ver")
  }

  public crearHabTec(hab: HabTec): Observable<HabTec> {
    return this.http.post<HabTec>(this.RenderBackendISM +`/habilidadtecnica/crear/`, hab, this.httpOptions);
  }

  public editarHabTec(hab: HabTec): Observable<HabTec> {
    return this.http.put<HabTec>(this.RenderBackendISM +`/habilidadtecnica/editar/`, hab, this.httpOptions);
  }

  public borrarHabTec(id: number): Observable<any> {
    return this.http.delete<any>(this.RenderBackendISM +"/habilidadtecnica/borrar" + id.toString());
  }

  //--------------------------------------- PROYECTOS --------------------------------------------


  public obtenerDatosProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.RenderBackendISM +"/proyectos/ver")
  }

  public crearProyectos(proy: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.RenderBackendISM +`/proyectos/crear/`, proy, this.httpOptions);
  }

  public editarProyectos(proy: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(this.RenderBackendISM +`/proyectos/editar/`, proy, this.httpOptions);
  }

  public borrarProyectos(id: number): Observable<any> {
    return this.http.delete<any>(this.RenderBackendISM +"/proyectos/borrar" + id.toString());
  }

  //------------------------------------- COMENTARIOS ------------------------------------------

  public obtenerDatosMensaje(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.RenderBackendISM +"/mensaje/ver")
  }

  public crearMensaje(men: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(this.RenderBackendISM + `/mensaje/crear/`, men, this.httpOptions)
  }

  public editarMensaje(men: Mensaje): Observable<Mensaje> {
    return this.http.put<Mensaje>(this.RenderBackendISM + `/mensaje/editar/`, men, this.httpOptions)
  }

  public borrarMensaje(id: number): Observable<any> {
    return this.http.delete<any>(this.RenderBackendISM +"/mensaje/borrar" + id.toString());
  }


  //------------------------------------- CONTACTO ----------------------------------------------

  //                                    Frase Contacto
  
  public obtenerDatosFraseContacto(): Observable<FraseContacto[]> {
    return this.http.get<FraseContacto[]>(this.RenderBackendISM +"/frasecontacto/ver")
  }

  public editarFraseContacto(fracon: FraseContacto): Observable<FraseContacto> {
    return this.http.put<FraseContacto>(this.RenderBackendISM +`/frasecontacto/editar/`, fracon, this.httpOptions);
  }
  
  //                                       Contacto                                               
  
  public obtenerDatosContacto(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.RenderBackendISM +"/contacto/ver")
  }

  public editarContacto(con: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(this.RenderBackendISM +`/contacto/editar/`, con, this.httpOptions);
  }

  //-----------------------------------------  USER  ---------------------------------------------

  public obtenerDatosUser(): Observable<User[]> {
    return this.http.get<User[]>(this.RenderBackendISM +"/user/ver")
  }

}
