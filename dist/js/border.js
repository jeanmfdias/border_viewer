export class Border {
    constructor(tlX, tlY, trX, trY, blX, blY, brX, brY) {
        this._topLeftX = tlX;
        this._topLeftY = tlY;
        this._topRightX = trX;
        this._topRightY = trY;
        this._bottomLeftX = blX;
        this._bottomLeftY = blY;
        this._bottomRightX = brX;
        this._bottomRightY = brY;
    }
    get topLeftX() {
        return this._topLeftX;
    }
    get topLeftY() {
        return this._topLeftY;
    }
    get topRightX() {
        return this._topRightX;
    }
    get topRightY() {
        return this._topRightY;
    }
    get bottomLeftX() {
        return this._bottomLeftX;
    }
    get bottomLeftY() {
        return this._bottomLeftY;
    }
    get bottomRightX() {
        return this._bottomRightX;
    }
    get bottomRightY() {
        return this._bottomRightY;
    }
    setTopLeftX(tl) {
        this._topLeftX = tl;
    }
    setTopLeftY(tl) {
        this._topLeftY = tl;
    }
    setTopRightX(tr) {
        this._topRightX = tr;
    }
    setTopRightY(tr) {
        this._topRightY = tr;
    }
    setBottomLeftX(bl) {
        this._bottomLeftX = bl;
    }
    setBottomLeftY(bl) {
        this._bottomLeftY = bl;
    }
    setBottomRightX(br) {
        this._bottomRightX = br;
    }
    setBottomRightY(br) {
        this._bottomRightY = br;
    }
}
