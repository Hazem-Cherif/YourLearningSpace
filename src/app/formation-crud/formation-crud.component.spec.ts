import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCrudComponent } from './formation-crud.component';

describe('FormationCrudComponent', () => {
  let component: FormationCrudComponent;
  let fixture: ComponentFixture<FormationCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
