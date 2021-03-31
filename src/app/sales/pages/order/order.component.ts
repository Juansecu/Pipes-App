import { Component } from '@angular/core';

import { Hero, Color } from './../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  upperCase = false;
  orderBy = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Flash',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green,
    },
    {
      name: 'Mujer Maravilla',
      fly: false,
      color: Color.yellow,
    },
  ];

  changeCase(): void {
    this.upperCase = !this.upperCase;
  }

  changeOrder(value: string): void {
    this.orderBy = value;
  }
}
