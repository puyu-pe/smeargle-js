import { SmgImageBlock } from "./src/blocks/img/SmgImageBlock";
import { SmgQrType } from "./src/blocks/qr/SmgQrType";
import { SmgQrErrorLevel } from "./src/blocks/qr/SmgQrErrorLevel";
import { SmgQrBlock } from "./src/blocks/qr/SmgQrBlock";
import { SmgCell } from "./src/blocks/text/SmgCell";
import { SmgRow } from "./src/blocks/text/SmgRow";
import { SmgTextBlock } from "./src/blocks/text/SmgTextBlock";
import { SmgDrawer } from "./src/opendrawer/SmgDrawer";
import { SmgDrawerPin } from "./src/opendrawer/SmgDrawerPin";
import { SmgCutMode } from "./src/properties/SmgCutMode";
import { SmgCutProperty } from "./src/properties/SmgCutProperty";
import { SmgProperties } from "./src/properties/SmgProperties";
import { SmgJustify } from "./src/styles/SmgJustify";
import { SmgMapStyles } from "./src/styles/SmgMapStyles";
import { SmgScale } from "./src/styles/SmgScale";
import { SmgStyle } from "./src/styles/SmgStyle";
import { Smg } from "./src/util/Smg";
import { SmgStylizedRow } from "./src/util/SmgStylizedRow";
import { SmgTextLayout } from "./src/util/SmgTextLayout";
import { SmgTicket } from "./src/util/SmgTicket";
import { SmgPrintObject } from "./src/SmgPrintObject";

if (typeof window !== 'undefined') {
    window.SmeargleJs = window.SmeargleJs || {};
    window.SmeargleJs.SmgImageBlock = SmgImageBlock;
    window.SmeargleJs.SmgQrType = SmgQrType;
    window.SmeargleJs.SmgQrErrorLevel = SmgQrErrorLevel;
    window.SmeargleJs.SmgQrBlock = SmgQrBlock;
    window.SmeargleJs.SmgCell = SmgCell;
    window.SmeargleJs.SmgRow = SmgRow;
    window.SmeargleJs.SmgTextBlock = SmgTextBlock;
    window.SmeargleJs.SmgDrawer = SmgDrawer;
    window.SmeargleJs.SmgDrawerPin = SmgDrawerPin;
    window.SmeargleJs.SmgCutMode = SmgCutMode;
    window.SmeargleJs.SmgCutProperty = SmgCutProperty;
    window.SmeargleJs.SmgProperties = SmgProperties;
    window.SmeargleJs.SmgJustify = SmgJustify;
    window.SmeargleJs.SmgMapStyles = SmgMapStyles;
    window.SmeargleJs.SmgScale = SmgScale;
    window.SmeargleJs.SmgStyle = SmgStyle;
    window.SmeargleJs.Smg = Smg;
    window.SmeargleJs.SmgStylizedRow = SmgStylizedRow;
    window.SmeargleJs.SmgTextLayout = SmgTextLayout;
    window.SmeargleJs.SmgTicket = SmgTicket;
    window.SmeargleJs.SmgPrintObject = SmgPrintObject;
}

export {
    SmgImageBlock,
    SmgQrType,
    SmgQrErrorLevel,
    SmgQrBlock,
    SmgCell,
    SmgRow,
    SmgTextBlock,
    SmgDrawer,
    SmgDrawerPin,
    SmgCutMode,
    SmgCutProperty,
    SmgProperties,
    SmgJustify,
    SmgMapStyles,
    SmgScale,
    SmgStyle,
    Smg,
    SmgStylizedRow,
    SmgTextLayout,
    SmgTicket,
    SmgPrintObject
};
