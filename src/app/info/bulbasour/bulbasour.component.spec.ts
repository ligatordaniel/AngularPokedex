import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbasourComponent } from './bulbasour.component';

describe('BulbasourComponent', () => {
  let component: BulbasourComponent;
  let fixture: ComponentFixture<BulbasourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbasourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbasourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
