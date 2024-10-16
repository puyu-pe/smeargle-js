import SmgJustify from "./SmgJustify";

class SmgStyle {

    constructor() {
        this.object = {};
    }

    static builder() {
        return new SmgStyle();
    }

    /**
     * @param {SmgStyle} style
     */
    static copy(style) {
        if (style instanceof SmgStyle) {
            const newStyle = new SmgStyle();
            newStyle.object = JSON.parse(style.toJson());
            return newStyle;
        }
        return new SmgStyle();
    }

    /**
     * @param {Object} object
     */
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

    /**
     * @param {SmgStyle} otherStyle
     */
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

    /**
     * @param {int|null} value
     */
    fontWidth(value) {
        if (value !== null) {
            this.object.fontWidth = Math.min(Math.max(value, 1), 7);
        }
        return this;
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

    /**
     * @param {string|null} char
     */
    pad(char) {
        if (char !== null && char[0]) {
            this.object.pad = char[0];
        }
        return this;
    }

    /**
     * @param {string|null} justify
     */
    align(justify) {
        if (justify !== null) {
            this.object.align = justify;
        }
        return this;
    }

    /**
     * @returns {SmgStyle}
     */
    center() {
        return this.align(SmgJustify.CENTER);
    }

    /**
     * @returns {SmgStyle}
     */
    left() {
        return this.align(SmgJustify.LEFT);
    }

    /**
     * @returns {SmgStyle}
     */
    right() {
        return this.align(SmgJustify.RIGHT);
    }

    /**
     * @param {int|null} value
     */
    charxels(value) {
        if (value !== null) {
            this.object.charxels = Math.max(value, 0);
        }
        return this;
    }

    /**
     * @param {string|null} scale
     */
    scale(scale) {
        if (scale !== null) {
            this.object.scale = scale;
        }
        return this;
    }

    /**
     * @param {int|null} value
     */
    width(value) {
        if (value !== null) {
            this.object.width = Math.max(value, 0);
        }
        return this;
    }

    /**
     * @param {int|null} value
     */
    height(value) {
        if (value !== null) {
            this.object.height = Math.max(value, 0);
        }
        return this;
    }

    /**
     * @param {int|null} value
     */
    size(value) {
        this.width(value);
        this.height(value);
        return this;
    }

    /**
     * @param {string|null} value
     */
    charCode(value) {
        if (value !== null) {
            this.object.charCode = value;
        }
        return this;
    }
}

export default SmgStyle;
