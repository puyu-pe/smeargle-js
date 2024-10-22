import {SmgRow} from "./SmgRow";
import {SmgCell} from "./SmgCell";
import {SmgBlock} from "../SmgBlock";

export class SmgTextBlock extends SmgBlock{
    constructor(separator = null) {
        super();
        this.object = {type: "text"};
        this.rows = [];
        if (separator && typeof (separator) === "string" && separator.trim() !== "") {
            this.object.separator = separator;
        }
    }

    addText(text) {
        if (text && typeof (text) === "string") {
            this.rows.push(text.trim());
        }
        return this;
    }

    addRow(row) {
        if(row instanceof SmgRow){
            this.rows.push(JSON.parse(row.toJson()));
        }
        return this;
    }

    addCell(cell) {
        if(cell instanceof SmgCell){
            this.rows.push(JSON.parse(cell.toJson()));
        }
        return this;
    }

    static builder(separator = null) {
        return new SmgTextBlock(separator);
    }

    isEmpty() {
        return this.rows.length === 0;
    }

    toJson() {
        if (this.rows.length > 0) {
            this.object.rows = this.rows;
        }
        return JSON.stringify(this.object);
    }
}
