import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [],
})
export class NoCommonComponent {
  // i18nSelectPipe:
  name = 'Isabella';
  gender = 'female';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    other: 'invitarl@',
  };

  // i18nPluralPipe:
  clients = ['Maria', 'Pedro', 'Sara', 'Isis'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  // KeyValuePipe:
  person = {
    name: 'Juan',
    age: 35,
    address: 'Ottawa, Canadá',
  };

  // JsonPipe:
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    {
      name: 'Aquaman',
      fly: false,
    },
  ];

  // AsyncPipe:
  myObservable = interval(1000);
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data de la promesa');
    }, 3000);
  });

  changeClient(): void {
    this.name = 'Juan';
    this.gender = 'male';
  }

  dropClient(): void {
    this.clients.shift();
  }
}
