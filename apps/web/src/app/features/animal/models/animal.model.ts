import { LitterRead } from "../../litter/models/litter.model";

export interface AnimalOrigin {
  id: number;
  name: string;
}

export interface AnimalStatus {
  id: number;
  name: string;
}

export interface AnimalStage {
  id: number;
  name: string;
}

export interface AnimalBreed {
  id: number;
  name: string;
}

export interface AnimalProductionUse {
  id: number;
  name: string;
}

export interface AnimalRead {
  id: number;
  origin?: AnimalOrigin;          // Relación opcional
  status?: AnimalStatus;          // Relación opcional
  stage?: AnimalStage;            // Relación opcional
  breedB?: AnimalBreed;           // Relación opcional
  productionUse?: AnimalProductionUse; // Relación opcional
  litter?: LitterRead;   // Relación opcional
  weight: number;                     // NOT NULL
  isCastrated: boolean;               // NOT NULL
  breed?: string;                     // NULL permitido
  sex: string;                        // NOT NULL
  birthDate: string;                  // NOT NULL (ISO string)
  created: string;                    // NOT NULL (ISO string)
  updated: string;                    // NOT NULL (ISO string)
}

export interface AnimalCreate {
  originId: number;          // NOT NULL
  statusId: number;          // NOT NULL
  stageId: number;           // NOT NULL
  breedId?: number;          // NULL permitido
  productionUseId?: number;  // NULL permitido
  litterId?: number;         // NULL permitido
  sex: string;               // NOT NULL
  breed?: string;            // NULL permitido
  weight: number;            // NOT NULL
  isCastrated: boolean;      // NOT NULL
  birthDate: string;         // NOT NULL (se envía como string ISO desde Angular)
}

export interface AnimalUpdate {
  id: number;
  originId: number;
  statusId: number;
  stageId: number;
  breedBId: number;
  productionUseId: number;
  litterId?: number;
  isCastrated: boolean;
  weight: number;
  sex: string;
  breed?: string;
  birthDate: string;
}
