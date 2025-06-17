import { TestBed } from '@angular/core/testing';
import { TabelaGastos } from './tabela-gastos.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaGastos],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TabelaGastos);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dashboard' title`, () => {
    const fixture = TestBed.createComponent(TabelaGastos);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dashboard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TabelaGastos);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, dashboard'
    );
  });
});
