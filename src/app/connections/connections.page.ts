import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  public connections: any = [];
  public currentConnection: any = null;

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
  public selectConnection = (connection: any) => {
    this.authService.setConnection(connection);
  }
}
