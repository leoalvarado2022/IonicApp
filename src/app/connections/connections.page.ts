import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user/user.service';
import {AuthService} from '../services/auth/auth.service';
import {Connection} from '@primetec/primetec-angular';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  public connections: Connection[] = [];
  public currentConnection: Connection = null;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.loadConnections();
  }

  /**
   * loadConnections
   */
  private loadConnections = async () => {
    const user = await this.userService.getUserData();
    this.currentConnection = await this.authService.getConnection();
    this.connections = user.connections;
  }

  /**
   * selectConnection
   * @param connection
   */
  public selectConnection = (connection: Connection) => {
    this.authService.setConnection(connection);
  }

}
