import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      background-color:yellow;
    }
  `]
})


export class ServerComponent {
  serverId: number = 1;
  status: string = 'offline';

  getStatus() {
    return this.status;
  }
  getColor() {
    return this.status === 'offline' ? 'red' : 'green';
  }
}
