import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimatedObjectComponent } from './animated-object.component';

describe('AnimatedObjectComponent', () => {
  let component: AnimatedObjectComponent;
  let fixture: ComponentFixture<AnimatedObjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnimatedObjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
