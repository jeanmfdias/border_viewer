export class Border {
    private _topLeft: number;
    private _topRight: number;
    private _bottomLeft: number;
    private _bottomRight: number;
    
    constructor(tl: number, tr: number, bl: number, br: number) {
        this._topLeft = tl;
        this._topRight = tr;
        this._bottomLeft = bl;
        this._bottomRight = br;
    }

    get topLeft(): number {
        return this._topLeft;
    }

    get topRight(): number {
        return this._topRight;
    }

    get bottomLeft(): number {
        return this._bottomLeft;
    }

    get bottomRight(): number {
        return this._bottomRight;
    }

    setTopLeft(tl: number): void {
        this._topLeft = tl;
    }

    setTopRight(tr: number): void {
        this._topRight = tr;
    }

    setBottomLeft(bl: number): void {
        this._bottomLeft = bl;
    }

    setBottomRight(br: number): void {
        this._bottomRight = br;
    }
}