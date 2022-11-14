var _a;
export class Team {
    constructor(teamId, color, subColor, name) {
        this._teamId = teamId;
        this._color = color;
        this._subColor = subColor;
        this._name = name;
    }
    static getTeam(index) {
        return this._teamList[index];
    }
    getColor() {
        return this._color;
    }
    getSubColor() {
        return this._subColor;
    }
    getName() {
        return this._name;
    }
    getId() {
        return this._teamId;
    }
}
_a = Team;
Team.RedTeam = new Team(0, "#FF0000", "#880000", "R");
Team.GreenTeam = new Team(1, "#00FF00", "#008800", "G");
Team.BlueTeam = new Team(2, "#3333FF", "#333388", "B");
Team._teamList = [_a.RedTeam, _a.GreenTeam, _a.BlueTeam];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbUNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RlYW1DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsTUFBTSxPQUFPLElBQUk7SUFnQmIsWUFBYSxNQUFhLEVBQUUsS0FBWSxFQUFFLFFBQWUsRUFBRSxJQUFXO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFmTSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFjTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7OztBQWhDYSxZQUFPLEdBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQsY0FBUyxHQUFVLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzFELGFBQVEsR0FBVSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RCxjQUFTLEdBQVksQ0FBQyxFQUFJLENBQUMsT0FBTyxFQUFFLEVBQUksQ0FBQyxTQUFTLEVBQUUsRUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDIn0=