import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        CoreModule,
        ApiModule,
        ComponentsModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call loadData on ngOnInit', () => {
    spyOn(component, 'loadData');
    component.ngOnInit();
    expect(component.loadData).toHaveBeenCalled();
  });
});
