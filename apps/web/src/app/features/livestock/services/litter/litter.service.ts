import { Injectable } from '@angular/core';
import { Litter } from '../../models/litter.model';

@Injectable({
  providedIn: 'root'
})
export class LitterService {

  private litters: Litter[] = [

    { id: 1, mother: 1, father: 2, startDate: '14/01/2025',
      endDate: '01/07/2025', bornMales: 2, bornFemales: 3, unbornMales: 1,
      unbornFemales: 0, status: 'finalizado', notes: '', updated: '01/07/2025'
    },

    { id: 2, mother: 1, father: 2, startDate: '01/03/2025',
      endDate: '22/03/2025', bornMales: 0, bornFemales: 0, unbornMales: 0,
      unbornFemales: 0, status: 'no fecundado', notes: '', updated: '14/03/2025'
    },

    { id: 3, mother: 1, father: 2, startDate: '01/08/2025',
      endDate: '', bornMales: 0, bornFemales: 0, unbornMales: 0,
      unbornFemales: 0, status: 'fecundado', notes: '', updated: '22/08/2025'
    },


    { id: 4, mother: 1, father: 2, startDate: '13/09/2025',
      endDate: '', bornMales: 0, bornFemales: 0, unbornMales: 0,
      unbornFemales: 0, status: 'celo', notes: '', updated: '13/09/2025'
    },

    { id: 5, mother: 1, father: 2, startDate: '14/01/2025',
      endDate: '28/02/2025', bornMales: 0, bornFemales: 0, unbornMales: 2,
      unbornFemales: 4, status: 'aborto', notes: '', updated: '13/09/2025'
    },

  ];

  getAll(): Litter[] {
    return this.litters;
  }
}
