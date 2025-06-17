import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaGastos } from './tabela-gastos/tabela-gastos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabelaGastos],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dashboard Financeiro';
}
