import {Smg} from './Smg';
import {SmgStylizedRow} from './SmgStylizedRow';
import {SmgCell} from "../blocks/text/SmgCell";
import {SmgTextBlock} from "../blocks/text/SmgTextBlock";
import {SmgMapStyles} from "../styles/SmgMapStyles";
import {SmgStyle} from "../styles/SmgStyle";

export class SmgTextLayout {
    constructor(separator = null) {
        this.textBlock = SmgTextBlock.builder(separator);
        this.styles = new SmgMapStyles();
    }

    static build(separator = null) {
        return new SmgTextLayout(separator);
    }

    addText(text, style = null) {
        if (style !== null && style instanceof SmgStyle) {
            const className = style.uniqueClassName();
            this.textBlock.addCell(SmgCell.build(text, className));
            this.styles.setIfNotExists(className, style);
        } else {
            this.textBlock.addText(text ?? "");
        }
        return this;
    }

    addStylizedRow(row) {
        if(row instanceof SmgStylizedRow){
            this.textBlock.addRow(row.getData());
            this.styles.merge(row.getStyles());
        }
        return this;
    }

    addLine(char = " ", customStyle = null) {
        let lineStyle = Smg.pad(char);
        if (customStyle && customStyle instanceof SmgStyle) {
            lineStyle = SmgStyle.copy(customStyle).merge(lineStyle);
        }
        const className = lineStyle.uniqueClassName();
        this.textBlock.addCell(SmgCell.build("", className));
        this.styles.setIfNotExists(className, lineStyle);
        return this;
    }

    getStyles() {
        return this.styles;
    }

    getBlock() {
        return this.textBlock;
    }
}
