(()=>{"use strict";var e={549:e=>{e.exports=require("vscode")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=n(549);e.activate=function(e){t.workspace.onWillSaveTextDocument((e=>{if(!e.document.isDirty)return;const n=t.workspace.getConfiguration().get("headerLicense.license")||"",o=t.window.activeTextEditor;null==o||o.edit((i=>{console.log("javascript"!==(null==o?void 0:o.document.languageId)&&"typescript"!==(null==o?void 0:o.document.languageId)&&"typescriptreact"!==(null==o?void 0:o.document.languageId)),"javascript"!==(null==o?void 0:o.document.languageId)&&"typescript"!==(null==o?void 0:o.document.languageId)&&"typescriptreact"!==(null==o?void 0:o.document.languageId)||e.document.getText().includes(n)||i.insert(new t.Position(0,0),n+"\n")}))})),t.workspace.onDidCreateFiles((e=>{const n=t.workspace.getConfiguration().get("headerLicense.license")||"",o=e.files[0].fsPath,i=t.Uri.file(o);t.workspace.openTextDocument(i).then((e=>{t.window.showTextDocument(e).then((()=>{const e=t.window.activeTextEditor;"javascript"!==(null==e?void 0:e.document.languageId)&&"typescript"!==(null==e?void 0:e.document.languageId)&&"typescriptreact"!==(null==e?void 0:e.document.languageId)||null==e||e.edit((e=>{e.insert(new t.Position(0,0),n+"\n")}))}))}))}))},e.deactivate=function(){}})(),module.exports=o})();