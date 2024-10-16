import SmgCutProperty from './SmgCutProperty.js';

class SmgProperties {
    constructor() {
        this.object = {};
    }

    static builder() {
        return new SmgProperties();
    }

    setBlockWidth(charxels) {
        this.object.blockWidth = Math.max(0, charxels);
        return this;
    }

    setCut(cutProperty) {
        if(cutProperty instanceof SmgCutProperty){
            const cut = cutProperty.toJson();
            if (cut !== null) {
                this.object.cut = JSON.parse(cut);
            }
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

export default SmgProperties;
