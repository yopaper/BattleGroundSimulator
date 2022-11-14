import { BuildingUnit } from "./gameUnit.js";
import { RandomRangeInt } from "./basic.js";
import { MinObjectFilter } from "./basic.js";
import { MapBlock } from "./mapBlock.js";
import { UnitHashHandler } from "./unitHashHandler.js";
export class TargetFinderContainer {
    constructor(...targetFinders) {
        this._targetFinders = [];
        for (var i = 0; i < targetFinders.length; i++) {
            this._targetFinders.push(targetFinders[i]);
        }
    }
    update() {
        for (var i = 0; i < this._targetFinders.length; i++) {
            this._targetFinders[i].update();
        }
    }
    getTarget() {
        for (var i = 0; i < this._targetFinders.length; i++) {
            let gettedTarget = this._targetFinders[i].getTarget();
            if (gettedTarget != null) {
                return gettedTarget;
            }
        }
        return null;
    }
}
export class TargetFinder {
    constructor(unitOwner) {
        this._target = null;
        this._unitOwner = unitOwner;
        this._findCoolDownMax = this.getBasicCoolDownMax();
        this._findCoolDown = RandomRangeInt(0, this._findCoolDownMax);
    }
    update() {
        this.checkTargetDead();
        if (this._target == null) {
            this._findCoolDown -= 1;
            if (this._findCoolDown > 0)
                return;
            this.findNewTarget();
            this._findCoolDown = this._findCoolDownMax;
        }
    }
    getTarget() {
        return this._target;
    }
    checkTargetDead() {
        if (this._target == null)
            return;
        if (this._target.isDead()) {
            this._target = null;
        }
    }
}
export class ClosestTargetFinder extends TargetFinder {
    findNewTarget() {
        let minFilter = new MinObjectFilter();
        let unitsToFind = this.getUnitsToFind();
        let msg = this._unitOwner.toString() + "搜尋目標...\n";
        msg += `搜尋數量:${unitsToFind.length}\n`;
        for (var i = 0; i < unitsToFind.length; i++) {
            let unit = unitsToFind[i];
            let distance = MapBlock.BlockIndexToPathDistance(this._unitOwner.getMapBlockIndex(), unit.getMapBlockIndex());
            msg += `${unit.toString()}:Distance=${distance}`;
            if (distance == null)
                continue;
            minFilter.compare(distance, unit);
        }
        let getTargets = minFilter.getObjects();
        if (getTargets.length > 0) {
            this._target = getTargets[RandomRangeInt(0, getTargets.length - 1)];
            msg += `取得目標:${this._target.toString()}`;
        }
    }
    getBasicCoolDownMax() {
        return 10;
    }
}
export class ClosestBuildingTargetFinder extends ClosestTargetFinder {
    getUnitsToFind() {
        let buildings = [];
        for (var i = 0; i < BuildingUnit.getBuildingUnitCount(); i++) {
            let gettedBuilding = BuildingUnit.getBuildingUnit(i);
            if (gettedBuilding.getTeam() == this._unitOwner.getTeam())
                continue;
            buildings.push(gettedBuilding);
        }
        return buildings;
    }
}
export class RangeClosestAttackTargetFinder extends ClosestTargetFinder {
    constructor(unitOwner, findRange) {
        super(unitOwner);
        this._findRange = findRange;
    }
    getBasicCoolDownMax() {
        return 4;
    }
    getUnitsToFind() {
        let hashIndex = this._unitOwner.getUnitHashIndex();
        let gettedUnits = UnitHashHandler.getUnitsInRange(hashIndex, this._findRange);
        let returnUnits = [];
        for (var i = 0; i < gettedUnits.length; i++) {
            let gettedUnit = gettedUnits[i];
            if (gettedUnit.getTeam() == this._unitOwner.getTeam())
                continue;
            returnUnits.push(gettedUnit);
        }
        return returnUnits;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0RmluZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RhcmdldEZpbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVksWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBSyxzQkFBc0IsQ0FBQztBQUd0RCxNQUFNLE9BQU8scUJBQXFCO0lBRzlCLFlBQWEsR0FBRyxhQUE0QjtRQUZsQyxtQkFBYyxHQUFvQixFQUFFLENBQUM7UUFHM0MsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBQ00sTUFBTTtRQUNULEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUNNLFNBQVM7UUFDWixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDM0MsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZ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