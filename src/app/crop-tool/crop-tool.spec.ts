import { TestBed } from '@angular/core/testing';
import { CropToolComponent } from './crop-tool';

describe('CropToolComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropToolComponent],
    }).compileComponents();
  });

  it('should create the crop tool', () => {
    const fixture = TestBed.createComponent(CropToolComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the upload zone when no image is loaded', async () => {
    const fixture = TestBed.createComponent(CropToolComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.upload-zone')).toBeTruthy();
    expect(compiled.querySelector('.upload-zone__label')?.textContent).toContain('Click to upload an image');
  });

  it('should not render the crop frame until an image is loaded', async () => {
    const fixture = TestBed.createComponent(CropToolComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.crop-frame')).toBeFalsy();
  });
});
