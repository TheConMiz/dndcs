// Database call test
const electron = require('electron');

const ipc = electron.ipcRenderer;

document.addEventListener("DOMContentLoaded", () => {
    ipc.send("mainWindowLoaded");

    ipc.on("resultSent", (evt, result) => {
        let resultEl = document.getElementById("app");

        for (var i = 0; i < result.length; ++i) {
            resultEl.innerHTML += "<b>" + result[i].name.toString() + "</b>" + ": " + result[i].desc1.toString() + "<br/>" + "<br/>";
        }
    })
});