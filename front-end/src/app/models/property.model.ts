export class PropertyModel {
  id:number;
  color: "light-blue" | "dark-purple" | "orange" | "purple" | "red" | "yellow" | "green" | "dark-blue" | undefined;
  name: string;
  cost: number | undefined;
  value: number | undefined;
  ownedBy: number | undefined;
  position: "bottom" | "left" | "top" | "right";

  constructor(color: "light-blue" | "dark-purple" | "orange" | "purple" | "red" | "yellow" | "green" | "dark-blue" | undefined, name: string, cost: number | undefined, value: number | undefined, position: "bottom" | "left" | "top" | "right", id: number) {
    this.id = id;
    this.color = color;
    this.name = name;
    this.cost = cost;
    this.value = value;
    this.position = position;
  }
}
