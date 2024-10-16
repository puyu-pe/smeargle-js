import SmgBlock from "./blocks/SmgBlock";
import SmgDrawer from "./opendrawer/SmgDrawer";
import SmgProperties from "./properties/SmgProperties";
import SmgMapStyles from "./styles/SmgMapStyles";

class SmgPrintObject {
    constructor() {
        this.object = {};
        this.data = [];
        this.metadata = {};
    }

    setProperties(properties) {
        const jsonProperties = properties.toJson();
        if (jsonProperties !== null) {
            this.object.properties = JSON.parse(jsonProperties);
        }
        return this;
    }

    addInfo(key, value) {
        if(key){
            this.metadata[key] = value;
        }
        return this;
    }

    static builder() {
        return new SmgPrintObject();
    }

    /**
     * @param {SmgBlock}  block
     */
    addBlock(block) {
        if(block){
            this.data.push(JSON.parse(block.toJson()));
        }
        return this;
    }

    /**
     * @param {string} text
     */
    addText(text) {
        this.data.push(text);
        return this;
    }

    /**
     * @param {SmgDrawer|boolean} openDrawer
     */
    openDrawer(openDrawer = true) {
        if (typeof openDrawer === 'boolean') {
            this.object.openDrawer = openDrawer;
        } else {
            this.object.openDrawer = JSON.parse(openDrawer.toJson());
        }
        return this;
    }

    /**
     * @param {SmgMapStyles} styles
     */
    setStyles(styles) {
        if (styles && styles instanceof SmgMapStyles && !styles.isEmpty()) {
            this.object.styles = JSON.parse(styles.toJson());
        }
        return this;
    }

    toJson() {
        if (this.data.length > 0) {
            this.object.data = this.data;
        }
        this.object = {...this.metadata, ...this.object};
        return JSON.stringify(this.object, null, 2);
    }
}

export default SmgPrintObject;
