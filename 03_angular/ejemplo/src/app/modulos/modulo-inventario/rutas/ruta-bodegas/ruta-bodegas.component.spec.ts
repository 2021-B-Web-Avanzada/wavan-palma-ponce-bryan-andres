import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBodegasComponent } from './ruta-bodegas.component';

describe('RutaBodegasComponent', () => {
  let component: RutaBodegasComponent;
  let fixture: ComponentFixture<RutaBodegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaBodegasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBodegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
