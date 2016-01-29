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
var router_1 = require('angular2/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var login_component_1 = require('../login/login.component');
var auth_service_1 = require("../../services/auth.service");
var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
        this.isCollapsed = true;
        this.getHeaderNav();
    }
    HeaderComponent.prototype.showModal = function (name) {
        console.log('modal ' + name + ' launched from header');
    };
    HeaderComponent.prototype.test = function () {
        console.log('test function launched');
    };
    HeaderComponent.prototype.getHeaderNav = function () {
        var _this = this;
        this.navigation = { header: { nav: [{ menu: [] }] } };
        this._authService.getMockup().subscribe(function (data) { return _this.navigation = data; }, function (error) { return console.log(error); }, function () { return console.log('api header nav ok'); });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            inputs: [],
            outputs: [],
            templateUrl: './components/header/header.component.html',
            styleUrls: [],
            providers: [auth_service_1.AuthService],
            directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.Collapse, ng2_bootstrap_1.Dropdown, ng2_bootstrap_1.Tooltip, login_component_1.LoginComponent],
            pipes: []
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSGVhZGVyQ29tcG9uZW50IiwiSGVhZGVyQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSGVhZGVyQ29tcG9uZW50LnNob3dNb2RhbCIsIkhlYWRlckNvbXBvbmVudC50ZXN0IiwiSGVhZGVyQ29tcG9uZW50LmdldEhlYWRlck5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDhCQUEwQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRXhFLGdDQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELDZCQUEwQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXhEO0lBZUlBLHlCQUFvQkEsWUFBeUJBO1FBQXpCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7UUFIN0NBLGdCQUFXQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUl4QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURELG1DQUFTQSxHQUFUQSxVQUFVQSxJQUFZQTtRQUNsQkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsR0FBR0EsdUJBQXVCQSxDQUFDQSxDQUFDQTtJQUMzREEsQ0FBQ0E7SUFFREYsOEJBQUlBLEdBQUpBO1FBQ0lHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBRURILHNDQUFZQSxHQUFaQTtRQUFBSSxpQkFPQ0E7UUFOR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsRUFBQ0EsTUFBTUEsRUFBQ0EsRUFBQ0EsR0FBR0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0EsRUFBQ0EsRUFBQ0EsQ0FBQ0E7UUFDN0NBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLFNBQVNBLENBQ3JDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxFQUF0QkEsQ0FBc0JBLEVBQzlCQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFsQkEsQ0FBa0JBLEVBQzNCQSxjQUFNQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLEVBQWhDQSxDQUFnQ0EsQ0FDdkNBLENBQUFBO0lBQ0xBLENBQUNBO0lBbENMSjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLE1BQU1BLEVBQUVBLEVBQUVBO1lBQ1ZBLE9BQU9BLEVBQUVBLEVBQUVBO1lBQ1hBLFdBQVdBLEVBQUVBLDJDQUEyQ0E7WUFDeERBLFNBQVNBLEVBQUVBLEVBQUVBO1lBQ2JBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUFXQSxDQUFDQTtZQUN4QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSx3QkFBUUEsRUFBRUEsd0JBQVFBLEVBQUVBLHVCQUFPQSxFQUFFQSxnQ0FBY0EsQ0FBQ0E7WUFDNUVBLEtBQUtBLEVBQUVBLEVBQUVBO1NBQ1pBLENBQUNBOzt3QkEwQkRBO0lBQURBLHNCQUFDQTtBQUFEQSxDQW5DQSxBQW1DQ0EsSUFBQTtBQXhCWSx1QkFBZSxrQkF3QjNCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDb2xsYXBzZSwgRHJvcGRvd24sIFRvb2x0aXB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVhZGVyJyxcclxuICAgIGlucHV0czogW10sXHJcbiAgICBvdXRwdXRzOiBbXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ29sbGFwc2UsIERyb3Bkb3duLCBUb29sdGlwLCBMb2dpbkNvbXBvbmVudF0sXHJcbiAgICBwaXBlczogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gICAgaXNDb2xsYXBzZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbmF2aWdhdGlvbjogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0SGVhZGVyTmF2KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vZGFsKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbCAnICsgbmFtZSArICcgbGF1bmNoZWQgZnJvbSBoZWFkZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IGZ1bmN0aW9uIGxhdW5jaGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVhZGVyTmF2KCkge1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IHtoZWFkZXI6e25hdjpbe21lbnU6W119XX19O1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldE1vY2t1cCgpLnN1YnNjcmliZShcclxuICAgICAgICAgIGRhdGEgPT4gdGhpcy5uYXZpZ2F0aW9uID0gZGF0YSxcclxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdhcGkgaGVhZGVyIG5hdiBvaycpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
