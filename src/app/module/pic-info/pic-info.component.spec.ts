import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicInfoComponent } from './pic-info.component';

describe('PicInfoComponent', () => {
  let component: PicInfoComponent;
  let fixture: ComponentFixture<PicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
