import {SmgProperties} from '../properties/SmgProperties';
import {SmgStyle} from '../styles/SmgStyle';

export class Smg {
    static blockWidth(charxels) {
        return SmgProperties.builder().setBlockWidth(charxels);
    }

    /**
     * @param {int|null} charxels
     */
    static center(charxels = null) {
        return SmgStyle.builder().center().charxels(charxels);
    }

    /**
     * @param {int|null} charxels
     */
    static left(charxels = null) {
        const style = SmgStyle.builder().left();
        if (charxels) {
            style.charxels(charxels);
        }
        return style;
    }

    /**
     * @param {int|null} charxels
     */
    static right(charxels = null) {
        const style = SmgStyle.builder().right();
        if (charxels) {
            style.charxels(charxels);
        }
        return style;
    }

    static bold(value = true) {
        return SmgStyle.builder().bold(value);
    }

    static normalize(value = true) {
        return SmgStyle.builder().normalize(value);
    }

    /**
     * @param {int|null} value
     */
    static fontWidth(value) {
        return SmgStyle.builder().fontWidth(value);
    }

    /**
     * @param {int|null} value
     */
    static fontHeight(value) {
        return SmgStyle.builder().fontHeight(value);
    }

    /**
     * @param {int|null} value
     */
    static fontSize(value) {
        return SmgStyle.builder().fontSize(value);
    }

    static bgInverted(value = true) {
        return SmgStyle.builder().bgInverted(value);
    }

    /**
     * @param {string|null} value
     */
    static pad(value) {
        return SmgStyle.builder().pad(value);
    }

    /**
     * @param {int|null} value
     */
    static charxels(value) {
        return SmgStyle.builder().charxels(value);
    }

    /**
     * @param {int|null} value
     */
    static width(value) {
        return SmgStyle.builder().width(value);
    }

    /**
     * @param {int|null} value
     */
    static height(value) {
        return SmgStyle.builder().height(value);
    }

    /**
     * @param {int|null} value
     */
    static size(value) {
        return SmgStyle.builder().size(value);
    }

    /**
     * @param {string|null} value
     */
    static scale(value) {
        return SmgStyle.builder().scale(value);
    }

    /**
     * @param {string|null} value
     */
    static charCode(value) {
        return SmgStyle.builder().charCode(value);
    }

    /**
     * @param {int|null} charxels
     */
    static leftBold(charxels = null) {
        const style = SmgStyle.builder().left().bold();
        if (charxels) {
            style.charxels(charxels);
        }
        return style;
    }

    /**
     * @param {int|null} charxels
     */
    static rightBold(charxels = null) {
        return SmgStyle.builder().right().bold().charxels(charxels);
    }

    /**
     * @param {int|null} charxels
     */
    static centerBold(charxels = null) {
        return SmgStyle.builder().center().bold().charxels(charxels);
    }

    static title() {
        return SmgStyle.builder().center().bold().fontSize(2).charxels(1000);
    }

    static subtitle() {
        return SmgStyle.builder().left().bold().charxels(1000);
    }
}
