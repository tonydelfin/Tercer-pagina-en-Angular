import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesFooterComponent } from './paises-footer.component';

describe('PaisesFooterComponent', () => {
  let component: PaisesFooterComponent;
  let fixture: ComponentFixture<PaisesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
