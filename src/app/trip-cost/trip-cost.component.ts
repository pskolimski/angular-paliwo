import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-cost',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './trip-cost.component.html',
  styleUrl: './trip-cost.component.scss',
})
export class TripCostComponent {
  costForm = new FormGroup({
    distance: new FormControl(),
    fuelType: new FormControl('Benzyna'),
    averageConsumption: new FormControl(),
  });
  cost: number = 0;
  litersNeeded: number = 0;
  error: string = '';

  getTripCost(event: Event): void {
    event.preventDefault();

    const form = this.costForm.value;

    if (
      form.distance <= 0 ||
      form.averageConsumption <= 0 ||
      form.fuelType === ''
    ) {
      this.error = 'Wprowadź poprawne dane!';
      return;
    }

    let price = 0;

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
    this.litersNeeded = (form.distance * form.averageConsumption) / 100;
    this.cost = ((form.distance * form.averageConsumption) / 100) * price;
  }
}
