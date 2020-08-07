import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SylholaComponent } from './sylhola.component';

describe('SylholaComponent', () => {
  let component: SylholaComponent;
  let fixture: ComponentFixture<SylholaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SylholaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SylholaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
