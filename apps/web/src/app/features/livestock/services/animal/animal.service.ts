import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../../models/animal.model';


@Injectable({ providedIn: 'root' })
export class AnimalService {

  private apiUrl = 'http://127.0.0.1:8080/api/animal';

  constructor(private http: HttpClient) {}

  /** Obtener todos los animales */
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
