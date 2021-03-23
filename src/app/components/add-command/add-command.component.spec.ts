import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommandComponent } from './add-command.component';

describe('AddCommandComponent', () => {
  let component: AddCommandComponent;
  let fixture: ComponentFixture<AddCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
