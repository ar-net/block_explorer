import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HashrateComponent } from './hashrate.component';

describe('HashrateComponent', () => {
  let component: HashrateComponent;
  let fixture: ComponentFixture<HashrateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HashrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
