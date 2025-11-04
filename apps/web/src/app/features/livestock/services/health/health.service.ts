import { Injectable } from '@angular/core';
import { Health } from '../../models/health.model';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
    private data: Health[] = [
      {
        id: 1,  anial: 1, visit_price: 200, notes: 'vitaminas prenatales'
      },
      {
        id: 1,  anial: 5, visit_price: 200, notes: 'castracion'
      }
    ];
  
    getAll(): Health[] {
      return this.data;
    }
}
