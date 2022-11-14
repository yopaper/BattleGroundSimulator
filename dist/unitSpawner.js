import { GameUnit } from "./gameUnit.js";
import { timeDelta } from "./gameTime.js";
export class UnitSpawner {
    constructor(unitType, chileUnitMax, coolDownData, spawnData) {
        this._chileUnits = [];
        this._unitType = unitType;
        this._chileUnitsMax = chileUnitMax;
        this._coolDownCounter = coolDownData.startCoolDown;
        this._coolDownMax = coolDownData.coolDownMax;
        this._spawnEnergy = spawnData.startSpawnEnergy;
        this._spawnEnergyMax = spawnData.spawnEnergyMax;
        this._spawnEnergyDelta = spawnData.spawnEnergyDelta;
    }
    update() {
        this.checkCoolDown();
        this.doSpawn();
        this.checkChileDead();
    }
    doSpawn() {
        if (this._spawnEnergy > 0 && this._chileUnits.length < this._chileUnitsMax) {
            this._spawnEnergy -= 1;
            this._chileUnits.push(this.spawnUnit());
        }
    }
    checkCoolDown() {
        if (this._spawnEnergy >= this._spawnEnergyMax)
            return;
        this._coolDownCounter -= timeDelta;
        if (this._coolDownCounter <= 0) {
            this._coolDownCounter = this._coolDownMax;
            this._spawnEnergy = Math.min(this._spawnEnergyMax, this._spawnEnergy + this._spawnEnergyDelta);
        }
    }
    checkChileDead() {
        GameUnit.removeDeadUnitFromList(this._chileUnits);
    }
}
export class UnitSpawnerWithUnitOwner extends UnitSpawner {
    constructor(unitOwner, unitType, chileUnitMax, coolDownData, spawnData) {
        super(unitType, chileUnitMax, coolDownData, spawnData);
        this._unitOwenr = unitOwner;
    }
    spawnUnit() {
        let pos = this._unitOwenr.getPosition();
        let newUnit = new this._unitType(pos.getX(), pos.getY(), this._unitOwenr.getTeam());
        return newUnit;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdFNwYXduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdW5pdFNwYXduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE1BQU0sT0FBZ0IsV0FBVztJQVU3QixZQUFZLFFBQVksRUFBRSxZQUFtQixFQUN6QyxZQUF1RCxFQUN2RCxTQUFtRjtRQVg3RSxnQkFBVyxHQUFnQixFQUFFLENBQUM7UUFZcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO0lBQ3hELENBQUM7SUFDTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ1MsT0FBTztRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwRSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUUsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFDUyxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksSUFBRSxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU87UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBRSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxlQUFlLEVBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFFLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBQ1MsY0FBYztRQUNwQixRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FHSjtBQUNELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxXQUFXO0lBR3JELFlBQVksU0FBa0IsRUFBRSxRQUFZLEVBQUUsWUFBbUIsRUFDN0QsWUFBdUQsRUFDdkQsU0FBbUY7UUFDL0UsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDUyxTQUFTO1FBQ2YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLE9BQU8sR0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUM7UUFDakcsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKIn0=