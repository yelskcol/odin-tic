declare enum PlayerTokens {
    O = 0,
    X = 1
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
declare class Player {
    private _name;
    private _token;
    private _wins;
    constructor(_name: string, _token: PlayerTokens | "");
    get name(): string;
    get token(): "" | PlayerTokens;
    get wins(): number;
}
declare class PlayerLogic {
    private static instance;
    private _players;
    private constructor();
    static getInstance(): PlayerLogic;
    get players(): Player[];
    private createPlayer;
    private addPlayer;
}
declare class GameLogic {
    private static instance;
    private _boardState;
    private _activePlayer;
    private constructor();
    get boardState(): string[];
    get activePlayer(): PlayerTokens;
    set activePlayer(player: PlayerTokens);
    set boardState(state: string[]);
    boardParser(): string[];
    private initializeBoard;
    static getInstance(): GameLogic;
}
declare class DisplayController {
    private static instance;
    private _gameContainer;
    private _cells;
    constructor();
    get container(): HTMLElement;
    get cells(): Element[];
    static getInstance(): DisplayController;
    mapIdsToCells(ids: string[]): void;
}
declare class DOMHelper {
    static get(target: string): HTMLElement;
    static getAll(target: string): Element[];
}
declare class App {
    private logic;
    private players;
    private display;
    private static instance;
    private constructor();
    static init(): App;
    setupIds(): void;
}
