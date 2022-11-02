"use strict";

// intergration des composants "app" et "browerWindow" de electron
const { app, BrowserWindow } = require('electron');

// utilise l'application nodejs
const port = require('./server');

// Creation de la fonction de demarrage
// => doit créer une fenetre d'application
const createWindow = () => {

    // def des propriété de la fenetre d'application
    const win = new BrowserWindow({
        wigth: 900,
        height: 800,
    });

    // 
    // win.loadFile('index.html')
    win.loadURL(`http://localhost:${port}`);

}

app.whenReady().then(() => createWindow());