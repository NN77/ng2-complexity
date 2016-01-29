import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Collapse, Dropdown, Tooltip} from 'ng2-bootstrap/ng2-bootstrap';

import {LoginComponent} from '../login/login.component';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'header',
    inputs: [],
    outputs: [],
    templateUrl: './components/header/header.component.html',
    styleUrls: [],
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES, Collapse, Dropdown, Tooltip, LoginComponent],
    pipes: []
})

export class HeaderComponent {
    isCollapsed: boolean = true;
    navigation: Object;

    constructor(private _authService: AuthService) {
        this.getHeaderNav();
    }

    showModal(name: string) {
        console.log('modal ' + name + ' launched from header');
    }

    test(): void {
        console.log('test function launched');
    }

    getHeaderNav() {
        this.navigation = {header:{nav:[{menu:[]}]}};
        this._authService.getMockup().subscribe(
          data => this.navigation = data,
          error => console.log(error),
          () => console.log('api header nav ok')
        )
    }
}
