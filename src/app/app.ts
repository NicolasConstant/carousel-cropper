import { Component } from '@angular/core';
import { CropToolComponent } from './crop-tool/crop-tool';

@Component({
  imports: [CropToolComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
}
