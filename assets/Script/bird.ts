// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bird extends cc.Component {



    @property(cc.Node)
    mainScript: cc.Node = null;

    protected onLoad(): void {
        this.onDrag();  //
        const manager =  cc.director.getCollisionManager();
        // 开启碰撞检测
        manager.enabled = true;
        this.node.group = "bird"
    }

    onCollisionEnter = (other: any) => {
       
    };

    onDrag = () => {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onHandleHeroMove);
    };

    onHandleHeroMove = (event: cc.Touch) => {
        const position = event.getLocation();
        const location = this.node.parent.convertToNodeSpaceAR(position);
        this.node.setPosition(location);
    };
}
