import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarosuelComponent } from './banner-carosuel.component';

describe('BannerCarosuelComponent', () => {
  let component: BannerCarosuelComponent;
  let fixture: ComponentFixture<BannerCarosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCarosuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
