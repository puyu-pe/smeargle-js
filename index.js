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
    window.SmeargleJs.ImageBlock = SmgImageBlock;
    window.SmeargleJs.QrType = SmgQrType;
    window.SmeargleJs.QrErrorLevel = SmgQrErrorLevel;
    window.SmeargleJs.QrBlock = SmgQrBlock;
    window.SmeargleJs.Cell = SmgCell;
    window.SmeargleJs.Row = SmgRow;
    window.SmeargleJs.TextBlock = SmgTextBlock;
    window.SmeargleJs.Drawer = SmgDrawer;
    window.SmeargleJs.DrawerPin = SmgDrawerPin;
    window.SmeargleJs.CutMode = SmgCutMode;
    window.SmeargleJs.CutProperty = SmgCutProperty;
    window.SmeargleJs.Properties = SmgProperties;
    window.SmeargleJs.Justify = SmgJustify;
    window.SmeargleJs.MapStyles = SmgMapStyles;
    window.SmeargleJs.Scale = SmgScale;
    window.SmeargleJs.Style = SmgStyle;
    window.SmeargleJs.StylizedRow = SmgStylizedRow;
    window.SmeargleJs.TextLayout = SmgTextLayout;
    window.SmeargleJs.Ticket = SmgTicket;
    window.SmeargleJs.PrintObject = SmgPrintObject;
    Object.assign(window.SmeargleJs, Smg);
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
