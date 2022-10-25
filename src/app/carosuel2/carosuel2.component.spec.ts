import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosuel2Component } from './carosuel2.component';

describe('Carosuel2Component', () => {
  let component: Carosuel2Component;
  let fixture: ComponentFixture<Carosuel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carosuel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosuel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
