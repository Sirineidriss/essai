import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEtuComponent } from './classe-etu.component';

describe('ClasseEtuComponent', () => {
  let component: ClasseEtuComponent;
  let fixture: ComponentFixture<ClasseEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseEtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
