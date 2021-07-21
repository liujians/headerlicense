/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
/*
 * Licensed Materials - Property of ROOTCLOUD
 * THIS MODULE IS "RESTRICTED MATERIALS OF ROOTCLOUD"
 * (c) Copyright ROOTCLOUD Inc. 2021 All Rights Reserved
 *
 * The source code for this program is not published or
 * otherwise divested of its trade secrets
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // 	const temp = `/*
    // 	* Licensed Materials - Property of ROOTCLOUD
    // 	* THIS MODULE IS "RESTRICTED MATERIALS OF ROOTCLOUD"
    // 	* (c) Copyright ROOTCLOUD Inc. 2021 All Rights Reserved
    // 	*
    // 	* The source code for this program is not published or
    // 	* otherwise divested of its trade secrets
    // 	*/
    // `
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "headerlicense" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('headerlicense.helloWorld', () => {
    // 	// The code you place here will be executed every time your command is executed
    // 	// Display a message box to the user
    // 	vscode.window.showInformationMessage('welcome headerLicense!');
    // });
    vscode.workspace.onWillSaveTextDocument(file => {
        if (!file.document.isDirty)
            return;
        const license = vscode.workspace.getConfiguration().get('headerLicense.license') || "";
        const template = license;
        const editor = vscode.window.activeTextEditor;
        editor === null || editor === void 0 ? void 0 : editor.edit(editBuilder => {
            console.log((editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'javascript' && (editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'typescript' && (editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'typescriptreact');
            if ((editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'javascript' && (editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'typescript' && (editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'typescriptreact')
                return;
            if (!file.document.getText().includes(template)) {
                editBuilder.insert(new vscode.Position(0, 0), template + "\n");
            }
        });
        // vscode.window.showInformationMessage('保存了');sss
    });
    vscode.workspace.onDidCreateFiles((file) => {
        const license = vscode.workspace.getConfiguration().get('headerLicense.license') || "";
        const template = license;
        const filePath = file.files[0].fsPath;
        const openPath = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(openPath).then((doc) => {
            vscode.window.showTextDocument(doc).then(() => {
                const editor = vscode.window.activeTextEditor; // 每次运行选中文件
                if ((editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'javascript' && (editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'typescript' && (editor === null || editor === void 0 ? void 0 : editor.document.languageId) !== 'typescriptreact')
                    return;
                editor === null || editor === void 0 ? void 0 : editor.edit(editBuilder => {
                    editBuilder.insert(new vscode.Position(0, 0), template + "\n");
                });
            });
        });
    });
    // context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map