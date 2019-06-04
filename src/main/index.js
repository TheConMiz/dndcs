const { app, BrowserWindow, ipcMain, shell } = require('electron');

let win;

const electron = require('electron');

let screenSize;

let path = require("path");

let url = require("url");

// Database Stuff
const dbPath = path.resolve(__dirname, './../common/data/database/DnDCS.db');

const isDevelopment = process.env.NODE_ENV !== 'production';

let knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

function createWindow() {
    //TODO: Variable screen size, so calibrate after getting comments
    screenSize = electron.screen.getPrimaryDisplay().size;

    win = new BrowserWindow({
        width: screenSize.width * 0.75,
        height: screenSize.height * 0.75,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (isDevelopment) {
        win.webContents.openDevTools();
    }

    if (isDevelopment) {
        win.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    }

    win.loadURL(url.format({
        pathname: path.join(__dirname, './../../dist/renderer/index.html'),
        protocol: "file",
        slashes: true
    }));

    // Wait until everything has been rendered before showing the app window
    win.once("ready-to-show", () => {
        win.show();
    })

    //TODO: Top menu bar visibility set to false when packaging
    win.setMenuBarVisibility(false);

    // Database Test
    ipcMain.on("mainWindowLoaded", () => {
        let result = knex.select("*").from("Conditions");

        result.then((rows) => {
            win.webContents.send("resultSent", rows);
        });
    });

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