import {SmgTextLayout} from './SmgTextLayout';
import {SmgStylizedRow} from './SmgStylizedRow';
import {SmgImageBlock} from "../blocks/img/SmgImageBlock";
import {SmgProperties} from "../properties/SmgProperties";
import {SmgPrintObject} from "../SmgPrintObject";
import {SmgMapStyles} from "../styles/SmgMapStyles";
import {SmgStyle} from "../styles/SmgStyle";
import {SmgQrBlock} from "../blocks/qr/SmgQrBlock";

export class SmgTicket {
    constructor(properties = null, styles = null) {
        this.printObject = SmgPrintObject.builder();
        this.styles = styles ?? new SmgMapStyles();
        this.properties = properties ?? SmgProperties.builder();
        this.currentLayout = SmgTextLayout.build();
    }

    static builder(properties = null, styles = null) {
        if (properties instanceof SmgProperties && styles instanceof SmgMapStyles) {
            return new SmgTicket(properties, styles);
        }
        return new SmgTicket(null, null);
    }

    addInfo(key, value) {
        if (key) {
            this.printObject.addInfo(key, value);
        }
        return this;
    }

    addText(text, style = null) {
        if (text) {
            this.currentLayout.addText(text, style);
        }
        return this;
    }

    addRow(row) {
        if (row instanceof SmgStylizedRow) {
            this.currentLayout.addStylizedRow(row);
        }
        return this;
    }

    addLine(char = " ", customStyle = null) {
        if (customStyle instanceof SmgStyle) {
            this.currentLayout.addLine(char, customStyle);
        }
        return this;
    }

    addTextLayout(layout) {
        this.dumpLayout();
        const block = layout.getBlock();
        if (!block.isEmpty()) {
            this.printObject.addBlock(block);
            this.styles.merge(layout.getStyles());
        }
        return this;
    }

    addImage(img, style = null) {
        if (img && img instanceof SmgImageBlock) {
            this.dumpLayout();
            if (style && style instanceof SmgStyle) {
                const className = style.uniqueClassName();
                img.setClass(className);
                this.styles.set(className, style);
            }
            this.printObject.addBlock(img);
        }
        return this;
    }

    addQrCode(qr, style = null) {
        if (qr && qr instanceof SmgQrBlock) {
            this.dumpLayout();
            if (style && style instanceof SmgStyle) {
                const className = style.uniqueClassName();
                qr.setClass(className);
                this.styles.set(className, style);
            }
            this.printObject.addBlock(qr);
        }
        return this;
    }

    /**
     * @param {SmgDrawer|boolean} openDrawer
     */
    openDrawer(openDrawer = true) {
        this.printObject.openDrawer(openDrawer);
        return this;
    }

    dumpLayout() {
        const block = this.currentLayout.getBlock();
        if (!block.isEmpty()) {
            this.printObject.addBlock(block);
            this.styles.merge(this.currentLayout.getStyles());
            this.currentLayout = SmgTextLayout.build();
        }
    }

    getPrintObject() {
        return this.printObject;
    }

    toJson() {
        this.dumpLayout();
        this.printObject.setStyles(this.styles);
        this.printObject.setProperties(this.properties);
        return this.printObject.toJson();
    }
}
