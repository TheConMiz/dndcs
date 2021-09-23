const { app, BrowserWindow, screen } = require("electron");

const path = require("path");

const isDev = require('electron-is-dev');

const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer')

let url = require("url");

let win;

let screenSize;

function createWindow() {

    console.log("createWindow() works")
    
    screenSize = screen.getPrimaryDisplay().size

    win = new BrowserWindow({
        width: screenSize.width,
        height: screenSize.height,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true,
        }
    });


    
    win.loadURL(isDev ? 'http://localhost:8080' : url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: "file",
        slashes: true,
        hash: 'baz',
    }));

    // Wait until everything has been rendered before showing the app window
    win.once("ready-to-show", () => {
        // Maximize the window prior to showing it
        win.maximize();
        // Show the prepared window
        win.show();

        win.webContents.openDevTools();
    });

    //TODO: Top menu bar visibility set to false when packaging
    win.setMenuBarVisibility(false);

    win.on("closed", () => {
        // Done to dereference the window object
        win = null;
    });
}

// When everything has been initialised, create the required windows
app.whenReady().then(() => {
    createWindow()

    if (isDev) {
        
        installExtension(REDUX_DEVTOOLS)    
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));
    }
})

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

// When all windows are closed, quit
app.on("window-all-closed", () => {

    // Condition to account for MacOS: common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});