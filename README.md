<div align="center" width="100%">
  <img width="30%" src="logo.png" alt="imagen smeargle"/>
</div>

```textmate
   ▄▄▄▄▄   █▀▄▀█ ▄███▄   ██   █▄▄▄▄   ▄▀  █     ▄███▄   
  █     ▀▄ █ █ █ █▀   ▀  █ █  █  ▄▀ ▄▀    █     █▀   ▀  
▄  ▀▀▀▀▄   █ ▄ █ ██▄▄    █▄▄█ █▀▀▌  █ ▀▄  █     ██▄▄    
 ▀▄▄▄▄▀    █   █ █▄   ▄▀ █  █ █  █  █   █ ███▄  █▄   ▄▀ 
              █  ▀███▀      █   █    ███      ▀ ▀███▀   
             ▀             █   ▀                        
                          ▀                             
```

![Npm Licence](https://img.shields.io/npm/l/%40puyu.pe%2Fsmeargle-js?registry_uri=https%3A%2F%2Fregistry.npmjs.org%2F)
![NPM Version](https://img.shields.io/npm/v/%40puyu.pe%2Fsmeargle-js)

[Smeargle](https://www.youtube.com/watch?v=Y9DENCQMSgQ) es un conjunto de utilidades y clases
escrita en vanilla javascript según las especificaciones en formato json
de [SweetTicketDesign](https://github.com/puyu-pe/SweetTicketDesign/tree/develop)
para el diseño de tickets que seran emitidas a ticketeras termicas
con la ayuda de [PukaHTTP](https://github.com/puyu-pe/puka-http).

## Indice :card_index_dividers:

1. [Hello World](#hello-word-bookmark_tabs)
2. [Layouts Texto](#texto)
3. [Layout Imagenes](#imagenes)
4. [Layout Qr](#qr)
5. [Estilos](#estilos)
6. [Configuración Ticket](#configuración-ticket)

## Comenzando :rocket:

Instalación via npm

```shell
npm i @puyu.pe/smeargle-js
```

![NPM Downloads](https://img.shields.io/npm/dm/%40puyu.pe%2Fsmeargle-js)

Mediante CDN (ultima versión)

```html
<script src="https://unpkg.com/@puyu.pe/smeargle-js/dist/smeargle.min.js"></script>
```

Mediante CDN (versión especifica), mas seguro.

```html
<script src="https://unpkg.com/@puyu.pe/smeargle-js@1.1.0/dist/smeargle.min.js"
        integrity="sha384-ScgopMBvmZbxcWHv8RK4CzyGjmBNlG/dg48GYR20TQ6Jr8PAuUQeYX+IoGSizaLC"
        crossorigin="anonymous"
></script>
```


## Hello word :bookmark_tabs:

```javascript
const printer = Object.freeze({
    "name": "192.168.1.40",
    "type": "ethernet"
});

const jsonData = SmeargleJs.Ticket.builder()
    .addInfo("printer", printer)
    .addText("hello world", SmeargleJs.center())
    .toJson()

// your function to send print job to Puka
sendToPuka(jsonData)
```

## Layouts :toolbox:

### Texto

Para el diseño de texto, se tiene a disposición los siguientes
metodos

```javascript
SmeargleJs.Ticket.builder()
    .addText("texto", styleOptional)
    .addRow(stylezedRow)
    .addLine(charOptional, styleOptional)
    .addTextLayout(textLayout)
```

Los estilos son opcionales, [ver lista completa](#estilos).

#### Ejemplo

```javascript
const header = SmeargleJs.StylizedRow.build()
    .add("CAN", SmeargleJs.charxels(4))
    .add("DESCRIPCIÓN")
    .add("TOTAL", SmeargleJs.charxels(7));

const firstRow = SmeargleJs.StylizedRow.build()
    .add("3", SmeargleJs.charxels(4))
    .add("arroz")
    .add("39.20", SmeargleJs.charxels(7));

SmeargleJs.Ticket.builder()
    .addText("PUYU", SmeargleJs.title())
    .addText("Fecha 07/06/2024", SmeargleJs.left())
    .addLine() // simple line
    .addRow(header)
    .addLine("-", SmeargleJs.bold())
    .addRow(firstRow)
```

### Imagenes

* La ruta debe ser un ruta local en la pc donde esta instalado PukaHTTP.
* Se puede omitir configurar la ruta con setPath, puka inyectara el logo según su configuración.

```javascript
const logo = SmeargleJs.ImageBlock.builder()
    .setPath("/home/user/downloads/logo.png");

const defaultLogo = SmeargleJs.ImageBlock.builder();

const json = SmeargleJs.Ticket.builder()
    .addImage(logo, SmeargleJs.center().width(240).height(190))
    .addImage(defaultLogo, SmeargleJs.right())
    .toJson()
```

### Qr

* QrErrorLevel por defecto es Q.
* QrType por defecto es IMG, por cuestiones de compatibilidad.
* Por defecto el qr estara centrado.
* Por defecto el ancho del qr es de 290 en formato QrType.IMG

Importante!, si QrType se configura en NATIVE, entonces el ancho maximo
es de 16, siendo 16 un tamaño muy grande y 1 uno muy pequeño.

```javascript
const qr = SmeargleJs.QrBlock.builder()
    .setData("20450523381|01|F001|00000006|0|9.00|30/09/2019|6|sdfsdfsdf|")
    .setCorrectionLevel(SmeargleJs.QrErrorLevel.L)
    .setQrType(SmeargleJs.QrType.NATIVE);

const json = SmeargleJs.Ticket.builder()
    .addQrCode(qr, SmeargleJs.right().width(4))
    .toJson()
```

## Estilos

Los estilos configurables para texto son:
```javascript

const customStyle = SmeargleJs.Style.builder()
    .bold()
    .normalize()
    .charxels(8)
    .fontHeight(2)
    .fontWidth(2)
    .fontSize(2)
    .bgInverted()
    .pad("*")
    .center()
    .right()
    .left()
    .align(SmeargleJs.Justify.CENTER);
```

Los estilos configurables para imagenes y qr son:

```javascript
const customStyle = SmeargleJs.Style.builder()
    .center()
    .right()
    .left()
    .align(SmeargleJs.Justify.CENTER)
    .width(290)
    .height(290)
    .scale(SmeargleJs.Scale.SMOOTH)
    .size(290)
```

Adicionalmente SmeargleJs dispone de varios metodos que acortan la inicialización
de un objeto Style, los siguientes metodos construyen un objeto Style internamente.

```javascript
SmeargleJs.center(4)
SmeargleJs.right(8)
SmeargleJs.left(7)
SmeargleJs.bold()
SmeargleJs.scale(SmeargleJs.Scale.SMOOTH)
SmeargleJs.charxels(8)
SmeargleJs.centerBold()
SmeargleJs.title()
SmeargleJs.normalize()
SmeargleJs.fontWidth(2)
SmeargleJs.fontHeight(2)
SmeargleJs.fontSize(2)
SmeargleJs.bgInverted()
SmeargleJs.pad("*")
SmeargleJs.width(290)
SmeargleJs.height(290)
SmeargleJs.size(290)
SmeargleJs.leftBold()
SmeargleJs.rightBold()
SmeargleJs.subtitle()
```

## Configuración Ticket

* La configuración es mediante el metodo builder de la clase SmeargleJs.Ticket
* Se puede configurar el numero de caractares máximo en una linea en el papel termico (blockWidth)
* Se puede configurar el metodo de corte: feed y mode
* Se puede agregar estilos globales mediante MapStyles

```javascript
const properties = SmeargleJs.Properties.builder()
    .setBlockWidth(48)
    .setCut(SmeargleJs.CutProperty.builder()
        .feed(4)
        .mode(SmeargleJs.CutMode.FULL)
    )

const styles = SmeargleJs.MapStyles.builder()
    .addGlobalStyle(SmeargleJs.normalize());

const ticket = SmeargleJs.Ticket.builder(properties, styles);
```

Normalmente solo sera necesario configurar el número de caracteres máximo y
algun estilo global

```javascript
const styles = SmeargleJs.MapStyles.builder()
    .addGlobalStyle(SmeargleJs.normalize());

const ticket = SmeargleJs.Ticket.builder(SmeargleJs.blockWidth(48), styles);
```




























