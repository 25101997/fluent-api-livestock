import { Injectable } from '@angular/core';
import { Feed } from '../../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

    private feeds: Feed[] = [

      {
        id: 1, type: 'concentrado', unitn: 25, unitt: 'kg', amount: 4,
        brand: 'purina', expiration: '18/03/2026', name: 'abcd', description: '',
        destination: 'engorde', batch: 'AB132', price: 225, notes: '', updated: '',
      },
      {
        id: 2, type: 'concentrado', unitn: 25, unitt: 'kg', amount: 2,
        brand: 'purina', expiration: '18/03/2026', name: 'abcd', description: '',
        destination: 'crecimiento', batch: 'AB132', price: 150, notes: '', updated: '',
      }
  
    ];
  
    getAll(): Feed[] {
      return this.feeds;
    }
}
