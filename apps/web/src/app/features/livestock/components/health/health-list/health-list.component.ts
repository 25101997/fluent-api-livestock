import { Component, OnInit } from '@angular/core';
import { HealthService } from '../../../services/health/health.service';
import { Health } from '../../../models/health.model';

@Component({
  selector: 'app-health-list',
  templateUrl: './health-list.component.html',
  styleUrls: ['./health-list.component.scss']
})
export class HealthListComponent {
  data: Health[] = [];
  constructor(private healthService: HealthService) {}

  // ---- SEARCH ----
  searchField: keyof Health = 'id';
  searchValue: string = '';

  // ---- ORDEN ----
  sortColumn: keyof Health = 'id';
  sortAsc = true;

  ngOnInit(): void {
    this.data = this.healthService.getAll();
  }

  onSearch(field: keyof Health, value: string): void {
    this.data = this.filterByValue(field, value);
  }

  filterByValue(field: keyof Health, value: string): Health[] {
    this.data = this.healthService.getAll();
    return this.data.filter(item =>
      String(item[field]).toLowerCase().includes(value.toLowerCase())
    );
  }

  orderBy(column: keyof Health): void {
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
