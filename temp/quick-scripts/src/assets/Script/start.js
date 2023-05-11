"use strict";
cc._RF.push(module, '5f44dO01LBO4oYiODtN55OI', 'start');
// Script/start.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.buttonSound = null;
        _this.animation = null;
        return _this;
    }
    Start.prototype.onLoad = function () {
        this.animation.play();
    };
    Start.prototype.start = function () {
    };
    // update (dt) {}
    Start.prototype.startGame = function () {
        cc.audioEngine.play(this.buttonSound, false, 1);
        // 转场
        cc.director.loadScene("Game");
    };
    __decorate([
        property(cc.Button)
    ], Start.prototype, "startButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Start.prototype, "buttonSound", void 0);
    __decorate([
        property(cc.Animation)
    ], Start.prototype, "animation", void 0);
    Start = __decorate([
        ccclass
    ], Start);
    return Start;
}(cc.Component));
exports.default = Start;

cc._RF.pop();