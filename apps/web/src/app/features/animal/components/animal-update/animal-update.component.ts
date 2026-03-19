// Importar librerias de @angular/core
import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';

// Importar librerias para trabajar con rutas
import { ActivatedRoute, Router } from '@angular/router';

// Importar librerias para trabajar con formularios
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 

// Importar los servicios necesarios
import { AnimalService } from '../../services/animal.service';

import { AnimalRead,
         AnimalOrigin, 
         AnimalStatus, 
         AnimalStage,
         AnimalBreed,
         AnimalProductionUse,
         AnimalUpdate } from '../../models/animal.model';

// all about Litter
import { LitterService } from 'src/app/features/litter/services/litter.service';
import { LitterRead } from 'src/app/features/litter/models/litter.model';

import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.scss']
})

export class AnimalUpdateComponent implements OnInit {

  // variables globales del componente
    isEditMode: boolean = false;
    existId: boolean = false;
    
  // datos del animal
    animalForm!: FormGroup;
    animalData: AnimalRead | null = null;
    animalId: number = 0;
    animalStatuses: AnimalStatus[] = [];
    animalOrigins: AnimalOrigin[] = [];
    animalStages: AnimalStage[] = [];
    animalBreeds: AnimalBreed[] = [];
    animalProductionUses: AnimalProductionUse[] = [];
  
  // variables para mostrar campos en el html
    showLitterIdField: Boolean = false;
    showBirthdayField: Boolean = false;
    showStageField: Boolean = false;
    showSexField: Boolean = false;
    showWeightField: Boolean = false;
    showBreedField: Boolean = false;

  constructor(
      private animalService: AnimalService,
      private litterService: LitterService,
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
  ){}

ngOnInit(): void {
  this.initForm();
  this.readIdFromUrl();
}

private initForm(): void {
  this.animalForm = this.formBuilder.group({
    id: [{ value: null, disabled: true }],
    originId: [{ value: 0, disabled: true }, Validators.required],
    litterId: [{ value: null, disabled: true }, Validators.required],
    statusId: [0, Validators.required],
    stageId: [0, Validators.required],
    breedId: [null],
    productionUseId: [null],
    castrated: [null],
    weight: [1, [
      Validators.required,
      Validators.min(1),
      Validators.max(1000),
      Validators.pattern(/^\d+(\.\d{1,2})?$/)
    ]],
    sex: ['', Validators.required],
    breed: [null],
    birthDate: ['', Validators.required]
  });
}

  private readIdFromUrl(): void {
    const idURL = this.route.snapshot.paramMap.get('id');
    if (idURL) {
      this.animalId = Number(idURL);
      this.loadServices();
      this.getData();
    }
  }  

  private loadServices(): void{
    forkJoin({  
      statuses: this.animalService.getAllStatuses(), 
      origins: this.animalService.getAllOrigins(), 
      stages: this.animalService.getAllStages(), 
      breeds: this.animalService.getAllBreeds(),
      uses: this.animalService.getAllProductionUses(),
    }).subscribe({ 
      next:(data) => {             
        this.animalStatuses = data.statuses; 
        this.animalOrigins = data.origins; 
        this.animalStages = data.stages; 
        this.animalBreeds = data.breeds; 
        this.animalProductionUses = data.uses;
      },error:(err) => console.error('Error al cargar datos:', err)
    });
  }

  private getData(): void {
    if (!this.animalId) return;
    // Obtener animal por id
    this.animalService.getById(this.animalId).subscribe({
      next: (data) => {
        this.existId = true;
        this.isEditMode = true;
        this.animalData = data;

        console.log('ger service id: ',data);

        this.animalForm.patchValue({
          id: data.id,
          originId: data.origin?.id ?? 0,
          litterId: data.litter?.id ?? null,
          statusId: data.status?.id ?? 0,
          stageId: data.stage?.id ?? 0,
          breedId: data.breedB?.id ?? 0,
          productionUseId: data.productionUse?.id ?? 0,
          castrated: data.isCastrated,
          weight: data.weight,
          sex: data.sex,
          breed: data.breed,
          birthDate: data.birthDate ? new Date(data.birthDate).toISOString().split('T')[0] : '',
        });

        this.applyBusinessRules();

      },
      error: () => {
        console.error('No se pudo cargar el animal.');
      }
    });
  }

  private applyBusinessRules(): void {
    if(this.animalData){
      if(this.animalData.origin?.name === 'nacido'){
          this.animalForm.get('sex')?.disable();
          this.animalForm.get('birthDate')?.disable();
      }

      // modificar etapa y estado si el estado es registrado.
      if(!(this.animalData.status?.name === 'registrado')){
        this.animalForm.get('stageId')?.disable();
        this.animalForm.get('statusId')?.disable();
        this.animalForm.get('weight')?.disable();
        this.animalForm.get('breed')?.disable();
        this.animalForm.get('birthDate')?.disable();
      }
    }
  }

  /** Función que se ejecuta cuando se presiona el botón Guardar */
  onSubmit(): void {
    if (this.animalForm.invalid) {
      // Recorremos todos los controles 
      Object.keys(this.animalForm.controls).forEach(key => { 
        const control = this.animalForm.get(key);
        if (control && control.invalid) { 
          console.log(`❌ Control "${key}" inválido:`, control.errors); 
        }  
      });
      this.animalForm.markAllAsTouched(); 
      return; 
    }else{
      this.saveForm();
    }  
  }

  /** Guardar un nuevo animal */
  saveForm(): void {
    if (this.isEditMode && this.existId) {
      const raw = this.animalForm.getRawValue();

      const formData: AnimalUpdate = {
                                        id: Number(this.animalData?.id),
                                        originId: Number(raw.originId),
                                        statusId: Number(raw.statusId),
                                        stageId: Number(raw.stageId),
                                        breedBId: Number(raw.breedId),
                                        productionUseId: Number(raw.productionUseId),
                                        litterId: raw.litterId,
                                        isCastrated: raw.castrated,
                                        weight: Number(this.animalForm.value.weight),
                                        sex: raw.sex,
                                        breed: raw.breed,
                                        birthDate: raw.birthDate
                                      };

      if(formData.litterId){
        formData.litterId = Number(raw.litterId)
      }
      
      this.animalService.update(this.animalId, formData).subscribe(() => {
        console.log('Datos enviados:', formData);
        this.goBack();
      });
      
    }
  }

  /** Navega hacia atrás */
  goBack(): void {
    this.router.navigate(['/livestock/animal-list']);
  }
  
}
