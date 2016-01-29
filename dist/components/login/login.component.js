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
var common_1 = require('angular2/common');
var login_validators_1 = require('./login.validators');
var auth_service_1 = require('../../services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(_formBuilder, _authService) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this.register = false;
        this.email = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, login_validators_1.LoginValidator.startsWithNumber]));
        this.password = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(8)]));
        this.loginForm = _formBuilder.group({
            email: this.email,
            password: this.password
        });
    }
    LoginComponent.prototype.logIn = function () {
        this._authService.logIn(JSON.stringify(this.loginForm.value));
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterContentInit = function () {
    };
    LoginComponent.prototype.getUsers = function () {
        var _this = this;
        this._authService.getMockup().subscribe(function (data) { return _this.users = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log(_this.users); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './components/login/login.component.html',
            styleUrls: [],
            providers: [auth_service_1.AuthService],
            directives: [common_1.FORM_DIRECTIVES],
            pipes: []
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50IiwiTG9naW5Db21wb25lbnQuY29uc3RydWN0b3IiLCJMb2dpbkNvbXBvbmVudC5sb2dJbiIsIkxvZ2luQ29tcG9uZW50Lm5nT25Jbml0IiwiTG9naW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0IiwiTG9naW5Db21wb25lbnQuZ2V0VXNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFrRCxlQUFlLENBQUMsQ0FBQTtBQUNsRSx1QkFBOEUsaUJBQWlCLENBQUMsQ0FBQTtBQUVoRyxpQ0FBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCw2QkFBMEIsNkJBQTZCLENBQUMsQ0FBQTtBQUV4RDtJQW1CSUEsd0JBQW9CQSxZQUF5QkEsRUFBVUEsWUFBeUJBO1FBQTVEQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7UUFBVUEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBTmhGQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtRQU90QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsZ0JBQU9BLENBQ3BCQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsbUJBQVVBLENBQUNBLFFBQVFBLEVBQUVBLGlDQUFjQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQ2pGQSxDQUFDQTtRQUVGQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxnQkFBT0EsQ0FDdkJBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUEsbUJBQVVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQ3pFQSxDQUFDQTtRQUVGQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUNoQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0E7WUFDakJBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLFFBQVFBO1NBQzFCQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQWpCREQsOEJBQUtBLEdBQUxBO1FBQ0lFLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO0lBQ2xFQSxDQUFDQTtJQWlCREYsaUNBQVFBLEdBQVJBO0lBRUFHLENBQUNBO0lBRURILDJDQUFrQkEsR0FBbEJBO0lBRUFJLENBQUNBO0lBRURKLGlDQUFRQSxHQUFSQTtRQUFBSyxpQkFNQ0E7UUFMR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FDckNBLFVBQUFBLElBQUlBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEVBQWpDQSxDQUFpQ0EsRUFDekNBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLEVBQVpBLENBQVlBLEVBQ3JCQSxjQUFNQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUF2QkEsQ0FBdUJBLENBQzlCQSxDQUFBQTtJQUNMQSxDQUFDQTtJQWhETEw7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO1lBQ2pCQSxXQUFXQSxFQUFFQSx5Q0FBeUNBO1lBQ3REQSxTQUFTQSxFQUFFQSxFQUFFQTtZQUNiQSxTQUFTQSxFQUFFQSxDQUFDQSwwQkFBV0EsQ0FBQ0E7WUFDeEJBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxDQUFDQTtZQUM3QkEsS0FBS0EsRUFBRUEsRUFBRUE7U0FDWkEsQ0FBQ0E7O3VCQTBDREE7SUFBREEscUJBQUNBO0FBQURBLENBakRBLEFBaURDQSxJQUFBO0FBekNZLHNCQUFjLGlCQXlDMUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7TG9naW5WYWxpZGF0b3J9IGZyb20gJy4vbG9naW4udmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcGlwZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICB1c2Vyczogc3RyaW5nO1xyXG4gICAgbG9naW5Gb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBlbWFpbDogQ29udHJvbDtcclxuICAgIHBhc3N3b3JkOiBDb250cm9sO1xyXG4gICAgcmVnaXN0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBsb2dJbigpIHtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dJbihKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRm9ybS52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IG5ldyBDb250cm9sKFxyXG4gICAgICAgICAgICBcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIExvZ2luVmFsaWRhdG9yLnN0YXJ0c1dpdGhOdW1iZXJdKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBuZXcgQ29udHJvbChcclxuICAgICAgICAgICAgXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBfZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VycygpIHtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRNb2NrdXAoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICBkYXRhID0+IHRoaXMudXNlcnMgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMudXNlcnMpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
