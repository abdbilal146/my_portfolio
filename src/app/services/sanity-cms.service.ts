import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SanityCmsService {

  private readonly API_CERTIFICATIONS = environment.API_CERTIFICATIONS;
  private readonly API_PROJECTS = environment.API_PROJECTS;
  private readonly API_HOME_PAGE_PROJECTS = environment.API_HOME_PAGE_PROJECTS;
  private readonly API_SOCIALS = environment.API_SOCIALS;
  constructor(private readonly httpClient:HttpClient) { 

  }


  getCertifications<T>(): Observable<T>{
    return this.httpClient.get<T>(this.API_CERTIFICATIONS);
  }


  getProjects<T>(): Observable<T>{
    return this.httpClient.get<T>(this.API_PROJECTS);
  }


  getHomePageprojects<T>(): Observable<T>{
    return this.httpClient.get<T>(this.API_HOME_PAGE_PROJECTS);
  }


  getSocials<T>(): Observable<T>{
    return this.httpClient.get<T>(this.API_SOCIALS);
  }
}
