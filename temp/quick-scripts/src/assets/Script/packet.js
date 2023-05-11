"use strict";
cc._RF.push(module, '3932eZz6LZDRJGQx9ePHiXb', 'packet');
// Script/packet.ts

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
var Packet = /** @class */ (function (_super) {
    __extends(Packet, _super);
    function Packet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initSpriteFrame = null;
        _this.explosionSound = null;
        _this.speed = 150;
        _this.init = function () {
            // 找到node的Sprite组件
            var nSprite = _this.node.getComponent(cc.Sprite);
            // 初始化spriteFrame
            if (nSprite.spriteFrame != _this.initSpriteFrame) {
                nSprite.spriteFrame = _this.initSpriteFrame;
            }
            _this.node.group = "packet";
        };
        //碰撞检测
        _this.onCollisionEnter = function (other) {
            _this.explodingAnim();
        };
        _this.explodingAnim = function () {
            // 播放爆炸音效
            cc.audioEngine.play(_this.explosionSound, false, 1);
            //this.node.destroy();
            _this.onHandleDestroy();
        };
        _this.onHandleDestroy = function () {
            _this.node.parent.getComponent(packetGroup_1.default).recycleNode(_this.node, 1);
        };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Packet.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.init();
    };
    Packet.prototype.start = function () {
    };
    Packet.prototype.update = function (dt) {
        this.node.y -= dt * this.speed;
        if (this.node.y < -this.node.parent.height / 2 - this.node.height / 2) {
            this.node.parent.getComponent(packetGroup_1.default).recycleNode(this.node, 1);
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Packet.prototype, "initSpriteFrame", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Packet.prototype, "explosionSound", void 0);
    Packet = __decorate([
        ccclass
    ], Packet);
    return Packet;
}(cc.Component));
exports.default = Packet;

cc._RF.pop();