"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodingWaifuPanel = void 0;
const vscode_1 = require("vscode");
const getUri_1 = require("../utilities/getUri");
const getNonce_1 = require("../utilities/getNonce");
const child_process_1 = require("child_process");
const vscode = require("vscode");
class CodingWaifuPanel {
    constructor(panel, extensionUri) {
        this._disposables = [];
        this._panel = panel;
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
        this._setWebviewMessageListener(this._panel.webview);
    }
    static render(extensionUri) {
        if (CodingWaifuPanel.currentPanel) {
            // If the webview panel already exists reveal it
            CodingWaifuPanel.currentPanel._panel.reveal(vscode_1.ViewColumn.One);
        }
        else {
            // If a webview panel does not already exist create and show a new one
            const panel = vscode_1.window.createWebviewPanel(
            // Panel view type
            "showCodingWaifu", 
            // Panel title
            "CodingWaifu", 
            // The editor column the panel should be displayed in
            vscode_1.ViewColumn.One, 
            // Extra panel configurations
            {
                // Enable JavaScript in the webview
                enableScripts: true,
                retainContextWhenHidden: true,
                // Restrict the webview to only load resources from the `out` and `webview-ui/build` directories
                localResourceRoots: [
                    vscode_1.Uri.joinPath(extensionUri, "out"),
                    vscode_1.Uri.joinPath(extensionUri, "webview-ui/build"),
                ],
            });
            CodingWaifuPanel.currentPanel = new CodingWaifuPanel(panel, extensionUri);
        }
    }
    /**
     * Cleans up and disposes of webview resources when the webview panel is closed.
     */
    dispose() {
        CodingWaifuPanel.currentPanel = undefined;
        // Dispose of the current webview panel
        this._panel.dispose();
        // Dispose of all disposables (i.e. commands) for the current webview panel
        while (this._disposables.length) {
            const disposable = this._disposables.pop();
            if (disposable) {
                disposable.dispose();
            }
        }
    }
    /**
     * Defines and returns the HTML that should be rendered within the webview panel.
     *
     * @remarks This is also the place where references to the React webview build files
     * are created and inserted into the webview HTML.
     *
     * @param webview A reference to the extension webview
     * @param extensionUri The URI of the directory containing the extension
     * @returns A template string literal containing the HTML that should be
     * rendered within the webview panel
     */
    _getWebviewContent(webview, extensionUri) {
        // The CSS file from the React build output
        const stylesUri = (0, getUri_1.getUri)(webview, extensionUri, ["webview-ui", "build", "assets", "index.css"]);
        // The JS file from the React build output
        const scriptUri = (0, getUri_1.getUri)(webview, extensionUri, ["webview-ui", "build", "assets", "index.js"]);
        const nonce = (0, getNonce_1.getNonce)();
        // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
        return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; media-src https:; img-src https: data: ; script-src ${webview.cspSource} https: blob: 'unsafe-eval'; connect-src https: blob:; style-src ${webview.cspSource} https:; font-src https:;" />
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <title>Waifu</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
    }
    /**
     * Sets up an event listener to listen for messages passed from the webview context and
     * executes code based on the message that is recieved.
     *
     * @param webview A reference to the extension webview
     * @param context A reference to the extension context
     */
    _setWebviewMessageListener(webview) {
        webview.onDidReceiveMessage((message) => {
            switch (message.command) {
                case "stage":
                    (0, child_process_1.exec)("git add .", { cwd: vscode.workspace.workspaceFolders[0].uri.path }, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`error: ${error}`);
                            CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                                command: "error",
                            });
                            return;
                        }
                        CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                            command: "stageFinish",
                        });
                        return;
                    });
                    break;
                case "stagepull":
                    (0, child_process_1.exec)("git pull", { cwd: vscode.workspace.workspaceFolders[0].uri.path }, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`error: ${error}`);
                            CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                                command: "error",
                            });
                            return;
                        }
                        CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                            command: "stagepullFinish",
                        });
                        return;
                    });
                    break;
                case "pull":
                    (0, child_process_1.exec)("git pull", { cwd: vscode.workspace.workspaceFolders[0].uri.path }, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`error: ${error}`);
                            CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                                command: "error",
                            });
                            return;
                        }
                        CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                            command: "pullFinish",
                        });
                        return;
                    });
                    break;
                case "commit":
                    (0, child_process_1.exec)("git commit -m " + message.commitMessage, { cwd: vscode.workspace.workspaceFolders[0].uri.path }, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`error: ${error}`);
                            return;
                        }
                        CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                            command: "commitFinish",
                        });
                        return;
                    });
                    break;
                case "push":
                    (0, child_process_1.exec)("git push", { cwd: vscode.workspace.workspaceFolders[0].uri.path }, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`error: ${error}`);
                            return;
                        }
                        CodingWaifuPanel.currentPanel._panel.webview.postMessage({
                            command: "pushFinish",
                        });
                        return;
                    });
                    break;
            }
        }, undefined, this._disposables);
    }
}
exports.CodingWaifuPanel = CodingWaifuPanel;
//# sourceMappingURL=CodingWaifuPanel.js.map