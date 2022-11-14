import { MapBlock } from "./mapBlock.js";
export class MapPathHandler {
    constructor(blockOwner) {
        this._finish = false;
        this._blockDistanceTable = new Map();
        this._processBlockQueue = [];
        this._blockOwner = blockOwner;
        this.setBlockDistance(blockOwner, 0);
    }
    update() {
        const processBlockFromQueue = () => {
            let gettedBlock = this._processBlockQueue[0];
            let aroundPositions = gettedBlock.getIndexPosition().getAroundPosition4();
            let gettedDitance = this._blockDistanceTable.get(gettedBlock);
            for (var i = 0; i < aroundPositions.length; i++) {
                let pos = aroundPositions[i];
                let aroundBlock = MapBlock.getBlock(pos);
                if (aroundBlock == null)
                    continue;
                this.setBlockDistance(aroundBlock, gettedDitance + 1);
            }
            this._processBlockQueue.splice(0, 1);
        };
        const checkFinish = () => {
            if (this._processBlockQueue.length <= 0) {
                this._finish = true;
                let msg = this._blockOwner.toString() + "的路徑表:\n";
                for (var i of this._blockDistanceTable.keys()) {
                    msg += ` ${i.toString()}:${this._blockDistanceTable.get(i)}\n`;
                }
            }
        };
        if (this._finish)
            return;
        checkFinish();
        let processNumber = Math.ceil(this._processBlockQueue.length / 2);
        for (var i = 0; i < processNumber; i++) {
            processBlockFromQueue();
        }
    }
    isFinish() {
        return this._finish;
    }
    getDistanceWithBlock(block) {
        if (this._blockDistanceTable.has(block)) {
            return this._blockDistanceTable.get(block);
        }
        return null;
    }
    addBlockToProcessQueue(block) {
        if (this._processBlockQueue.includes(block))
            return;
        this._processBlockQueue.push(block);
    }
    setBlockDistance(block, distance) {
        if (this._blockDistanceTable.has(block))
            return;
        this._blockDistanceTable.set(block, distance);
        this.addBlockToProcessQueue(block);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwUGF0aEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFwUGF0aEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxNQUFNLE9BQU8sY0FBYztJQVF2QixZQUFhLFVBQW1CO1FBTHRCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFFMUIsd0JBQW1CLEdBQTZCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUQsdUJBQWtCLEdBQWdCLEVBQUUsQ0FBQztRQUczQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxNQUFNO1FBQ1QsTUFBTSxxQkFBcUIsR0FBRyxHQUFPLEVBQUU7WUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUUsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBRSxXQUFXLENBQVcsQ0FBQztZQUN6RSxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDdkMsSUFBSSxHQUFHLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFFLEdBQUcsQ0FBRSxDQUFDO2dCQUMzQyxJQUFJLFdBQVcsSUFBRSxJQUFJO29CQUFFLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxXQUFXLEVBQUUsYUFBYSxHQUFDLENBQUMsQ0FBRSxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQUcsR0FBTyxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUVwQixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDM0QsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUM7b0JBQ3pDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQ2xFO2FBRUo7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN6QixXQUFXLEVBQUUsQ0FBQztRQUNkLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQzlCLHFCQUFxQixFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBQ00sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sb0JBQW9CLENBQUMsS0FBYztRQUN0QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBVSxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNTLHNCQUFzQixDQUFFLEtBQWM7UUFDNUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBYyxFQUFFLFFBQWU7UUFDdEQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDaEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLHNCQUFzQixDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDSiJ9