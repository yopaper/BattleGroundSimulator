import { CameraPosition } from "./position.js";
export const Canvas = document.getElementById("canvas");
export const Context2D = Canvas.getContext("2d");
export var clearColor = "#111111";
export var autoFitWindow = false;
export function setAutoFitWindowEnable(enable) {
    autoFitWindow = enable;
    if (autoFitWindow)
        canvasFitWindowSize();
}
export function getCenter() {
    return new CameraPosition(Canvas.width / 2, Canvas.height / 2);
}
export function clearCanvas() {
    Context2D.fillStyle = clearColor;
    Context2D.fillRect(0, 0, Canvas.width, Canvas.height);
}
export function canvasFitWindowSize() {
    Canvas.width = window.innerWidth - 30;
    Canvas.height = window.innerHeight - 20;
    clearCanvas();
}
function init() {
    console.log("Canvas 初始化");
    clearCanvas();
    window.addEventListener("resize", (event) => {
        if (!autoFitWindow)
            return;
        canvasFitWindowSize();
    });
}
init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7QUFFakcsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUE4QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBNkIsQ0FBQztBQUV4RyxNQUFNLENBQUMsSUFBSSxVQUFVLEdBQVksU0FBUyxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsR0FBYSxLQUFLLENBQUM7QUFFM0MsTUFBTSxVQUFVLHNCQUFzQixDQUFFLE1BQWM7SUFDbEQsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUN2QixJQUFJLGFBQWE7UUFBRSxtQkFBbUIsRUFBRSxDQUFDO0FBQzdDLENBQUM7QUFFRCxNQUFNLFVBQVUsU0FBUztJQUNyQixPQUFPLElBQUksY0FBYyxDQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFFLENBQUM7QUFDakUsQ0FBQztBQUNELE1BQU0sVUFBVSxXQUFXO0lBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBQ0QsTUFBTSxVQUFVLG1CQUFtQjtJQUMvQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEMsV0FBVyxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUNELFNBQVMsSUFBSTtJQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUIsV0FBVyxFQUFFLENBQUM7SUFDZCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUNoQyxDQUFDLEtBQUssRUFBQyxFQUFFO1FBQ0wsSUFBSSxDQUFDLGFBQWE7WUFBRyxPQUFPO1FBQzVCLG1CQUFtQixFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0QsSUFBSSxFQUFFLENBQUMifQ==