import {SmgImageBlock, SmgImageBlock as ImageBlock} from "./src/blocks/img/SmgImageBlock";
import {SmgQrType, SmgQrType as QrType} from "./src/blocks/qr/SmgQrType";
import {SmgQrErrorLevel, SmgQrErrorLevel as QrErrorLevel} from "./src/blocks/qr/SmgQrErrorLevel";
import {SmgQrBlock, SmgQrBlock as QrBlock} from "./src/blocks/qr/SmgQrBlock";
import {SmgCell, SmgCell as Cell} from "./src/blocks/text/SmgCell";
import {SmgRow, SmgRow as Row} from "./src/blocks/text/SmgRow";
import {SmgTextBlock, SmgTextBlock as TextBlock} from "./src/blocks/text/SmgTextBlock";
import {SmgDrawer, SmgDrawer as Drawer} from "./src/opendrawer/SmgDrawer";
import {SmgDrawerPin, SmgDrawerPin as DrawerPin} from "./src/opendrawer/SmgDrawerPin";
import {SmgCutMode, SmgCutMode as CutMode} from "./src/properties/SmgCutMode";
import {SmgCutProperty, SmgCutProperty as CutProperty} from "./src/properties/SmgCutProperty";
import {SmgProperties, SmgProperties as Properties} from "./src/properties/SmgProperties";
import {SmgJustify, SmgJustify as Justify} from "./src/styles/SmgJustify";
import {SmgMapStyles, SmgMapStyles as MapStyles} from "./src/styles/SmgMapStyles";
import {SmgScale, SmgScale as Scale} from "./src/styles/SmgScale";
import {SmgStyle, SmgStyle as Style} from "./src/styles/SmgStyle";
import {Smg as Helper} from "./src/util/Smg";
import {SmgStylizedRow, SmgStylizedRow as StylizedRow} from "./src/util/SmgStylizedRow";
import {SmgTextLayout, SmgTextLayout as TextLayout} from "./src/util/SmgTextLayout";
import {SmgTicket, SmgTicket as Ticket} from "./src/util/SmgTicket";
import {SmgPrintObject, SmgPrintObject as PrintObject} from "./src/SmgPrintObject";

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
    Object.assign(window.SmeargleJs, Helper);
}

export {
    ImageBlock,
    QrType,
    QrErrorLevel,
    QrBlock,
    Cell,
    Row,
    TextBlock,
    Drawer,
    DrawerPin,
    CutMode,
    CutProperty,
    Properties,
    Justify,
    MapStyles,
    Scale,
    Style,
    StylizedRow,
    TextLayout,
    Ticket,
    PrintObject
};

export const {
    blockWidth,
    center,
    left,
    right,
    bold,
    normalize,
    fontWidth,
    fontHeight,
    fontSize,
    bgInverted,
    pad,
    charxels,
    width,
    height,
    size,
    scale,
    charCode,
    leftBold,
    rightBold,
    centerBold,
    title,
    subtitle
} = Helper;
