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

export interface Animal {
  id: number;
  origin?: AnimalOrigin;
  status?: AnimalStatus;
  stage?: AnimalStage;
  breed: string;
  sex: string;
  birthDate: string;      // Angular lo trata como string ISO
  created: string;
  updated: string;
}