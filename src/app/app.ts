import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.sass',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('carousel-cropper');
}
