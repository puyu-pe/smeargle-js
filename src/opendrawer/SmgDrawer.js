class SmgDrawer {

    constructor() {
        this.object = {};
    }

    static builder() {
        return new SmgDrawer();
    }

    pin(value) {
        this.object.pin = value
        return this;
    }

    t1(value) {
        if (typeof (value) === "number") {
            this.object.t1 = Math.min(Math.max(value, 0), 255);
        }
        return this;
    }

    t2(value) {
        if (typeof (value) === "number") {
            this.object.t2 = Math.min(Math.max(value, 0), 255);
        }
        return this;
    }

    reset(object = {}) {
        this.object = object;
        return this;
    }

    toJson() {
        return JSON.stringify(this.object, null, 2);
    }
}

export default SmgDrawer;
