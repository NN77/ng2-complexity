import {Component, Input} from 'angular2/core';

@Component({
    selector: 'category',
    templateUrl: './components/category/category.component.html',
    providers: [],
    directives: [],
    pipes: []
})

export class CategoryComponent {
    @Input() public code: string = "CSGOSKINS";

    constructor() {
      
    }
}
