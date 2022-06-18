enum Tokens {
  X,
  O,
}

class Player {
  public name: string;
  public token: string;
  constructor() {
    this.name = "a";
    this.token = "b";
  }
}

class GameLogic {
  private _boardState: string[];
  constructor() {
    this._boardState = [""];
    this.boardState = this.createBoard();
  }

  get boardState() {
    return this._boardState;
  }
  set boardState(state: string[]) {
    this._boardState = state;
  }

  private createBoard() {
    const arr = new Array(3).fill(Array(3).fill(""));
    return arr;
  }
}

class DisplayController {}

class App {
  static init() {
    const logic = new GameLogic();
    logic.boardState = [""];
  }
}

App.init();
