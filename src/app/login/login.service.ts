import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient:HttpClient) {}
  
  BACKEND_APIDSERVER_URL = 'http://localhost:3000/api'

  getServerLogin(): Observable<any>{
    return this.httpClient.get<any>('')
  }

  
}
