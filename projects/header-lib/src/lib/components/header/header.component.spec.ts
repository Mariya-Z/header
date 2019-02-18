import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let spyOnClick: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.env = 'dev';
    component.role = 'NEXT - NIBR';
    component.descr = 'External Science';
    spyOnClick = spyOn(component, 'onProjectNameClick');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event by click on project name', () => {
    component.onProjectNameClick();
    expect(spyOnClick).toHaveBeenCalled();
  });

  it('should show dev environment', () => {
    const element = fixture.debugElement.query(By.css('.next-header__env'));
    expect(element.nativeElement.textContent).toContain('dev');
  });

  it('should show name', () => {
    const element = fixture.debugElement.query(By.css('.next-header__name'));
    expect(element.nativeElement.textContent).toContain('NEXT - NIBR');
  });

  it('should show descr', () => {
    const element = fixture.debugElement.query(By.css('.next-header__descr'));
    expect(element.nativeElement.textContent).toContain('External Science');
  });
});
