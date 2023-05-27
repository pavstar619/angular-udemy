import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})


export class ServerComponent {
  serverId: number = 1;
  status: string = 'offline';

  getStatus(){
    return this.status;
  }
}
