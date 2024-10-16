import SmgStyle from "./SmgStyle";

class SmgMapStyles {
    constructor() {
        this.object = {};
        this.globalStyle = SmgStyle.builder();
    }

    static builder() {
        return new SmgMapStyles();
    }

    addGlobalStyle(style) {
        if (style instanceof SmgStyle) {
            this.globalStyle.merge(style);
        }
        return this;
    }

    set(className, style) {
        if (style instanceof SmgStyle && !style.isEmpty() && className !== null) {
            this.object[className] = JSON.parse(style.toJson());
        }
        return this;
    }

    get(className) {
        if (this.has(className)) {
            return SmgStyle.builder().reset(this.object[className]);
        }
        return null;
    }

    remove(className) {
        delete this.object[className];
        return this;
    }

    merge(otherStyles) {
        if (otherStyles instanceof SmgMapStyles) {
            this.object = {...this.object, ...otherStyles.object};
        }
        return this;
    }

    has(className) {
        return className !== null && className in this.object;
    }

    setIfNotExists(className, style) {
        if (!this.has(className)) {
            this.set(className, style);
        }
        return this;
    }

    isEmpty() {
        return Object.keys(this.object).length === 0 && this.globalStyle.isEmpty();
    }

    toJson() {
        if (!this.globalStyle.isEmpty()) {
            this.set("*", this.globalStyle);
        }
        return JSON.stringify(this.object, null, 2);
    }
}

export default SmgMapStyles;
