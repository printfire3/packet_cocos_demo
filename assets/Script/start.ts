// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Start extends cc.Component {


    @property(cc.Button)
    startButton: cc.Button = null;

    @property(cc.AudioClip)
    buttonSound: cc.AudioClip = null;

    @property(cc.Animation)
    animation: cc.Animation = null;

     onLoad () {
      this.animation.play();
     }

    start () {

    }

    // update (dt) {}

    startGame() {
        cc.audioEngine.play(this.buttonSound, false, 1);
        // 转场
        cc.director.loadScene("Game");
      }
}
