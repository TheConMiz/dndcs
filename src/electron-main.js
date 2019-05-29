const { app, BrowserWindow} = require('electron');

let win;

const electron = require('electron');

let screenSize;

function createWindow() {
    //TODO: Variable screen size, so calibrate after getting comments
    screenSize = electron.screen.getPrimaryDisplay().size;
    win = new BrowserWindow({
        width: screenSize.width * 0.75,
        height: screenSize.height * 0.75,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // End of variable screen size

    win.loadFile("./src/index.html");

    //TODO: Open Dev tools on load. Remove it when packaging
    win.webContents.openDevTools();

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