// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Packet from "./packet";
import PacketGroup from "./packetGroup";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Label)
    scoreDisplay: cc.Label = null;
    @property(cc.Node)
    packetGroup: cc.Node = null;
    @property(cc.Prefab)
    packetPrefab: cc.Prefab = null;
    score = 0 

    onLoad() {
        this.packetGroup.getComponent(PacketGroup).startAction();
        //this.genNewPacket2();
    }

    changeScore = (score:number)  =>{
        this.score += score;
        this.scoreDisplay.string = String(this.score);
    }
   
}
