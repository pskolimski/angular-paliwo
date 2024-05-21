import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AverageConsumptionComponent } from '../average-consumption/average-consumption.component';
import { TripCostComponent } from '../trip-cost/trip-cost.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, AverageConsumptionComponent, TripCostComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  page: string = 'average_consumption';

  setActivePage(pageName: string) {
    this.page = pageName;
  }
}
