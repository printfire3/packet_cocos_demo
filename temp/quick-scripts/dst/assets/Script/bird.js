
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bird.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71ca3MJ30xKU7o8sdc7dJwP', 'bird');
// Script/bird.ts

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
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainScript = null;
        _this.onCollisionEnter = function (other) {
        };
        _this.onDrag = function () {
            _this.node.on(cc.Node.EventType.TOUCH_MOVE, _this.onHandleHeroMove);
        };
        _this.onHandleHeroMove = function (event) {
            var position = event.getLocation();
            var location = _this.node.parent.convertToNodeSpaceAR(position);
            _this.node.setPosition(location);
        };
        return _this;
    }
    Bird.prototype.onLoad = function () {
        this.onDrag(); //
        var manager = cc.director.getCollisionManager();
        // 开启碰撞检测
        manager.enabled = true;
        this.node.group = "bird";
    };
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "mainScript", void 0);
    Bird = __decorate([
        ccclass
    ], Bird);
    return Bird;
}(cc.Component));
exports.default = Bird;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmlyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTRCQztRQXZCRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQVUzQixzQkFBZ0IsR0FBRyxVQUFDLEtBQVU7UUFFOUIsQ0FBQyxDQUFDO1FBRUYsWUFBTSxHQUFHO1lBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQztRQUVGLHNCQUFnQixHQUFHLFVBQUMsS0FBZTtZQUMvQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakUsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDOztJQUNOLENBQUM7SUFyQmEscUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBRSxFQUFFO1FBQ2xCLElBQU0sT0FBTyxHQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNuRCxTQUFTO1FBQ1QsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO0lBQzVCLENBQUM7SUFSRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBTFYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTRCeEI7SUFBRCxXQUFDO0NBNUJELEFBNEJDLENBNUJpQyxFQUFFLENBQUMsU0FBUyxHQTRCN0M7a0JBNUJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFpblNjcmlwdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uRHJhZygpOyAgLy9cbiAgICAgICAgY29uc3QgbWFuYWdlciA9ICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIC8vIOW8gOWQr+eisOaSnuajgOa1i1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcImJpcmRcIlxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIgPSAob3RoZXI6IGFueSkgPT4ge1xuICAgICAgIFxuICAgIH07XG5cbiAgICBvbkRyYWcgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uSGFuZGxlSGVyb01vdmUpO1xuICAgIH07XG5cbiAgICBvbkhhbmRsZUhlcm9Nb3ZlID0gKGV2ZW50OiBjYy5Ub3VjaCkgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihsb2NhdGlvbik7XG4gICAgfTtcbn1cbiJdfQ==