import {Component, OnInit, AfterContentInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';

import {LoginValidator} from './login.validators';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './components/login/login.component.html',
    styleUrls: [],
    providers: [AuthService],
    directives: [FORM_DIRECTIVES],
    pipes: []
})
export class LoginComponent implements OnInit, AfterContentInit {
    users: string;
    loginForm: ControlGroup;
    email: Control;
    password: Control;
    register: boolean = false;

    logIn() {
        this._authService.logIn(JSON.stringify(this.loginForm.value));
    }

    constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {
        this.email = new Control(
            "", Validators.compose([Validators.required, LoginValidator.startsWithNumber])
        );

        this.password = new Control(
            "", Validators.compose([Validators.required, Validators.minLength(8)])
        );

        this.loginForm = _formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    ngOnInit() {

    }

    ngAfterContentInit() {

    }

    getUsers() {
        this._authService.getMockup().subscribe(
          data => this.users = JSON.stringify(data),
          error => alert(error),
          () => console.log(this.users)
        )
    }
}
