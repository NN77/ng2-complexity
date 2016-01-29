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
var auth_service_1 = require('../../services/auth.service');
var ellipsis_pipe_1 = require('../../pipes/ellipsis.pipe');
var FooterComponent = (function () {
    function FooterComponent(_authService) {
        this._authService = _authService;
        this.getFooterLinks();
    }
    FooterComponent.prototype.getFooterLinks = function () {
        var _this = this;
        this.links = { footer: { links: [] } };
        this._authService.getMockup().subscribe(function (data) { return _this.links = data; }, function (error) { return console.log(error); }, function () { return console.log('api footer links ok'); });
    };
    FooterComponent.prototype.showModal = function (name) {
        console.log('modal ' + name + ' launched from footer');
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer',
            templateUrl: './components/footer/footer.component.html',
            styleUrls: [],
            providers: [auth_service_1.AuthService],
            directives: [],
            pipes: [ellipsis_pipe_1.EllipsisPipe]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], FooterComponent);
    return FooterComponent;
})();
exports.FooterComponent = FooterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRm9vdGVyQ29tcG9uZW50IiwiRm9vdGVyQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiRm9vdGVyQ29tcG9uZW50LmdldEZvb3RlckxpbmtzIiwiRm9vdGVyQ29tcG9uZW50LnNob3dNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDZCQUEwQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3hELDhCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXZEO0lBWUlBLHlCQUFvQkEsWUFBeUJBO1FBQXpCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7UUFDekNBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO0lBQzFCQSxDQUFDQTtJQUVERCx3Q0FBY0EsR0FBZEE7UUFBQUUsaUJBT0NBO1FBTkdBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUNBLE1BQU1BLEVBQUNBLEVBQUNBLEtBQUtBLEVBQUNBLEVBQUVBLEVBQUNBLEVBQUNBLENBQUNBO1FBQ2pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUNyQ0EsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsRUFBakJBLENBQWlCQSxFQUN6QkEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBbEJBLENBQWtCQSxFQUMzQkEsY0FBTUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxFQUFsQ0EsQ0FBa0NBLENBQ3pDQSxDQUFBQTtJQUNMQSxDQUFDQTtJQUVERixtQ0FBU0EsR0FBVEEsVUFBVUEsSUFBWUE7UUFDbEJHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLEdBQUdBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0E7SUFDM0RBLENBQUNBO0lBM0JMSDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFFbEJBLFdBQVdBLEVBQUVBLDJDQUEyQ0E7WUFDeERBLFNBQVNBLEVBQUVBLEVBQUVBO1lBQ2JBLFNBQVNBLEVBQUVBLENBQUNBLDBCQUFXQSxDQUFDQTtZQUN4QkEsVUFBVUEsRUFBRUEsRUFBRUE7WUFDZEEsS0FBS0EsRUFBRUEsQ0FBQ0EsNEJBQVlBLENBQUNBO1NBQ3hCQSxDQUFDQTs7d0JBb0JEQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0E1QkEsQUE0QkNBLElBQUE7QUFuQlksdUJBQWUsa0JBbUIzQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQge0VsbGlwc2lzUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvZWxsaXBzaXMucGlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm9vdGVyJyxcclxuICAgIC8vdGVtcGxhdGU6ICc8aDI+SGVsbG88L2gyPicsIC8vIGthcm1hIHRlc3RcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtdLFxyXG4gICAgcGlwZXM6IFtFbGxpcHNpc1BpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xyXG4gICAgbGlua3M6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmdldEZvb3RlckxpbmtzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9vdGVyTGlua3MoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rcyA9IHtmb290ZXI6e2xpbmtzOltdfX07XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0TW9ja3VwKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgZGF0YSA9PiB0aGlzLmxpbmtzID0gZGF0YSxcclxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdhcGkgZm9vdGVyIGxpbmtzIG9rJylcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vZGFsKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbCAnICsgbmFtZSArICcgbGF1bmNoZWQgZnJvbSBmb290ZXInKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
