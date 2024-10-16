class SmgCell {
    constructor(text, className = null) {
        this.object = {};
        this.object.text = text;

        if (className && typeof (className) === "string" && className.trim() !== "") {
            this.object.class = className;
        }
    }

    static build(text, className = null) {
        if (text && typeof (text) === "string") {
            return new SmgCell(text.trim(), className);
        }
        return new SmgCell("", null);
    }

    toJson() {
        return JSON.stringify(this.object);
    }
}

export default SmgCell;
