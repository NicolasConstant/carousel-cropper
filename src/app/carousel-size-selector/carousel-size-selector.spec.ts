import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselSizeSelectorComponent } from './carousel-size-selector';

describe('CarouselSizeSelectorComponent', () => {
  let fixture: ComponentFixture<CarouselSizeSelectorComponent>;
  let component: CarouselSizeSelectorComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSizeSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselSizeSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render options 1 through 5', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const options = compiled.querySelectorAll('.carousel-size__option');
    expect(options.length).toBe(5);

    const labels = Array.from(options).map((option) => option.textContent?.trim());
    expect(labels).toEqual(['1', '2', '3', '4', '5']);
  });

  it('should mark the selected option as active', async () => {
    component.selectedSize = 3;
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const options = compiled.querySelectorAll('.carousel-size__option');

    expect(options[2].classList.contains('carousel-size__option--active')).toBe(true);
    expect(options[2].getAttribute('aria-checked')).toBe('true');

    expect(options[0].classList.contains('carousel-size__option--active')).toBe(false);
    expect(options[0].getAttribute('aria-checked')).toBe('false');
  });

  it('should emit sizeChange when a new option is selected', async () => {
    const emitted: number[] = [];
    component.sizeChange.subscribe((size) => emitted.push(size));
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const options = compiled.querySelectorAll('.carousel-size__option');
    (options[2] as HTMLButtonElement).click();

    expect(emitted).toEqual([3]);
  });

  it('should not emit sizeChange when the already selected option is clicked', async () => {
    component.selectedSize = 2;
    const emitted: number[] = [];
    component.sizeChange.subscribe((size) => emitted.push(size));
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const options = compiled.querySelectorAll('.carousel-size__option');
    (options[1] as HTMLButtonElement).click();

    expect(emitted).toEqual([]);
  });
});
