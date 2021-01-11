let sqlite3 = require('sqlite3').verbose();

const path = require('path')

const { ipcMain } = require("electron")



let dbPath =path.resolve(__dirname, './data/database/DnDCS.db')

// if (isDev) {
//     console.log("DEV MODE")
//     dbPath = path.resolve(__dirname, './data/database/DnDCS.db')
// }


// else {
//     console.log("PROD MODE")
//     dbPath = path.resolve(__dirname, "/resources/app.asar.unpacked/public/data/database/DnDCS.db");
// }


let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {

        console.error(err.message);
    }

    console.log('Connected to the DnDCS database.');
});


db.serialize(() => {

    db.each(`select * from Spell`, (err, row) => {
        if (err) {
        
            console.error(err.message);
        
        }

        else {
            
            console.log(row)

        }

    });
});

db.close();