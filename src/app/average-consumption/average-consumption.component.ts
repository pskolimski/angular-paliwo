import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-average-consumption',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './average-consumption.component.html',
  styleUrl: './average-consumption.component.scss',
})
export class AverageConsumptionComponent {
  averageForm = new FormGroup({
    distance: new FormControl(),
    fuelType: new FormControl(),
    liters: new FormControl(),
  });
  average: number = 0;
  error: string = '';

  getAverageConsumption(event: Event): void {
    event.preventDefault();

    const form = this.averageForm.value;

    if (form.distance <= 0 || form.liters <= 0 || form.fuelType === '') {
      this.error = 'Wprowadź poprawne dane!';
      return;
    }

    let price;

    switch (form.fuelType) {
      case 'Benzyna':
        price = 4.5;
        break;
      case 'Diesel':
        price = 5.5;
        break;
      case 'Gaz':
        price = 3.5;
        break;
    }

    this.average = (form.liters / form.distance) * 100;
  }
}
