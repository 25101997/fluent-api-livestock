import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed/feed.service';
import { Feed } from '../../../models/feed.model';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent {
  data: Feed[] = [];
  constructor(private feedService: FeedService) {}

  // ---- SEARCH ----
  searchField: keyof Feed = 'id';
  searchValue: string = '';

  // ---- ORDEN ----
  sortColumn: keyof Feed = 'id';
  sortAsc = true;

  ngOnInit(): void {
    this.data = this.feedService.getAll();
  }

  onSearch(field: keyof Feed, value: string): void {
    this.data = this.filterByValue(field, value);
  }

  filterByValue(field: keyof Feed, value: string): Feed[] {
    this.data = this.feedService.getAll();
    return this.data.filter(item =>
      String(item[field]).toLowerCase().includes(value.toLowerCase())
    );
  }

  orderBy(column: keyof Feed): void {
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
