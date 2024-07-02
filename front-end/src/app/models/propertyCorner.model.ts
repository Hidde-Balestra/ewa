export class PropertyCornerModel {
  id:number;
  type: "go" | "jail visiting" | "parking" | "jail";

  constructor(id:number, type: "go" | "jail visiting" | "parking" | "jail") {
    this.id = id;
    this.type = type;
  }
}
