import { timeDelta } from "./gameTime.js";
export class AttackHandler {
    constructor(unitOwner, targetFinder, damage) {
        this._unitOwner = unitOwner;
        this._targetFinder = targetFinder;
        this._damage = damage;
    }
    update() {
        this.attackTarget();
    }
    attackTarget() {
        const drawLine = () => {
            this._unitOwner.getDrawHandler().drawLineFromSelf(target.getPosition(), this._unitOwner.getTeam().getSubColor(), this._unitOwner.getUnitSize() / 3);
        };
        const damageTarget = () => {
            target.changeHp(-this._damage * timeDelta);
        };
        const targetInRange = () => {
            return this._unitOwner.positionInInteractiveDistance(target.getMapBlockIndex());
        };
        if (this._targetFinder.getTarget() == null)
            return;
        let target = this._targetFinder.getTarget();
        if (!targetInRange())
            return;
        damageTarget();
        drawLine();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNrSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hdHRhY2tIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLMUMsTUFBTSxPQUFPLGFBQWE7SUFNdEIsWUFBYSxTQUFrQixFQUFFLFlBQWtDLEVBQUUsTUFBYTtRQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBQ00sTUFBTTtRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ1MsWUFBWTtRQUNsQixNQUFNLFFBQVEsR0FBRyxHQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FDN0MsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxZQUFZLEdBQUcsR0FBRSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQztRQUNGLE1BQU0sYUFBYSxHQUFHLEdBQVUsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQUUsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUUsQ0FBQztRQUN0RixDQUFDLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUUsSUFBSTtZQUFFLE9BQU87UUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQWMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQUUsT0FBTztRQUM3QixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNKIn0=