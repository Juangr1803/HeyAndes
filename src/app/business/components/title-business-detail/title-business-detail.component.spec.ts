import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBusinessDetailComponent } from './title-business-detail.component';

describe('TitleBusinessDetailComponent', () => {
  let component: TitleBusinessDetailComponent;
  let fixture: ComponentFixture<TitleBusinessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBusinessDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBusinessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
