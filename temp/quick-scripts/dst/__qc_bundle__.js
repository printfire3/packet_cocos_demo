
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/bird');
require('./assets/Script/main');
require('./assets/Script/packet');
require('./assets/Script/packetGroup');
require('./assets/Script/start');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/packetGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0baa1WoaEFDaZNAGgUjaLhw', 'packetGroup');
// Script/packetGroup.ts

"use strict";
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
var packet_1 = require("./packet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PacketGroup = /** @class */ (function (_super) {
    __extends(PacketGroup, _super);
    function PacketGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.packetPrefab = null;
        _this.mainNode = null;
        _this.nodePool = new cc.NodePool();
        _this.poolSize = 50;
        _this.initNodePool = function () {
            for (var i = 0; i < _this.poolSize; i++) {
                var node = cc.instantiate(_this.packetPrefab);
                _this.nodePool.put(node);
            }
        };
        // 红包出没
        _this.startAction = function () {
            _this.schedule(function () {
                _this.genNewPacket();
            }, 0.5);
        };
        // 生成红包
        _this.genNewPacket = function () {
            var node = _this.nodePool.size() > 0
                ? _this.nodePool.get()
                : cc.instantiate(_this.packetPrefab);
            var pos = _this.getNewPacketPosition(node);
            node.setPosition(pos);
            node.parent = _this.node;
            node.getComponent(packet_1.default).init();
        };
        //红包随机生成的位置
        _this.getNewPacketPosition = function (newPacket) {
            var randx = (Math.random() * 2 - 1) *
                (_this.node.parent.width / 2 - newPacket.width / 2);
            var randy = _this.node.parent.height / 2 + newPacket.height / 2;
            return cc.v2(randx, randy);
        };
        // 回收相关的节点
        _this.recycleNode = function (packet, score) {
            _this.nodePool.put(packet);
            score && _this.mainNode.getComponent("main").changeScore(1);
        };
        return _this;
    }
    PacketGroup.prototype.onLoad = function () {
        this.initNodePool();
    };
    __decorate([
        property(cc.Prefab)
    ], PacketGroup.prototype, "packetPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PacketGroup.prototype, "mainNode", void 0);
    PacketGroup = __decorate([
        ccclass
    ], PacketGroup);
    return PacketGroup;
}(cc.Component));
exports.default = PacketGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcGFja2V0R3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQ3hCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBc0RDO1FBcERDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFNZCxrQkFBWSxHQUFHO1lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQztRQUVKLE9BQU87UUFDUCxpQkFBVyxHQUFHO1lBQ1YsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDO1FBRUYsT0FBTztRQUNQLGtCQUFZLEdBQUc7WUFDYixJQUFNLElBQUksR0FDUixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQU0sR0FBRyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFFRixXQUFXO1FBQ1gsMEJBQW9CLEdBQUcsVUFBQyxTQUFrQjtZQUN4QyxJQUFJLEtBQUssR0FDUCxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBR0YsVUFBVTtRQUNWLGlCQUFXLEdBQUcsVUFBQyxNQUFlLEVBQUUsS0FBYztZQUM1QyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQzs7SUFFSixDQUFDO0lBOUNDLDRCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQUpOLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzRC9CO0lBQUQsa0JBQUM7Q0F0REQsQUFzREMsQ0F0RHdDLEVBQUUsQ0FBQyxTQUFTLEdBc0RwRDtrQkF0RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFja2V0IGZyb20gXCIuL3BhY2tldFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbiAgXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFja2V0R3JvdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBwYWNrZXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBtYWluTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gIG5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIHBvb2xTaXplID0gNTA7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaW5pdE5vZGVQb29sKCk7XG4gIH1cblxuICBpbml0Tm9kZVBvb2wgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9vbFNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYWNrZXRQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGVQb29sLnB1dChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIC8vIOe6ouWMheWHuuayoVxuICBzdGFydEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmdlbk5ld1BhY2tldCgpO1xuICAgICAgfSwgMC41KTtcbiAgfTtcblxuICAvLyDnlJ/miJDnuqLljIVcbiAgZ2VuTmV3UGFja2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPVxuICAgICAgdGhpcy5ub2RlUG9vbC5zaXplKCkgPiAwXG4gICAgICAgID8gdGhpcy5ub2RlUG9vbC5nZXQoKVxuICAgICAgICA6IGNjLmluc3RhbnRpYXRlKHRoaXMucGFja2V0UHJlZmFiKTtcbiAgICBjb25zdCBwb3MgPSB0aGlzLmdldE5ld1BhY2tldFBvc2l0aW9uKG5vZGUpO1xuICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICBub2RlLmdldENvbXBvbmVudChQYWNrZXQpLmluaXQoKTtcbiAgfTtcblxuICAvL+e6ouWMhemaj+acuueUn+aIkOeahOS9jee9rlxuICBnZXROZXdQYWNrZXRQb3NpdGlvbiA9IChuZXdQYWNrZXQ6IGNjLk5vZGUpID0+IHtcbiAgICBsZXQgcmFuZHggPVxuICAgICAgKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKlxuICAgICAgKHRoaXMubm9kZS5wYXJlbnQud2lkdGggLyAyIC0gbmV3UGFja2V0LndpZHRoIC8gMik7XG4gICAgbGV0IHJhbmR5ID0gdGhpcy5ub2RlLnBhcmVudC5oZWlnaHQgLyAyICsgbmV3UGFja2V0LmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIGNjLnYyKHJhbmR4LCByYW5keSk7XG4gIH07XG5cblxuICAvLyDlm57mlLbnm7jlhbPnmoToioLngrlcbiAgcmVjeWNsZU5vZGUgPSAocGFja2V0OiBjYy5Ob2RlLCBzY29yZT86IG51bWJlcikgPT4ge1xuICAgIHRoaXMubm9kZVBvb2wucHV0KHBhY2tldCk7XG4gICAgc2NvcmUgJiYgdGhpcy5tYWluTm9kZS5nZXRDb21wb25lbnQoXCJtYWluXCIpLmNoYW5nZVNjb3JlKDEpO1xuICB9O1xuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEyQkM7UUF2QkcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLGVBQVMsR0FBaUIsSUFBSSxDQUFDOztJQWlCbkMsQ0FBQztJQWZJLHNCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRixxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVqQix5QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsS0FBSztRQUNMLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUF0Qkg7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNVO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ1E7SUFWZCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMkJ6QjtJQUFELFlBQUM7Q0EzQkQsQUEyQkMsQ0EzQmtDLEVBQUUsQ0FBQyxTQUFTLEdBMkI5QztrQkEzQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGJ1dHRvblNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvblNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgIC8vIOi9rOWculxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
