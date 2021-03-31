import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {
  lowerName = 'juan';
  upperName = 'JUAN';
  fullName = 'JuanSeCu';
  date = new Date();
}
