var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var MainComponent = (function () {
    function MainComponent() {
        this.code = "CSGOSKINS";
        this.alerts = [];
    }
    MainComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Sample error alert !!', type: 'danger', closable: true });
    };
    MainComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main',
            templateUrl: './components/main/main.component.html',
            providers: [],
            directives: [ng2_bootstrap_1.Alert],
            pipes: []
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
})();
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50IiwiTWFpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk1haW5Db21wb25lbnQuYWRkQWxlcnQiLCJNYWluQ29tcG9uZW50LmNsb3NlQWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyw4QkFBb0IsNkJBQTZCLENBQUMsQ0FBQTtBQUVsRDtJQVlJQTtRQUhBQyxTQUFJQSxHQUFXQSxXQUFXQSxDQUFDQTtRQUMzQkEsV0FBTUEsR0FBaUJBLEVBQUVBLENBQUNBO0lBSTFCQSxDQUFDQTtJQUVERCxnQ0FBUUEsR0FBUkE7UUFDSUUsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBQ0EsR0FBR0EsRUFBRUEsdUJBQXVCQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtJQUNyRkEsQ0FBQ0E7SUFFREYsa0NBQVVBLEdBQVZBLFVBQVdBLENBQVFBO1FBQ2ZHLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQzdCQSxDQUFDQTtJQXRCTEg7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO1lBQ3BEQSxTQUFTQSxFQUFFQSxFQUFFQTtZQUNiQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBS0EsQ0FBQ0E7WUFDbkJBLEtBQUtBLEVBQUVBLEVBQUVBO1NBQ1pBLENBQUNBOztzQkFpQkRBO0lBQURBLG9CQUFDQTtBQUFEQSxDQXZCQSxBQXVCQ0EsSUFBQTtBQWZZLHFCQUFhLGdCQWV6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7QWxlcnR9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtBbGVydF0sXHJcbiAgICBwaXBlczogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuICAgIGNvZGU6IHN0cmluZyA9IFwiQ1NHT1NLSU5TXCI7XHJcbiAgICBhbGVydHM6QXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbGVydCgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKHttc2c6ICdTYW1wbGUgZXJyb3IgYWxlcnQgISEnLCB0eXBlOiAnZGFuZ2VyJywgY2xvc2FibGU6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFsZXJ0KGk6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydHMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
