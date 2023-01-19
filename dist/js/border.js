export class Border {
    constructor(tl, tr, bl, br) {
        this._topLeft = tl;
        this._topRight = tr;
        this._bottomLeft = bl;
        this._bottomRight = br;
    }
    get topLeft() {
        return this._topLeft;
    }
    get topRight() {
        return this._topRight;
    }
    get bottomLeft() {
        return this._bottomLeft;
    }
    get bottomRight() {
        return this._bottomRight;
    }
    setTopLeft(tl) {
        this._topLeft = tl;
    }
    setTopRight(tr) {
        this._topRight = tr;
    }
    setBottomLeft(bl) {
        this._bottomLeft = bl;
    }
    setBottomRight(br) {
        this._bottomRight = br;
    }
}
