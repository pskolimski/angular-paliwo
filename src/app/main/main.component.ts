import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  page: string = 'average_consumption';

  setActivePage(pageName: string) {
    this.page = pageName;
  }
}
