const { app, BrowserWindow } = require('electron');

let win;

const electron = require('electron');

let screenSize;

let path = require("path");

let url = require("url");

const isDev = require('electron-is-dev');

const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

function createWindow() {
    //TODO: Variable screen size, so calibrate after getting comments
    screenSize = electron.screen.getPrimaryDisplay().size;

    win = new BrowserWindow({
        width: screenSize.width * 0.8,
        height: screenSize.height * 0.8,
        show: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (isDev) {
        win.webContents.openDevTools();
 
        installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
    
    win.loadURL(isDev ? 'http://localhost:8080' : url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: "file",
        slashes: true,
        hash: 'baz',
    }));

    // Wait until everything has been rendered before showing the app window
    // win.once("ready-to-show", () => {
    //     // Maximize the window prior to showing it
    //     win.maximize();
    //     // Show the prepared window
    //     win.show();
    // });

    //TODO: Top menu bar visibility set to false when packaging
    win.setMenuBarVisibility(false);

    win.on("closed", () => {
        // Done to dereference the window object
        win = null;
    });
}

// When everything has been initialised, create the required windows
app.on("ready", createWindow);

// When all windows are closed, quit
app.on("window-all-closed", () => {

    // Condition to account for MacOS: common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});