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
var header_component_1 = require('../header/header.component');
var main_component_1 = require('../main/main.component');
var footer_component_1 = require('../footer/footer.component');
var category_component_1 = require('../category/category.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, main_component_1.MainComponent, footer_component_1.FooterComponent],
            templateUrl: './components/app/app.component.html'
        }),
        router_1.RouteConfig([
            { path: '/', component: main_component_1.MainComponent, as: 'Main' },
            { path: '/category', component: category_component_1.CategoryComponent, as: 'Category' },
            { path: '/**', redirectTo: ['Main'] }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFFL0QsaUNBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsK0JBQTRCLHdCQUF3QixDQUFDLENBQUE7QUFDckQsaUNBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsbUNBQWdDLGdDQUFnQyxDQUFDLENBQUE7QUFFakU7SUFhRUE7SUFFQUMsQ0FBQ0E7SUFmSEQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsa0NBQWVBLEVBQUVBLDhCQUFhQSxFQUFFQSxrQ0FBZUEsQ0FBQ0E7WUFDaEZBLFdBQVdBLEVBQUVBLHFDQUFxQ0E7U0FFbkRBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSw4QkFBYUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDbkRBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLHNDQUFpQkEsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUEsRUFBRUE7WUFDbkVBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLFVBQVVBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBO1NBQ3RDQSxDQUFDQTs7cUJBTURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQUxZLG9CQUFZLGVBS3hCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuLi9tYWluL21haW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gJy4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtDYXRlZ29yeUNvbXBvbmVudH0gZnJvbSAnLi4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCwgTWFpbkNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sJ1xyXG4gIC8vZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQsIGFzOiAnTWFpbicgfSxcclxuICB7IHBhdGg6ICcvY2F0ZWdvcnknLCBjb21wb25lbnQ6IENhdGVnb3J5Q29tcG9uZW50LCBhczogJ0NhdGVnb3J5JyB9LFxyXG4gIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnTWFpbiddIH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
