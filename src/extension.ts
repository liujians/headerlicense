/*
 * Licensed Materials - Property of ROOTCLOUD
 * THIS MODULE IS "RESTRICTED MATERIALS OF ROOTCLOUD"
 * (c) Copyright ROOTCLOUD Inc. 2021 All Rights Reserved
 *
 * The source code for this program is not published or
 * otherwise divested of its trade secrets
 */
import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
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

	vscode.workspace.onWillSaveTextDocument(file=>{
		if (!file.document.isDirty) return
		const license:string = vscode.workspace.getConfiguration().get('headerLicense.license')||"";
		const template:string = license;
		const editor = vscode.window.activeTextEditor;
		editor?.edit(editBuilder=>{
			console.log(editor?.document.languageId !== 'javascript'&&editor?.document.languageId !== 'typescript'&&editor?.document.languageId !== 'typescriptreact')
			if(editor?.document.languageId !== 'javascript'&&editor?.document.languageId !== 'typescript'&&editor?.document.languageId !== 'typescriptreact') return;
			if(!file.document.getText().includes(template)){
				editBuilder.insert(new vscode.Position(0, 0), template+"\n")
			}
		})
		// vscode.window.showInformationMessage('保存了');sss
	})

	vscode.workspace.onDidCreateFiles((file) => {
		const license:string = vscode.workspace.getConfiguration().get('headerLicense.license')||"";
		const template:string = license;
		const filePath = file.files[0].fsPath
		const openPath = vscode.Uri.file(filePath)
		vscode.workspace.openTextDocument(openPath).then((doc) => {
			vscode.window.showTextDocument(doc).then(() => {
					const editor = vscode.window.activeTextEditor // 每次运行选中文件
					if(editor?.document.languageId !== 'javascript'&&editor?.document.languageId !== 'typescript'&&editor?.document.languageId !== 'typescriptreact') return;
					editor?.edit(editBuilder=>{
							editBuilder.insert(new vscode.Position(0, 0), template+"\n")
					})
			})
		})
	})

	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
