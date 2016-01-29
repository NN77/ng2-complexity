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
var EllipsisPipe = (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (val, args) {
        if (args[0] === -1) {
            return val;
        }
        if (val.length > args[0]) {
            return val.substring(0, args[0]) + '...';
        }
        else {
            return val;
        }
    };
    EllipsisPipe = __decorate([
        core_1.Pipe({
            name: 'ellipsis'
        }), 
        __metadata('design:paramtypes', [])
    ], EllipsisPipe);
    return EllipsisPipe;
})();
exports.EllipsisPipe = EllipsisPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2VsbGlwc2lzLnBpcGUudHMiXSwibmFtZXMiOlsiRWxsaXBzaXNQaXBlIiwiRWxsaXBzaXNQaXBlLmNvbnN0cnVjdG9yIiwiRWxsaXBzaXNQaXBlLnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBRW5DO0lBQUFBO0lBZUFDLENBQUNBO0lBWENELGdDQUFTQSxHQUFUQSxVQUFVQSxHQUFHQSxFQUFFQSxJQUFJQTtRQUNqQkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2JBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUMzQ0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDYkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFkSEY7UUFBQ0EsV0FBSUEsQ0FBQ0E7WUFDSkEsSUFBSUEsRUFBRUEsVUFBVUE7U0FDakJBLENBQUNBOztxQkFhREE7SUFBREEsbUJBQUNBO0FBQURBLENBZkEsQUFlQ0EsSUFBQTtBQVpZLG9CQUFZLGVBWXhCLENBQUEiLCJmaWxlIjoicGlwZXMvZWxsaXBzaXMucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2VsbGlwc2lzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNQaXBlIHtcclxuICB0cmFuc2Zvcm0odmFsLCBhcmdzKSB7XHJcbiAgICBpZiAoYXJnc1swXSA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsLmxlbmd0aCA+IGFyZ3NbMF0pIHtcclxuICAgICAgcmV0dXJuIHZhbC5zdWJzdHJpbmcoMCwgYXJnc1swXSkgKyAnLi4uJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
