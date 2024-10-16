class SmgQrBlock {
    constructor() {
        this.object = {type: "qr"};
        this.qrObject = {};
    }

    static builder() {
        return new SmgQrBlock();
    }

    setData(stringData) {
        if(stringData){
            this.qrObject.data = stringData;
        }
        return this;
    }

    setClass(className) {
        if(className){
            this.qrObject.class = className;
        }
        return this;
    }

    setCorrectionLevel(qrErrorLevel) {
        if(qrErrorLevel){
            this.qrObject.correctionLevel = qrErrorLevel;
        }
        return this;
    }

    setQrType(qrType) {
        if(qrType){
            this.qrObject.type = qrType;
        }
        return this;
    }

    toJson() {
        if (Object.keys(this.qrObject).length !== 0) {
            this.object.qr = this.qrObject;
        }
        return JSON.stringify(this.object);
    }
}

export default SmgQrBlock;
