import { GameUnit } from "./gameUnit.js";
import { UnitMover } from "./unitMover.js";
import * as targetFinder from "./targetFinder.js";
import * as attackHandler from "./attackHandler.js";
export class SoldierUnit extends GameUnit {
    constructor(x, y, team) {
        super(x, y, team);
        this._mover = this.unitMoverSource();
        this._targetFinderContainer = this.targetFinderContainerSource();
        this._attackHandler = this.attackHandlerSource();
    }
    updateSelf() {
        super.updateSelf();
        this._targetFinderContainer.update();
        this._attackHandler?.update();
        this._mover.update();
        let target = this._targetFinderContainer.getTarget();
        if (target != null) {
            this._mover.setTargetPosition(target.getMapBlockIndex());
        }
    }
    getTargetFinderContainer() {
        return this._targetFinderContainer;
    }
}
export class NormalAttacker extends SoldierUnit {
    getUnitSize() {
        return 3;
    }
    getMoveSpeed() {
        return 1;
    }
    getInteractiveDistance() {
        return 0;
    }
    drawSelf() {
        this._drawHandler.drawCircle(this.getUnitSize(), this._team.getColor(), this._team.getSubColor(), 0.5);
    }
    getBasicHp() {
        return 40;
    }
    getBasicHpRecoverRate() {
        return 0.003;
    }
    unitMoverSource() {
        return new UnitMover(this, 7);
    }
    targetFinderContainerSource() {
        return new targetFinder.TargetFinderContainer(new targetFinder.RangeClosestAttackTargetFinder(this, 1), new targetFinder.ClosestBuildingTargetFinder(this));
    }
    attackHandlerSource() {
        return new attackHandler.AttackHandler(this, this._targetFinderContainer, 3);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sZGllclVuaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc29sZGllclVuaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxLQUFLLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEtBQUssYUFBYSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE1BQU0sT0FBZ0IsV0FBWSxTQUFRLFFBQVE7SUFLOUMsWUFBWSxDQUFRLEVBQUUsQ0FBUSxFQUFFLElBQVM7UUFDckMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVNLFVBQVU7UUFDYixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckQsSUFBSSxNQUFNLElBQUUsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBRSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBRSxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQUdNLHdCQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0NBT0o7QUFFRCxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQVc7SUFDcEMsV0FBVztRQUNkLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLFlBQVk7UUFDZixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTSxzQkFBc0I7UUFDekIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRVMsUUFBUTtRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDUyxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNTLHFCQUFxQjtRQUMzQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ1MsZUFBZTtRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ1MsMkJBQTJCO1FBQ2pDLE9BQU8sSUFBSSxZQUFZLENBQUMscUJBQXFCLENBQ3pDLElBQUksWUFBWSxDQUFDLDhCQUE4QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFDeEQsSUFBSSxZQUFZLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQ3JELENBQUM7SUFDTixDQUFDO0lBQ1MsbUJBQW1CO1FBQ3pCLE9BQU8sSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFDdkMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDSiJ9