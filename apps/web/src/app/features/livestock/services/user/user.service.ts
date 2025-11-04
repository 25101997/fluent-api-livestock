import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, cui: 3017123450101, firstName: 'Pedro', lastName: 'Herrera', registerDate: '03/10/2025', status: 1, updated: '03/10/2025' },
    { id: 2, cui: 3017678900101, firstName: 'Mario', lastName: 'Valenzuela', registerDate: '03/10/2025', status: 1, updated: '03/10/2025' },
    { id: 3, cui: 3015652310115, firstName: 'Juan', lastName: 'Ramirez', registerDate: '03/10/2025', status: 1, updated: '03/10/2025' },
    { id: 4, cui: 3012896530116, firstName: 'Manuel', lastName: 'Gutierrez', registerDate: '03/10/2025', status: 0, updated: '03/10/2025' },
  ];

  getAll(): User[] {
    return this.users;
  }
}
