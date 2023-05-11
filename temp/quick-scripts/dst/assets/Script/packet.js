
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/packet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcGFja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDZDQUF3QztBQUVsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXFEQztRQWxERyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLFdBQUssR0FBRyxHQUFHLENBQUM7UUFjWixVQUFJLEdBQUc7WUFDSCxrQkFBa0I7WUFDbEIsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELGlCQUFpQjtZQUNqQixJQUFJLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSSxDQUFDLGVBQWUsRUFBQztnQkFDNUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDO2FBQzlDO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQzlCLENBQUMsQ0FBQztRQUVGLE1BQU07UUFDTixzQkFBZ0IsR0FBRyxVQUFDLEtBQVU7WUFDMUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQTtRQUVELG1CQUFhLEdBQUk7WUFDYixTQUFTO1lBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsc0JBQXNCO1lBQ3RCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUE7UUFFRCxxQkFBZSxHQUFJO1lBQ2YsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUE7O0lBUUwsQ0FBQztJQTVDRyx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBNEJELHVCQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBakREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ2M7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDYTtJQUxuQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcUQxQjtJQUFELGFBQUM7Q0FyREQsQUFxREMsQ0FyRG1DLEVBQUUsQ0FBQyxTQUFTLEdBcUQvQztrQkFyRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFBhY2tldEdyb3VwIGZyb20gXCIuL3BhY2tldEdyb3VwXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFja2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBpbml0U3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGV4cGxvc2lvblNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgc3BlZWQgPSAxNTA7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIOaJvuWIsG5vZGXnmoRTcHJpdGXnu4Tku7ZcbiAgICAgICAgbGV0IG5TcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIC8vIOWIneWni+WMlnNwcml0ZUZyYW1lXG4gICAgICAgIGlmIChuU3ByaXRlLnNwcml0ZUZyYW1lICE9IHRoaXMuaW5pdFNwcml0ZUZyYW1lKXtcbiAgICAgICAgICAgIG5TcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmluaXRTcHJpdGVGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcInBhY2tldFwiXG4gICAgfTtcblxuICAgIC8v56Kw5pKe5qOA5rWLXG4gICAgb25Db2xsaXNpb25FbnRlciA9IChvdGhlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZXhwbG9kaW5nQW5pbSgpO1xuICAgIH1cblxuICAgIGV4cGxvZGluZ0FuaW0gPSAgKCkgPT4ge1xuICAgICAgICAvLyDmkq3mlL7niIbngrjpn7PmlYhcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmV4cGxvc2lvblNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgIC8vdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vbkhhbmRsZURlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkhhbmRsZURlc3Ryb3kgPSAgKCk9PiB7ICBcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoUGFja2V0R3JvdXApLnJlY3ljbGVOb2RlKHRoaXMubm9kZSwgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0Om51bWJlcikge1xuICAgICAgICB0aGlzLm5vZGUueSAtPSBkdCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIGlmKHRoaXMubm9kZS55IDwgLXRoaXMubm9kZS5wYXJlbnQuaGVpZ2h0IC8gMiAtIHRoaXMubm9kZS5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChQYWNrZXRHcm91cCkucmVjeWNsZU5vZGUoIHRoaXMubm9kZSwxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==