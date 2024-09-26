import { app, BrowserWindow, Notification } from "electron";
import path from "path";
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL("http://localhost:5173/");

  win.webContents.openDevTools();
};

const NOTIFICATION_TITLE = "Basic Notification";
const NOTIFICATION_BODY = "Notification from the Main Process";

function showNotification() {
  new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
  }).show();
}

app
  .whenReady()
  .then(() => {
    createWindow();
  })
  .then(showNotification);
