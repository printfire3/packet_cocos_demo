"use strict";
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