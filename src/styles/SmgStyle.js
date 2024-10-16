import SmgJustify from "./SmgJustify";

class SmgStyle {

    constructor() {
        this.object = {};
    }

    static builder() {
        return new SmgStyle();
    }

    static copy(style) {
        if (style instanceof SmgStyle) {
            const newStyle = new SmgStyle();
            newStyle.object = JSON.parse(style.toJson());
            return newStyle;
        }
        return new SmgStyle();
    }

    reset(object = {}) {
        if (typeof (object) === "object") {
            this.object = object;
        }
        return this;
    }

    uniqueClassName() {
        const sortedObject = Object.keys(this.object).sort().reduce((obj, key) => {
            obj[key] = this.object[key];
            return obj;
        }, {});

        let className = "";
        for (const [key, value] of Object.entries(sortedObject)) {
            className += `${key}=${value}|`;
        }
        return className;
    }

    merge(otherStyle) {
        if (otherStyle) {
            this.object = {...this.object, ...(otherStyle.object ?? {})};
        }
        return this;
    }

    isEmpty() {
        return Object.keys(this.object).length === 0;
    }

    toJson() {
        return JSON.stringify(this.object, null, 2);
    }

    fontWidth(value) {
        if (value !== null) {
            this.object.fontWidth = Math.min(Math.max(value, 1), 7);
        }
    }

    fontHeight(value) {
        if (value !== null) {
            this.object.fontHeight = Math.min(Math.max(value, 1), 7);
        }
        return this;
    }

    fontSize(value) {
        this.fontWidth(value);
        this.fontHeight(value);
        return this;
    }

    bold(value = true) {
        if (value !== null) {
            this.object.bold = value;
        }
        return this;
    }

    normalize(value = true) {
        if (value !== null) {
            this.object.normalize = value;
        }
        return this;
    }

    bgInverted(value = true) {
        if (value !== null) {
            this.object.bgInverted = value;
        }
        return this;
    }

    pad(char) {
        if (char !== null && char[0]) {
            this.object.pad = char[0];
        }
        return this;
    }

    align(justify) {
        if (justify !== null) {
            this.object.align = justify;
        }
        return this;
    }

    center() {
        return this.align(SmgJustify.CENTER);
    }

    left() {
        return this.align(SmgJustify.LEFT);
    }

    right() {
        return this.align(SmgJustify.RIGHT);
    }

    charxels(value) {
        if (value !== null) {
            this.object.charxels = Math.max(value, 0);
        }
        return this;
    }

    scale(scale) {
        if (scale !== null) {
            this.object.scale = scale;
        }
        return this;
    }

    width(value) {
        if (value !== null) {
            this.object.width = Math.max(value, 0);
        }
        return this;
    }

    height(value) {
        if (value !== null) {
            this.object.height = Math.max(value, 0);
        }
        return this;
    }

    size(value) {
        this.width(value);
        this.height(value);
        return this;
    }

    charCode(value) {
        if (value !== null) {
            this.object.charCode = value;
        }
        return this;
    }
}

export default SmgStyle;
