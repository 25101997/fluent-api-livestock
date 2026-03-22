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
  origin?: AnimalOrigin;
  status?: AnimalStatus;
  stage?: AnimalStage;
  litter?: LitterRead;
  breedB?: AnimalBreed;
  productionUse?: AnimalProductionUse;
  breed: string;
  sex: string;
  isCastrated: boolean;
  weight: number;
  birthDate: string;      // Angular lo trata como string ISO
  created: string;
  updated: string;
}

export interface AnimalCreate {
  originId: number;
  statusId: number;
  stageId: number;
  breedBId: number;
  productionUseId: number;
  litterId?: number;
  isCastrated: boolean;
  weight: number;
  sex: string;
  breed: string;
  birthDate: string;
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
  breed: string;
  birthDate: string;
}
