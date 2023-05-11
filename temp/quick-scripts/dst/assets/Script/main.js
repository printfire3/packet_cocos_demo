
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7ed2c4iA9B8KBl0cBDOG/x', 'main');
// Script/main.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var packetGroup_1 = require("./packetGroup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreDisplay = null;
        _this.packetGroup = null;
        _this.packetPrefab = null;
        _this.score = 0;
        _this.changeScore = function (score) {
            _this.score += score;
            _this.scoreDisplay.string = String(_this.score);
        };
        return _this;
    }
    Main.prototype.onLoad = function () {
        this.packetGroup.getComponent(packetGroup_1.default).startAction();
        //this.genNewPacket2();
    };
    __decorate([
        property(cc.Label)
    ], Main.prototype, "scoreDisplay", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "packetGroup", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "packetPrefab", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFvQkM7UUFqQkcsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFDL0IsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQU9ULGlCQUFXLEdBQUcsVUFBQyxLQUFZO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFBOztJQUVMLENBQUM7SUFWRyxxQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELHVCQUF1QjtJQUMzQixDQUFDO0lBVkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1c7SUFQZCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0J4QjtJQUFELFdBQUM7Q0FwQkQsQUFvQkMsQ0FwQmlDLEVBQUUsQ0FBQyxTQUFTLEdBb0I3QztrQkFwQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFBhY2tldCBmcm9tIFwiLi9wYWNrZXRcIjtcbmltcG9ydCBQYWNrZXRHcm91cCBmcm9tIFwiLi9wYWNrZXRHcm91cFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHNjb3JlRGlzcGxheTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhY2tldEdyb3VwOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBhY2tldFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBzY29yZSA9IDAgXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucGFja2V0R3JvdXAuZ2V0Q29tcG9uZW50KFBhY2tldEdyb3VwKS5zdGFydEFjdGlvbigpO1xuICAgICAgICAvL3RoaXMuZ2VuTmV3UGFja2V0MigpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjb3JlID0gKHNjb3JlOm51bWJlcikgID0+e1xuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSBTdHJpbmcodGhpcy5zY29yZSk7XG4gICAgfVxuICAgXG59XG4iXX0=