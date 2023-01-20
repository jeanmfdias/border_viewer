export class Border {
    private _topLeftX: number;
    private _topLeftY: number;
    private _topRightX: number;
    private _topRightY: number;
    private _bottomLeftX: number;
    private _bottomLeftY: number;
    private _bottomRightX: number;
    private _bottomRightY: number;
    
    constructor(tlX: number, 
        tlY: number, 
        trX: number, 
        trY: number, 
        blX: number, 
        blY: number, 
        brX: number,
        brY: number) {
        this._topLeftX = tlX;
        this._topLeftY = tlY;
        this._topRightX = trX;
        this._topRightY = trY;
        this._bottomLeftX = blX;
        this._bottomLeftY = blY;
        this._bottomRightX = brX;
        this._bottomRightY = brY;
    }

    get topLeftX(): number {
        return this._topLeftX;
    }

    get topLeftY(): number {
        return this._topLeftY;
    }

    get topRightX(): number {
        return this._topRightX;
    }

    get topRightY(): number {
        return this._topRightY;
    }

    get bottomLeftX(): number {
        return this._bottomLeftX;
    }

    get bottomLeftY(): number {
        return this._bottomLeftY;
    }

    get bottomRightX(): number {
        return this._bottomRightX;
    }

    get bottomRightY(): number {
        return this._bottomRightY;
    }

    setTopLeftX(tl: number): void {
        this._topLeftX = tl;
    }

    setTopLeftY(tl: number): void {
        this._topLeftY = tl;
    }

    setTopRightX(tr: number): void {
        this._topRightX = tr;
    }

    setTopRightY(tr: number): void {
        this._topRightY = tr;
    }

    setBottomLeftX(bl: number): void {
        this._bottomLeftX = bl;
    }

    setBottomLeftY(bl: number): void {
        this._bottomLeftY = bl;
    }

    setBottomRightX(br: number): void {
        this._bottomRightX = br;
    }

    setBottomRightY(br: number): void {
        this._bottomRightY = br;
    }
}