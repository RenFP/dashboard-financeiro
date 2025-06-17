import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGastos } from './interface/igastos';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'tabela-gastos',
  imports: [RouterOutlet, MatTableModule, MatIconModule],
  templateUrl: './tabela-gastos.component.html',
  styleUrl: './tabela-gastos.component.css',
})
export class TabelaGastos {
  title = 'Dashboard';
  gastos: IGastos[] = [
    {
      nome: 'Supermercado',
      categoria: 'Alimentação',
      data: '2025-06-15',
      valor: 250.75,
      formaPagamento: 'Cartão de crédito',
    },
    {
      nome: 'Gasolina',
      categoria: 'Transporte',
      data: '2025-06-14',
      valor: 180.0,
      formaPagamento: 'Débito',
    },
    {
      nome: 'Netflix',
      categoria: 'Entretenimento',
      data: '2025-06-01',
      valor: 39.9,
      formaPagamento: 'Cartão de crédito',
    },
    {
      nome: 'Consulta médica',
      categoria: 'Saúde',
      data: '2025-06-10',
      valor: 300.0,
      formaPagamento: 'Dinheiro',
    },
    {
      nome: 'Café',
      categoria: 'Alimentação',
      data: '2025-06-17',
      valor: 12.5,
      formaPagamento: 'PIX',
    },
  ];

  displayedColumns = ['nome', 'categoria', 'data', 'valor', 'forma-pagamento'];
  dataSource = this.gastos;

  pegarTotal(): number {
    return this.gastos.reduce((soma, item) => {
      return soma + item.valor;
    }, 0);
  }
}
