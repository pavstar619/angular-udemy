import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedText = 'Server not created';
  serverName = '';
  serverCreatedStatus = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onClickAddServer() {
    this.serverCreatedStatus = true;
    this.serverCreatedText = "Server was created at " + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

}
