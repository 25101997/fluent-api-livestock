import { Injectable } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private animals: Animal[] = [
    { id: 1, sexo: 'Macho', breed: 'Angus', birthDate: '2025-07-25', status: 'cresimiento', registration_date: '' },
    { id: 2, sexo: 'Macho', breed: 'Hereford', birthDate: '2025-07-25', status: 'cresimineto', registration_date: '' },
    { id: 3, sexo: 'Macho', breed: 'Angus', birthDate: '2025-07-25', status: 'cresimineto', registration_date: '' },
    { id: 4, sexo: 'Hembra', breed: 'Hereford', birthDate: '2025-07-25', status: 'cresimineto', registration_date: '' },
    { id: 5, sexo: 'Hembra', breed: 'Angus', birthDate: '2025-06-08', status: 'cresimineto', registration_date: ''  },
    { id: 6, sexo: 'Macho', breed: 'Hereford', birthDate: '2025-08-06', status: 'cresimineto', registration_date: '' },
    { id: 7, sexo: 'Macho', breed: 'Angus', birthDate: '2025-08-06', status: 'engorde', registration_date: '' },
    { id: 8, sexo: 'Hembra', breed: 'Hereford', birthDate: '2025-08-06', status: 'Inactivo', registration_date: '' },
  ];

  getAll(): Animal[] {
    return this.animals;
  }
}
