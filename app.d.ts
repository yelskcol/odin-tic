declare enum Tokens {
    X = 0,
    O = 1
}
declare class Player {
    name: string;
    token: string;
    constructor();
}
declare class GameLogic {
    private _boardState;
    constructor();
    get boardState(): string[];
    set boardState(state: string[]);
    private createBoard;
}
declare class DisplayController {
}
declare class App {
    static init(): void;
}
