export class EventHandler {
    constructor(trigger_function = (eventToTrigger) => { eventToTrigger(); }) {
        this.events = [];
        this.triggerFunction = trigger_function;
    }
    trigger() {
        for (var i = 0; i < this.events.length; i++) {
            this.triggerFunction(this.events[i]);
        }
    }
    addEvent(event) {
        if (!this.events.includes(event)) {
            this.events.push(event);
        }
    }
    removeEvent(event) {
        if (!this.events.includes(event))
            return;
        this.events.splice(this.events.indexOf(event), 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2V2ZW50SGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLE9BQU8sWUFBWTtJQUlyQixZQUFhLG1CQUNQLENBQUMsY0FBdUIsRUFBRSxFQUFFLEdBQUcsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBSjlDLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO1FBSy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDNUMsQ0FBQztJQUNNLE9BQU87UUFDVixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBQ00sUUFBUSxDQUFFLEtBQWM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUNNLFdBQVcsQ0FBRSxLQUFjO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO0lBQ3hELENBQUM7Q0FDSiJ9