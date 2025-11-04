import { Component, OnInit } from '@angular/core';
import { LitterService } from '../../../services/litter/litter.service';
import { Litter } from '../../../models/litter.model';

@Component({
  selector: 'app-litter-list',
  templateUrl: './litter-list.component.html',
  styleUrls: ['./litter-list.component.scss']
})
export class LitterListComponent implements OnInit {
  data: Litter[] = [];
  constructor(private litterService: LitterService) {}

  // ---- SEARCH ----
  searchField: keyof Litter = 'id';
  searchValue: string = '';

  // ---- ORDEN ----
  sortColumn: keyof Litter = 'id';
  sortAsc = true;

  ngOnInit(): void {
    this.data = this.litterService.getAll();
  }

  onSearch(field: keyof Litter, value: string): void {
    this.data = this.filterByValue(field, value);
  }

  filterByValue(field: keyof Litter, value: string): Litter[] {
    this.data = this.litterService.getAll();
    return this.data.filter(item =>
      String(item[field]).toLowerCase().includes(value.toLowerCase())
    );
  }

  orderBy(column: keyof Litter): void {
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
