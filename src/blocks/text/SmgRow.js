import {SmgCell} from "./SmgCell";

export class SmgRow {
    constructor() {
        this.row = [];
    }

    static build() {
        return new SmgRow();
    }

    add(text, className = null) {
        const cell = SmgCell.build(text, className);
        this.row.push(JSON.parse(cell.toJson()));
        return this;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.row.length;
    }

    toJson() {
        return JSON.stringify(this.row);
    }
}
