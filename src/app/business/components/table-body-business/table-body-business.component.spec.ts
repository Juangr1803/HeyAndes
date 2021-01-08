import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyBusinessComponent } from './table-body-business.component';

describe('TableBodyBusinessComponent', () => {
  let component: TableBodyBusinessComponent;
  let fixture: ComponentFixture<TableBodyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBodyBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBodyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
