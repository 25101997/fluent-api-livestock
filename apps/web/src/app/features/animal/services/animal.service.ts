import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalRead, AnimalCreate, AnimalUpdate } from '../models/animal.model';
import { AnimalStatus, AnimalOrigin, AnimalStage, AnimalBreed, AnimalProductionUse } from '../models/animal.model';

import { environment } from 'src/environments/environment.dev';

@Injectable({ providedIn: 'root' })
export class AnimalService {

  private ip = environment.ip;
  private port = environment.port

  private apiUrl = `http://${this.ip}:${this.port}/api/Animal`;

  private apiUrlAnimalStatus = `http://${this.ip}:${this.port}/api/AnimalStatus`;

  private apiUrlAnimalOrigin = `http://${this.ip}:${this.port}/api/AnimalOrigin`;
  
  private apiUrlAnimalStage = `http://${this.ip}:${this.port}/api/AnimalStage`;

  private apiUrlAnimalBreed = `http://${this.ip}:${this.port}/api/AnimalBreed`;

  private apiUrlAnimalProductionUse = `http://${this.ip}:${this.port}/api/AnimalProductionUse`;

  constructor(private http: HttpClient) {}

  /** Obtener todos los estados */
  getAllStatuses(): Observable<AnimalStatus[]> {
      return this.http.get<AnimalStatus[]>(this.apiUrlAnimalStatus);
  }

  /** Obtener todos los origines */
  getAllOrigins(): Observable<AnimalOrigin[]> {
      return this.http.get<AnimalOrigin[]>(this.apiUrlAnimalOrigin);
  }

  /** Obtener todos las etapas */
  getAllStages(): Observable<AnimalStage[]> {
      return this.http.get<AnimalStatus[]>(this.apiUrlAnimalStage);
  }

  getAllBreeds(): Observable<AnimalBreed[]> {
      return this.http.get<AnimalBreed[]>(this.apiUrlAnimalBreed);
  }

  getAllProductionUses(): Observable<AnimalProductionUse[]> {
      return this.http.get<AnimalProductionUse[]>(this.apiUrlAnimalProductionUse);
  }

  /** Obtener todos los animales */
  getAll(): Observable<AnimalRead[]> {
    return this.http.get<AnimalRead[]>(this.apiUrl);
  }

  getById(id: number): Observable<AnimalRead> {
    return this.http.get<AnimalRead>(`${this.apiUrl}/${id}`);
  }

  create(animal: AnimalCreate): Observable<AnimalCreate> {
    return this.http.post<AnimalCreate>(this.apiUrl, animal);
  }

  update(id: number, animal: AnimalUpdate): Observable<AnimalUpdate> {
    //console.log('Update animal id: ', id, 'where ', animal)
    return this.http.put<AnimalUpdate>(`${this.apiUrl}/${id}`, animal);
  }
}
