import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionariaComponent } from './concesionaria.component';

describe('ConcesionariaComponent ', () => {
  let component: ConcesionariaComponent;
  let fixture: ComponentFixture<ConcesionariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcesionariaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcesionariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
