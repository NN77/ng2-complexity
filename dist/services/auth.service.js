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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/mockup.json';
    }
    AuthService.prototype.logIn = function (value) {
        console.log(value);
    };
    AuthService.prototype.logOut = function () {
    };
    AuthService.prototype.getMockup = function () {
        var url = this.url;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsIkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXV0aFNlcnZpY2UubG9nSW4iLCJBdXRoU2VydmljZS5sb2dPdXQiLCJBdXRoU2VydmljZS5nZXRNb2NrdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBRS9CO0lBb0JJQSxxQkFBb0JBLElBQVVBO1FBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQzFCQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxtQ0FBbUNBLENBQUNBO0lBRW5EQSxDQUFDQTtJQWpCREQsMkJBQUtBLEdBQUxBLFVBQU1BLEtBQWFBO1FBQ2ZFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERiw0QkFBTUEsR0FBTkE7SUFFQUcsQ0FBQ0E7SUFFREgsK0JBQVNBLEdBQVRBO1FBQ0lJLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBO1FBQ25CQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQTthQUN0QkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBbEJMSjtRQUFDQSxpQkFBVUEsRUFBRUE7O29CQXlCWkE7SUFBREEsa0JBQUNBO0FBQURBLENBekJBLEFBeUJDQSxJQUFBO0FBeEJZLG1CQUFXLGNBd0J2QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGFwaUtleTogc3RyaW5nO1xyXG4gICAgZm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gICAgbG9nSW4odmFsdWU6IE9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vY2t1cCgpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy51cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL21vY2t1cC5qc29uJztcclxuICAgICAgICAvL3RoaXMuYXBpS2V5ID0gJ2FiY2RlZmdoaWprbG1ub3AnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
