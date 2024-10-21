import {SmgBlock} from '../SmgBlock.js';

export class SmgImageBlock extends SmgBlock{
    constructor() {
        super();
        this.object = { type: "img" };
        this.imgObject = {};
    }

    static builder() {
        return new SmgImageBlock();
    }

    setPath(localPath) {
        if(localPath){
            this.imgObject.path = localPath;
        }
        return this;
    }

    setClass(className) {
        if(className){
            this.imgObject.class = className;
        }
        return this;
    }

    toJson() {
        if (Object.keys(this.imgObject).length !== 0) {
            this.object.img = this.imgObject;
        }
        return JSON.stringify(this.object);
    }
}
