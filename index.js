const electron = require('electron');

const { app, BrowserWindow } = electron; // same as if called electron.app to app and electron.BrowserWindow

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});