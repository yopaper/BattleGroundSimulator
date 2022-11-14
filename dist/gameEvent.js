import * as ui from "./uiFunction.js";
import * as canvas from "./canvas.js";
import * as camera from "./camera.js";
import { BuildingUnit, GameUnit } from "./gameUnit.js";
import { MapBlock } from "./mapBlock.js";
import { UnitHashHandler } from "./unitHashHandler.js";
export class GameInitializer {
    static initialize() {
        console.log("遊戲初始化設定...");
        ui.initialize();
    }
}
export class GameEvent {
    static triggerMapReset() {
        MapBlock.clearAllBlock();
        GameUnit.clearAllUnits();
        BuildingUnit.clearAllBuildingUnit();
        UnitHashHandler.clearAllHashHandler();
    }
    static triggerGameUpdate() {
        canvas.clearCanvas();
        camera.update();
        MapBlock.blocksUpdate();
        UnitHashHandler.allUpdate();
        GameUnit.update();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dhbWVFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE1BQU0sT0FBTyxlQUFlO0lBQ2pCLE1BQU0sQ0FBQyxVQUFVO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBTyxTQUFTO0lBRVgsTUFBTSxDQUFDLGVBQWU7UUFDekIsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixZQUFZLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNwQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGlCQUFpQjtRQUMzQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDSiJ9