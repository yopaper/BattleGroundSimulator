import { timeDelta } from "./gameTime.js";
import { WorldPosition, MapBlockIndex } from "./position.js";
import { MapBlock } from "./mapBlock.js";
import { RandomRangeInt } from "./basic.js";
export class UnitMover {
    constructor(unitOwner, moveSpeed) {
        this._working = false;
        this._needLoadNextPosition = true;
        this._targetBlockIndex = new MapBlockIndex(0, 0);
        this._nextWorldPosition = new WorldPosition(0, 0);
        this._unitOwner = unitOwner;
        this._moveSpeed = moveSpeed;
        this.setTargetPosition(this._unitOwner.getMapBlockIndex());
        this.setNextMovePosition(this._unitOwner.getMapBlockIndex());
    }
    update() {
        if (!this._working)
            return;
        this.checkReachTarget();
        if (!this._working)
            return;
        this.loadNextBlockIndex();
        this.moveToNextBlockIndex();
        this.debugDraw();
    }
    setTargetPosition(position) {
        if (this._targetBlockIndex.equal(position))
            return;
        this._targetBlockIndex.set(position.getX(), position.getY());
        this._working = true;
        this._needLoadNextPosition = true;
    }
    loadNextBlockIndex() {
        let ownerIndex = this._unitOwner.getMapBlockIndex();
        const checkBlockIndex = () => {
            if (this._needLoadNextPosition == false &&
                this.reachPosition(this._nextWorldPosition)) {
                this._needLoadNextPosition = true;
            }
        };
        const getNextBlockIndex = () => {
            let currentDistance = MapBlock.BlockIndexToPathDistance(ownerIndex, this._targetBlockIndex);
            let aroundPos = ownerIndex.getAroundPosition4();
            let nextPos = [];
            for (var i = 0; i < aroundPos.length; i++) {
                let checkPos = aroundPos[i];
                let checkDistance = MapBlock.BlockIndexToPathDistance(checkPos, this._targetBlockIndex);
                if (checkDistance != null && checkDistance == currentDistance - 1) {
                    nextPos.push(checkPos);
                }
            }
            if (nextPos.length > 0) {
                return nextPos[RandomRangeInt(0, nextPos.length - 1)];
            }
            return null;
        };
        checkBlockIndex();
        if (!this._needLoadNextPosition) {
            return;
        }
        let nextBlockIndex = getNextBlockIndex();
        if (nextBlockIndex != null) {
            this.setNextMovePosition(nextBlockIndex);
            this._needLoadNextPosition = false;
        }
    }
    moveToNextBlockIndex() {
        let direction = this.getMoveDirection();
        direction.x = direction.x * this._moveSpeed * timeDelta;
        direction.y = direction.y * this._moveSpeed * timeDelta;
        this._unitOwner.movePosition(direction.x, direction.y);
    }
    checkReachTarget() {
        if (this._unitOwner.positionInInteractiveDistance(this._targetBlockIndex) &&
            this.reachPosition(this._nextWorldPosition)) {
            this._working = false;
            this._needLoadNextPosition = false;
        }
    }
    debugDraw() {
        this._unitOwner.getDrawHandler().drawLineFromSelf(this._nextWorldPosition, "#FFFF00", 0.25);
    }
    getMoveDirection() {
        let posDelta = {
            x: this._nextWorldPosition.getX() - this._unitOwner.getPosition().getX(),
            y: this._nextWorldPosition.getY() - this._unitOwner.getPosition().getY()
        };
        let totalDelta = Math.abs(posDelta.x) + Math.abs(posDelta.y);
        return {
            x: posDelta.x / totalDelta,
            y: posDelta.y / totalDelta
        };
    }
    setNextMovePosition(position) {
        let gettedNextWorldPosition = position.getRandomWorldPositionOnIt();
        this._nextWorldPosition.set(gettedNextWorldPosition.getX(), gettedNextWorldPosition.getY());
    }
    reachPosition(position) {
        let blockIndex = MapBlockIndex.fromWorldPosition(position);
        return (this._unitOwner.getMapBlockIndex().equal(blockIndex) &&
            this._unitOwner.getPosition().getEuclideanDistance(position) <= 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdE1vdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VuaXRNb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFtQixjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFLN0QsTUFBTSxPQUFPLFNBQVM7SUFVbEIsWUFBYSxTQUF1QixFQUFFLFNBQWdCO1FBVDVDLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsMEJBQXFCLEdBQWEsSUFBSSxDQUFDO1FBR3ZDLHNCQUFpQixHQUFtQixJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUQsdUJBQWtCLEdBQW1CLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUluRSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBRSxDQUFDO0lBQ25FLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxv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