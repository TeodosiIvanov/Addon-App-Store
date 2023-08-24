"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
let cssProperties = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-shadow", "box-sizing", "caption-side", "clear", "clip", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "@font-face", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "hanging-punctuation", "height", "justify-content", "@keyframes", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "max-height", "max-width", "@media", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-overflow", "text-shadow", "text-transform", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "width", "word-break", "word-spacing", "word-wrap", "z-index"];
let shortAttrObj = {
    a: "animation",
    b: "bottom",
    c: "color",
    d: "display",
    f: "float",
    o: "overflow",
    p: "padding",
    r: "right",
    t: "top",
    ad: "animation-duration",
    bc: "background-color",
    bi: "background-image",
    br: "border-radius",
    bs: "box-sizing",
    bis: "border-image-source",
    cs: "column-span",
    cr: "counter-reset",
    ff: "font-family",
    fs: "font-size",
    fw: "font-weight",
    ls: "list-style",
    mh: "max-height",
    mw: "max-width",
    ts: "transform-style",
    td: "transition-duration",
    to: "text-overflow",
    ws: "white-space"
};
function getCssProperties() {
    cssProperties.forEach((item) => {
        let arr = item.split("-");
        let str = "";
        arr.forEach(item2 => str += item2.slice(0, 1));
        shortAttrObj[str] || (shortAttrObj[str] = item);
    });
}
getCssProperties();
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "preview-style" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.languages.registerHoverProvider('*', {
        provideHover(document, position, token) {
            // 在这里编写展示内容的逻辑
            const range = document.getWordRangeAtPosition(position, /[\w:!%#-]+/);
            const word = document.getText(range);
            let styleArr = word.split(":");
            let attr = shortAttrObj[styleArr[0]] || styleArr[0]; // 属性名称如果是简写, 替换成全拼
            if (cssProperties.includes(attr) && styleArr[1]) {
                let value = styleArr[1].replace(/-/g, " ").replace(/!/g, " !important");
                let text = `.${word.replace(/(:|#|%|!)/g, '\\$1')} {\n${" ".repeat(4) + attr}: ${value};\n}`;
                const hoverContent = new vscode.MarkdownString();
                hoverContent.appendCodeblock(text, "css");
                // hoverContent.appendMarkdown(text, "css");
                // hoverContent.isTrusted = true;
                return new vscode.Hover(hoverContent, range);
            }
        }
    }));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map