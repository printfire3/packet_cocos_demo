import Packet from "./packet";
const { ccclass, property } = cc._decorator;
  
@ccclass
export default class PacketGroup extends cc.Component {
  @property(cc.Prefab)
  packetPrefab: cc.Prefab = null;
  @property(cc.Node)
  mainNode: cc.Node = null;
  nodePool = new cc.NodePool();
  poolSize = 50;

  onLoad() {
    this.initNodePool();
  }

  initNodePool = () => {
      for (let i = 0; i < this.poolSize; i++) {
        const node = cc.instantiate(this.packetPrefab);
        this.nodePool.put(node);
      }
    };

  // 红包出没
  startAction = () => {
      this.schedule(() => {
        this.genNewPacket();
      }, 0.5);
  };

  // 生成红包
  genNewPacket = () => {
    const node =
      this.nodePool.size() > 0
        ? this.nodePool.get()
        : cc.instantiate(this.packetPrefab);
    const pos = this.getNewPacketPosition(node);
    node.setPosition(pos);
    node.parent = this.node;
    node.getComponent(Packet).init();
  };

  //红包随机生成的位置
  getNewPacketPosition = (newPacket: cc.Node) => {
    let randx =
      (Math.random() * 2 - 1) *
      (this.node.parent.width / 2 - newPacket.width / 2);
    let randy = this.node.parent.height / 2 + newPacket.height / 2;
    return cc.v2(randx, randy);
  };


  // 回收相关的节点
  recycleNode = (packet: cc.Node, score?: number) => {
    this.nodePool.put(packet);
    score && this.mainNode.getComponent("main").changeScore(1);
  };

}
