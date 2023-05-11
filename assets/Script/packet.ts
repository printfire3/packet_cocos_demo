// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PacketGroup from "./packetGroup";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Packet extends cc.Component {

    @property(cc.SpriteFrame)
    initSpriteFrame: cc.SpriteFrame = null;
    @property(cc.AudioClip)
    explosionSound: cc.AudioClip = null;

    speed = 150;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.init();
    }

    start () {

    }

    init = () => {
        // 找到node的Sprite组件
        let nSprite = this.node.getComponent(cc.Sprite);
        // 初始化spriteFrame
        if (nSprite.spriteFrame != this.initSpriteFrame){
            nSprite.spriteFrame = this.initSpriteFrame;
        }
        this.node.group = "packet"
    };

    //碰撞检测
    onCollisionEnter = (other: any) => {
        this.explodingAnim();
    }

    explodingAnim =  () => {
        // 播放爆炸音效
        cc.audioEngine.play(this.explosionSound, false, 1);
        //this.node.destroy();
        this.onHandleDestroy();
    }

    onHandleDestroy =  ()=> {  
        this.node.parent.getComponent(PacketGroup).recycleNode(this.node, 1);
    }

    update(dt:number) {
        this.node.y -= dt * this.speed;
        if(this.node.y < -this.node.parent.height / 2 - this.node.height / 2) {
            this.node.parent.getComponent(PacketGroup).recycleNode( this.node,1);
        }
    }
}
