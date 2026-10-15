import { Component, ElementRef, signal, viewChild } from '@angular/core';

const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp'];
const OUTPUT_WIDTH = 1080;
const OUTPUT_HEIGHT = 1350;

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly acceptedExtensions = ACCEPTED_EXTENSIONS.join(',');
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly imageUrl = signal<string | null>(null);
  protected readonly hasImage = signal(false);

  private readonly fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');
  private readonly frame = viewChild.required<ElementRef<HTMLDivElement>>('frame');
  private readonly image = viewChild.required<ElementRef<HTMLImageElement>>('image');
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private naturalWidth = 0;
  private naturalHeight = 0;
  private displayScale = 1;
  private displayX = 0;
  private displayY = 0;
  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragStartImageX = 0;
  private dragStartImageY = 0;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.errorMessage.set(null);

    if (!file) {
      return;
    }

    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ACCEPTED_EXTENSIONS.includes(extension)) {
      this.errorMessage.set(
        `Unsupported file type. Please select one of: ${ACCEPTED_EXTENSIONS.join(', ')}`
      );
      this.resetImage();
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl.set(reader.result as string);
      this.hasImage.set(true);
    };
    reader.readAsDataURL(file);
  }

  onImageLoad(): void {
    requestAnimationFrame(() => {
      const img = this.image().nativeElement;
      this.naturalWidth = img.naturalWidth;
      this.naturalHeight = img.naturalHeight;

      const frameEl = this.frame().nativeElement;
      const frameWidth = frameEl.clientWidth;
      const frameHeight = frameEl.clientHeight;

      this.displayScale = Math.max(
        frameWidth / this.naturalWidth,
        frameHeight / this.naturalHeight
      );
      this.displayX = (frameWidth - this.naturalWidth * this.displayScale) / 2;
      this.displayY = (frameHeight - this.naturalHeight * this.displayScale) / 2;

      this.updateImageTransform();
    });
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    this.startDrag(event.clientX, event.clientY);
  }

  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    const touch = event.touches[0];
    this.startDrag(touch.clientX, touch.clientY);
  }

  private startDrag(clientX: number, clientY: number): void {
    this.isDragging = true;
    this.dragStartX = clientX;
    this.dragStartY = clientY;
    this.dragStartImageX = this.displayX;
    this.dragStartImageY = this.displayY;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }
    this.updateDrag(event.clientX, event.clientY);
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging) {
      return;
    }
    event.preventDefault();
    const touch = event.touches[0];
    this.updateDrag(touch.clientX, touch.clientY);
  }

  private updateDrag(clientX: number, clientY: number): void {
    const frameEl = this.frame().nativeElement;
    const frameWidth = frameEl.clientWidth;
    const frameHeight = frameEl.clientHeight;

    const scaledWidth = this.naturalWidth * this.displayScale;
    const scaledHeight = this.naturalHeight * this.displayScale;

    this.displayX = Math.min(
      0,
      Math.max(frameWidth - scaledWidth, this.dragStartImageX + (clientX - this.dragStartX))
    );
    this.displayY = Math.min(
      0,
      Math.max(frameHeight - scaledHeight, this.dragStartImageY + (clientY - this.dragStartY))
    );

    this.updateImageTransform();
  }

  onDragEnd(): void {
    this.isDragging = false;
  }

  private updateImageTransform(): void {
    const img = this.image().nativeElement;
    img.style.width = `${this.naturalWidth * this.displayScale}px`;
    img.style.height = `${this.naturalHeight * this.displayScale}px`;
    img.style.transform = `translate(${this.displayX}px, ${this.displayY}px)`;
  }

  downloadCrop(): void {
    if (!this.hasImage()) {
      return;
    }

    const canvas = this.canvas().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    canvas.width = OUTPUT_WIDTH;
    canvas.height = OUTPUT_HEIGHT;

    const img = this.image().nativeElement;
    const frameEl = this.frame().nativeElement;

    const sourceX = -this.displayX / this.displayScale;
    const sourceY = -this.displayY / this.displayScale;
    const sourceWidth = frameEl.clientWidth / this.displayScale;
    const sourceHeight = frameEl.clientHeight / this.displayScale;

    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      OUTPUT_WIDTH,
      OUTPUT_HEIGHT
    );

    const link = document.createElement('a');
    link.download = 'cropped-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  private resetImage(): void {
    this.imageUrl.set(null);
    this.hasImage.set(false);
    this.naturalWidth = 0;
    this.naturalHeight = 0;
  }
}
