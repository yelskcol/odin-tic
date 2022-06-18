enum PlayerTokens {
  O,
  X,
}

interface playerArgs {
  name: string;
  token: PlayerTokens;
}

interface board {
  1: [""];
  2: [""];
  3: [""];
}

class Player {
  private _wins = 0;
  constructor(private _name: string, private _token: PlayerTokens | "") {
    this._name = _name;
    this._token = _token;
  }

  get name() {
    return this._name;
  }

  get token() {
    return this._token;
  }

  get wins() {
    return this._wins;
  }
}

class PlayerLogic {
  private static instance: PlayerLogic;
  private _players: Player[] = [];
  private constructor() {
    this.addPlayer(this.createPlayer());
  }

  static getInstance() {
    if (PlayerLogic.instance) {
      return this.instance;
    }
    this.instance = new PlayerLogic();
    return this.instance;
  }

  get players() {
    return this._players;
  }

  private createPlayer() {
    const p = new Player("Sam", PlayerTokens.X);
    return p;
  }

  private addPlayer(p: Player) {
    this._players.push(p);
  }
}

class GameLogic {
  private static instance: GameLogic;
  private _boardState: string[] = [];
  private _activePlayer: PlayerTokens = PlayerTokens.O;
  private constructor() {
    this.boardState = this.initializeBoard();
  }

  get boardState() {
    return this._boardState;
  }

  get activePlayer() {
    return this._activePlayer;
  }

  set activePlayer(player: PlayerTokens) {
    this._activePlayer = player;
  }

  set boardState(state: string[]) {
    this._boardState = state;
  }

  boardParser() {
    const b = this.boardState;
    const r = [];
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b.length; j++) {
        const pos = `${i}${j}`;
        r.push(pos);
      }
    }
    return r;
  }

  private initializeBoard() {
    const arr = new Array(3).fill(Array(3).fill(""));
    return arr;
  }

  static getInstance() {
    if (GameLogic.instance) {
      return this.instance;
    }
    this.instance = new GameLogic();
    return this.instance;
  }
}

class DisplayController {
  private static instance: DisplayController;
  private _gameContainer = DOMHelper.get(".grid");
  private _cells = DOMHelper.getAll(".grid__cell");
  constructor() {}

  get container() {
    return this._gameContainer;
  }

  get cells() {
    return this._cells;
  }

  static getInstance() {
    if (DisplayController.instance) {
      return this.instance;
    }

    this.instance = new DisplayController();
    return this.instance;
  }

  mapIdsToCells(ids: string[]) {
    this.cells.forEach((cell, idx) => {
      cell.id = ids[idx];
    });
  }
}

class DOMHelper {
  static get(target: string) {
    const el = document.querySelector(target) as HTMLElement;
    return el;
  }

  static getAll(target: string) {
    const els = document.querySelectorAll(target);
    const elsArr = [...els];
    return elsArr;
  }
}

class App {
  private logic = GameLogic.getInstance();
  private players = PlayerLogic.getInstance();
  private display = DisplayController.getInstance();
  private static instance: App;
  private constructor() {
    this.setupIds();
  }

  static init() {
    if (App.instance) {
      return this.instance;
    }
    this.instance = new App();
    return this.instance;
  }

  setupIds() {
    this.display.mapIdsToCells(this.logic.boardParser());
  }
}

App.init();
