import {Component} from 'angular2/core';

import {AuthService} from '../../services/auth.service';
import {EllipsisPipe} from '../../pipes/ellipsis.pipe';

@Component({
    selector: 'footer',
    //template: '<h2>Hello</h2>', // karma test
    templateUrl: './components/footer/footer.component.html',
    styleUrls: [],
    providers: [AuthService],
    directives: [],
    pipes: [EllipsisPipe]
})
export class FooterComponent {
    links: Object;

    constructor(private _authService: AuthService) {
        this.getFooterLinks();
    }

    getFooterLinks() {
        this.links = {footer:{links:[]}};
        this._authService.getMockup().subscribe(
          data => this.links = data,
          error => console.log(error),
          () => console.log('api footer links ok')
        )
    }

    showModal(name: string) {
        console.log('modal ' + name + ' launched from footer');
    }
}
