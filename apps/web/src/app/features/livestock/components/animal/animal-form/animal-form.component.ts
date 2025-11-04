import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})

export class AnimalFormComponent implements OnInit {
  go_back = '/livestock/animal-list'
  isEditMode = false;
  animalId?: number;
  peso: number | null = null;
  pesoControl = new FormControl<number | null>(
    null,
    {
      validators: [
        Validators.min(1),
        Validators.max(1900),
        Validators.pattern(/^\d+(\.\d{1,2})?$/) // permite 0-2 decimales
      ]
    }
  );

  codigos = [
    '2025000001','2025000002','2025000003',
    '2025000004','2025000005','2025000006'
  ];

  codigoSeleccionado = '';


  origen = 'born'; // valor inicial

  onOrigenChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.origen = select.value;
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const char = event.key;
    if (!/^\d$/.test(char)) {
      event.preventDefault(); // bloquea todo lo que no sea dígito
    }
  }

  allowOnlyNumbersMaxMinAndTwoDecimals(event: KeyboardEvent, inputValue: string | number, min: number, max: number) {
    const value = String(inputValue ?? '');
    const char = event.key;

    // Permitir teclas de control
    if (['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(char)) {
      return;
    }

    // Solo dígitos y punto
    if (!/[0-9.]/.test(char)) {
      event.preventDefault();
      return;
    }

    // Evitar más de un punto
    if (char === '.' && value.includes('.')) {
      event.preventDefault();
      return;
    }

    // Máximo dos decimales
    if (value.includes('.')) {
      const [, dec = ''] = value.split('.');
      if (dec.length >= 2) {
        event.preventDefault();
        return;
      }
    }

    // --- Chequeo de rango ---
    // Simulamos cómo quedaría el valor si aceptamos el char
    const newValue = value + char;

    // Si termina en "." no validamos aún (ej: "12.")
    if (newValue.endsWith('.')) return;

    const num = Number(newValue);

    // Si no es número válido, bloqueamos
    if (Number.isNaN(num)) {
      event.preventDefault();
      return;
    }

    // Bloquea si supera el máximo o es menor al mínimo
    if (num > max || num < min) {
      event.preventDefault();
      return;
    }
  }


  validatePasteDecimal(event: ClipboardEvent) {
    const pasted = event.clipboardData?.getData('text') ?? '';
    // solo formato numérico con máx. 2 decimales (permite “.”)
    if (!/^\d+(\.\d{1,2})?$/.test(pasted)) {
      event.preventDefault();
    }
  }


  validatePaste(event: ClipboardEvent) {
    const pasted = event.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pasted)) {
      event.preventDefault(); // bloquea si lo pegado no son solo números
    }
  }

  ngOnInit() {
    this.animalId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.animalId;

    if (this.isEditMode) {
      // cargar datos del animal para editar
    }
  }

  // valida al salir del input
  checkRange() {
    if (this.peso !== null) {
      if (this.peso < 1) this.peso = 1;
      if (this.peso > 1900) this.peso = 1900;
    }
  }

  constructor(private route: ActivatedRoute) {}
}

