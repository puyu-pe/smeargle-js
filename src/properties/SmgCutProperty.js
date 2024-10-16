class SmgCutProperty {
    constructor() {
        this.object = {};
    }

    static builder() {
        return new SmgCutProperty();
    }

    feed(feed) {
        this.object.feed = Math.min(Math.max(feed, 1), 255);
        return this;
    }

    mode(cutMode) {
        if(cutMode){
            this.object.mode = cutMode;
        }
        return this;
    }

    toJson() {
        if (Object.keys(this.object).length === 0) {
            return null;
        }
        return JSON.stringify(this.object);
    }
}

export default SmgCutProperty;
