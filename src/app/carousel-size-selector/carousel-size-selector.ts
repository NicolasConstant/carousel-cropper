import { Component, EventEmitter, Input, Output } from '@angular/core';

const MIN_CAROUSEL_SIZE = 1;
const MAX_CAROUSEL_SIZE = 5;

@Component({
  imports: [],
  selector: 'app-carousel-size-selector',
  styleUrl: './carousel-size-selector.scss',
  templateUrl: './carousel-size-selector.html',
})
export class CarouselSizeSelectorComponent {
  @Input() selectedSize = MIN_CAROUSEL_SIZE;
  @Output() readonly sizeChange = new EventEmitter<number>();

  protected readonly carouselSizes = Array.from(
    { length: MAX_CAROUSEL_SIZE - MIN_CAROUSEL_SIZE + 1 },
    (_, i) => i + MIN_CAROUSEL_SIZE
  );

  selectSize(size: number): void {
    if (size < MIN_CAROUSEL_SIZE || size > MAX_CAROUSEL_SIZE || size === this.selectedSize) {
      return;
    }

    this.sizeChange.emit(size);
  }
}
