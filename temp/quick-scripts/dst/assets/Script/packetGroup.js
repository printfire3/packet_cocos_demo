
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