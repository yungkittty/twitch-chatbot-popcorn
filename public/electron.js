const electron = require("electron");
const path = require("path");

const app = electron.app;

let appWindow;

const createAppWindow = () => {
  appWindow = new electron.BrowserWindow({ width: 800, height: 600 });
  let appWindowUrl;
  if (process.env.NODE_ENV !== "development") {
    appWindowUrl = `file://${path.join(__dirname, "../build/index.html")}`;
  } else {
    appWindow.webContents.openDevTools();
    appWindowUrl = "http://localhost:3000";
  }
  appWindow.loadURL(appWindowUrl);
  appWindow.on("closed", () => (appWindow = null));
};

app.on("ready", createAppWindow);

app.on("window-all-closed", () => {
  if (process.platform === "darwin") return;
  app.quit();
});

app.on("activate", () => {
  if (appWindow !== null) return;
  createAppWindow();
});
