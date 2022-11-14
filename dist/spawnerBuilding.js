import * as unit from "./gameUnit.js";
import * as soldierUnit from "./soldierUnit.js";
import { UnitSpawnerWithUnitOwner } from "./unitSpawner.js";
export class SpawnerBuilding extends unit.BuildingUnit {
    constructor(x, y, team) {
        super(x, y, team);
        this._unitSpawner = this.unitSpanwerSource();
    }
    updateSelf() {
        super.updateSelf();
        this._unitSpawner.update();
    }
    getInteractiveDistance() {
        return null;
    }
}
export class SmallAttackerSpawner extends SpawnerBuilding {
    drawSelf() {
        this._drawHandler.drawRect({ x: this.getUnitSize(), y: this.getUnitSize() }, this._team.getColor(), this._team.getSubColor(), 1);
    }
    getUnitSize() {
        return 8;
    }
    getBasicHp() {
        return 315;
    }
    getBasicHpRecoverRate() {
        return 0.05;
    }
    unitSpanwerSource() {
        return new UnitSpawnerWithUnitOwner(this, soldierUnit.NormalAttacker, 3, { startCoolDown: 0, coolDownMax: 20 }, { startSpawnEnergy: 0, spawnEnergyMax: 3, spawnEnergyDelta: 2 });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bhd25lckJ1aWxkaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NwYXduZXJCdWlsZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssV0FBVyxNQUFNLGtCQUFrQixDQUFDO0FBSWhELE9BQU8sRUFBZSx3QkFBd0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXpFLE1BQU0sT0FBZ0IsZUFBZ0IsU0FBUSxJQUFJLENBQUMsWUFBWTtJQUczRCxZQUFZLENBQVEsRUFBRSxDQUFRLEVBQUUsSUFBUztRQUNyQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDTSxVQUFVO1FBQ2IsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLHNCQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBRUo7QUFFRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQUMzQyxRQUFRO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUUsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDeEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO0lBQ3hELENBQUM7SUFDTSxXQUFXO1FBQ2QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ1MsVUFBVTtRQUNoQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDUyxxQkFBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNTLGlCQUFpQjtRQUN2QixPQUFPLElBQUksd0JBQXdCLENBQy9CLElBQUksRUFBRSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsRUFDbkMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBQyxFQUFFLEVBQUMsRUFDakMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUUsY0FBYyxFQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsQ0FBRSxDQUFDO0lBQ3JFLENBQUM7Q0FDSiJ9