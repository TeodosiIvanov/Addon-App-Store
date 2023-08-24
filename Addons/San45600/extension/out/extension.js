"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const vscode = require("vscode");
const CodingWaifuPanel_1 = require("./panels/CodingWaifuPanel");
function activate(context) {
    vscode.workspace.onDidSaveTextDocument((document) => {
        if (document.uri.scheme === "file") {
            CodingWaifuPanel_1.CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                command: "save",
                path: document.fileName,
            });
        }
    });
    const showCodingWaifuCommand = vscode_1.commands.registerCommand("coding-waifu.showWebview", () => {
        CodingWaifuPanel_1.CodingWaifuPanel.render(context.extensionUri);
    });
    // Add command to the extension context
    context.subscriptions.push(showCodingWaifuCommand);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map