export class TokenModel {
  private _id: number;
  private _type: number | undefined;
  private _src: string | undefined;
  private _player: string | undefined;
  private _pos: number | undefined;
  private _properties: number[] = [];
  private _money: number = 1500;
  private _jailed: boolean = false;

  constructor(id: number, player: string | undefined, pos: number | undefined, type: number | undefined) {
    this._id = id;
    this._player = player;
    this._pos = pos;
    this._type = type;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get type(): number | undefined {
    return this._type;
  }

  set type(value: number | undefined) {
    this._type = value;
  }

  get src(): string | undefined {
    return this._src;
  }

  set src(value: string | undefined) {
    this._src = value;
  }

  get player(): string | undefined {
    return this._player;
  }

  set player(value: string | undefined) {
    this._player = value;
  }

  get pos(): number | undefined {
    return this._pos;
  }

  set pos(value: number | undefined) {
    this._pos = value;
  }

  get properties(): number[] {
    return this._properties;
  }

  set properties(value: number[]) {
    this._properties = value;
  }

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  get jailed(): boolean {
    return this._jailed;
  }

  set jailed(value: boolean) {
    this._jailed = value;
  }
}
