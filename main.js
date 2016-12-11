const {app, BrowserWindow, globalShortcut} = require('electron')
const path = require('path')
const url = require('url')
//const logger = require('electron-logger') #recompile

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

//Keep the lastbarcode read
let lastBarcode = ''

//Base of the application
let baseUrl = '<base url>'

//params to add to check barcode, the app append barcode to this string
let baseUrlParams = '/?par1=QRCODE&par2='

//Enable scanner
let enabledScan = true

//Timeout to reset connection, no backoff rule
let timeoutForResetConnection = 5000

function createWindow () {
  // Create the browser window with initial dimension
  win = new BrowserWindow({width: 800, height: 600, autoHideMenuBar: true, /*alwaysOnTop: true*/})
  
  resetConnection (baseUrl);

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  //FullScreen
  win.setFullScreen(true)

   // Catch the error on the url opening, list of the errors:
  // https://cs.chromium.org/chromium/src/net/base/net_error_list.h
  win.webContents.on('did-fail-load', (e, errorCode, errorDescription) => {
  	console.log('code : ' + errorCode)
  	console.log('desc: ' + errorDescription)

  	//go to main page after several seconds:
  	setTimeout(function() {
    	resetConnection(baseUrl)
	}, timeoutForResetConnection)
  })

  win.webContents.on('did-navigate-in-page', (e, url) => {
  	console.log('did-navigate-in-page ' + url)
  	evaluateEnableScan(url)
  })

  win.webContents.on('did-navigate', (e, url) => {
  	console.log('did-navigate ' + url)
  	evaluateEnableScan(url)
  })

  //Enable Key Press for all aphabetical characters (MAIUSC) and numbers
  enableKeyPress();
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})


function resetConnection(internalUrl) {
   //enable scannig only in landing pag
   win.loadURL(internalUrl)

  // Open the DevTools.
  //win.webContents.openDevTools()

}

function evaluateEnableScan(url) {
	if (url.indexOf(baseUrlParams) === -1) {
  		enabledScan = true;
  	} else {
  		enabledScan = false;
  	}
}

function enableKeyPress() {

	const retA0 = globalShortcut.register('A', () => {
	append('A');})
	if (!retA0) {console.log('registration failed')}

	const retB1 = globalShortcut.register('B', () => {
	append('B');})
	if (!retB1) {console.log('registration failed')}

	const retC2 = globalShortcut.register('C', () => {
	append('C');})
	if (!retC2) {console.log('registration failed')}

	const retD3 = globalShortcut.register('D', () => {
	append('D');})
	if (!retD3) {console.log('registration failed')}

	const retE4 = globalShortcut.register('E', () => {
	append('E');})
	if (!retE4) {console.log('registration failed')}

	const retF5 = globalShortcut.register('F', () => {
	append('F');})
	if (!retF5) {console.log('registration failed')}

	const retG6 = globalShortcut.register('G', () => {
	append('G');})
	if (!retG6) {console.log('registration failed')}

	const retH7 = globalShortcut.register('H', () => {
	append('H');})
	if (!retH7) {console.log('registration failed')}

	const retI8 = globalShortcut.register('I', () => {
	append('I');})
	if (!retI8) {console.log('registration failed')}

	const retJ9 = globalShortcut.register('J', () => {
	append('J');})
	if (!retJ9) {console.log('registration failed')}

	const retK10 = globalShortcut.register('K', () => {
	append('K');})
	if (!retK10) {console.log('registration failed')}

	const retL11 = globalShortcut.register('L', () => {
	append('L');})
	if (!retL11) {console.log('registration failed')}

	const retM12 = globalShortcut.register('M', () => {
	append('M');})
	if (!retM12) {console.log('registration failed')}

	const retN13 = globalShortcut.register('N', () => {
	append('N');})
	if (!retN13) {console.log('registration failed')}

	const retO14 = globalShortcut.register('O', () => {
	append('O');})
	if (!retO14) {console.log('registration failed')}

	const retP15 = globalShortcut.register('P', () => {
	append('P');})
	if (!retP15) {console.log('registration failed')}

	const retQ16 = globalShortcut.register('Q', () => {
	append('Q');})
	if (!retQ16) {console.log('registration failed')}

	const retR17 = globalShortcut.register('R', () => {
	append('R');})
	if (!retR17) {console.log('registration failed')}

	const retS18 = globalShortcut.register('S', () => {
	append('S');})
	if (!retS18) {console.log('registration failed')}

	const retT19 = globalShortcut.register('T', () => {
	append('T');})
	if (!retT19) {console.log('registration failed')}

	const retU20 = globalShortcut.register('U', () => {
	append('U');})
	if (!retU20) {console.log('registration failed')}

	const retV21 = globalShortcut.register('V', () => {
	append('V');})
	if (!retV21) {console.log('registration failed')}

	const retW22 = globalShortcut.register('W', () => {
	append('W');})
	if (!retW22) {console.log('registration failed')}

	const retX23 = globalShortcut.register('X', () => {
	append('X');})
	if (!retX23) {console.log('registration failed')}

	const retY24 = globalShortcut.register('Y', () => {
	append('Y');})
	if (!retY24) {console.log('registration failed')}

	const retZ25 = globalShortcut.register('Z', () => {
	append('Z');})
	if (!retZ25) {console.log('registration failed')}

	const ret052 = globalShortcut.register('0', () => {
	append('0');})
	if (!ret052) {console.log('registration failed')}

	const ret153 = globalShortcut.register('1', () => {
	append('1');})
	if (!ret153) {console.log('registration failed')}

	const ret254 = globalShortcut.register('2', () => {
	append('2');})
	if (!ret254) {console.log('registration failed')}

	const ret355 = globalShortcut.register('3', () => {
	append('3');})
	if (!ret355) {console.log('registration failed')}

	const ret456 = globalShortcut.register('4', () => {
	append('4');})
	if (!ret456) {console.log('registration failed')}

	const ret557 = globalShortcut.register('5', () => {
	append('5');})
	if (!ret557) {console.log('registration failed')}

	const ret658 = globalShortcut.register('6', () => {
	append('6');})
	if (!ret658) {console.log('registration failed')}

	const ret759 = globalShortcut.register('7', () => {
	append('7');})
	if (!ret759) {console.log('registration failed')}

	const ret860 = globalShortcut.register('8', () => {
	append('8');})
	if (!ret860) {console.log('registration failed')}

	const ret961 = globalShortcut.register('9', () => {
	append('9');})
	if (!ret961) {console.log('registration failed')}

	//on the return load second step of the application
	const retReturn62 = globalShortcut.register('Return', () => {

		if (lastBarcode && lastBarcode !== '') {
			var internalBarcode = lastBarcode
			lastBarcode = ''
			console.log('Fire: ' + internalBarcode)
			var finalUrl = baseUrl + baseUrlParams + internalBarcode
			console.log('final url: ' + finalUrl)
			resetConnection(finalUrl)
		}
	})

	if (!retReturn62) {console.log('registration failed')}
}

function append(element) {

	if (enabledScan) {
		lastBarcode += element	
	}
	
}