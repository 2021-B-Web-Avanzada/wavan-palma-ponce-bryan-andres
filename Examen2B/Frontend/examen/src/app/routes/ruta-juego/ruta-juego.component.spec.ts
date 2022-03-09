import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaJuegoComponent } from './ruta-juego.component';

describe('RutaJuegoComponent', () => {
  let component: RutaJuegoComponent;
  let fixture: ComponentFixture<RutaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
