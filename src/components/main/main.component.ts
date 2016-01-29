import {Component} from 'angular2/core';

import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'main',
    templateUrl: './components/main/main.component.html',
    providers: [],
    directives: [Alert],
    pipes: []
})

export class MainComponent {
    code: string = "CSGOSKINS";
    alerts:Array<Object> = [];

    constructor() {

    }

    addAlert() {
        this.alerts.push({msg: 'Sample error alert !!', type: 'danger', closable: true});
    }

    closeAlert(i:number) {
        this.alerts.splice(i, 1);
    }
}
