import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    url: string;
    apiKey: string;
    format: string;

    logIn(value: Object) {
        console.log(value);
    }

    logOut() {

    }

    getMockup() {
        let url = this.url;
        return this.http.get(url)
          .map(res => res.json());
    }

    constructor(private http: Http) {
        this.url = 'http://localhost:8080/mockup.json';
        //this.apiKey = 'abcdefghijklmnop';
    }

}
