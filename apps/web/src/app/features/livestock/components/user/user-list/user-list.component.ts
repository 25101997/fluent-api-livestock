import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
data: User[] = [];
  constructor(private userService: UserService) {}

  // ---- SEARCH ----
  searchField: keyof User = 'id';
  searchValue: string = '';

  // ---- ORDEN ----
  sortColumn: keyof User = 'id';
  sortAsc = true;

  ngOnInit(): void {
    this.data = this.userService.getAll();
  }

  onSearch(field: keyof User, value: string): void {
    this.data = this.filterByValue(field, value);
  }

  filterByValue(field: keyof User, value: string): User[] {
    this.data = this.userService.getAll();
    return this.data.filter(item =>
      String(item[field]).toLowerCase().includes(value.toLowerCase())
    );
  }

  orderBy(column: keyof User): void {
    // Si el usuario vuelve a hacer clic en la misma columna, invertimos el orden
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }

    this.data.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      // Convertimos a string para comparar de forma segura
      const valA = String(valueA).toLowerCase();
      const valB = String(valueB).toLowerCase();

      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }
}
