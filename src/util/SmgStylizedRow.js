import SmgRow from '../blocks/text/SmgRow';
import SmgMapStyles from '../styles/SmgMapStyles';
import SmgStyle from '../styles/SmgStyle';

class SmgStylizedRow {
    constructor() {
        this.row = new SmgRow();
        this.styles = new SmgMapStyles();
    }

    static build() {
        return new SmgStylizedRow();
    }

    add(text, style = null) {
        if (style !== null && style instanceof SmgStyle) {
            const className = style.uniqueClassName();
            this.row.add(text ?? "", className);
            this.styles.setIfNotExists(className, style);
        } else {
            this.row.add(text ?? "");
        }
        return this;
    }

    getStyles() {
        return this.styles;
    }

    getData() {
        return this.row;
    }
}

export default SmgStylizedRow;
