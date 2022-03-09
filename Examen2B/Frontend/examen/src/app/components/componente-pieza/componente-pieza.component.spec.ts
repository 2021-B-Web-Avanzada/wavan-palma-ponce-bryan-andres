import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePiezaComponent } from './componente-pieza.component';

describe('ComponentePiezaComponent', () => {
  let component: ComponentePiezaComponent;
  let fixture: ComponentFixture<ComponentePiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePiezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
