import { ipcMain } from 'electron';

const listen = (event, handler) => {
    ipcMain.on(event, handler);
};

const listenOnce = (event, handler) => {
    ipcMain.once(event, handler);
};

const send = (webContents, channel, data) => {
    webContents.send(channel, data);
};

const removeListener = (event, handler) => {
    ipcMain.removeListener(event, handler);
};

const removeAllListeners = (event) => {
    ipcMain.removeAllListeners(event);
};

const server = {
    listen,
    send,
    listenOnce,
    removeListener,
    removeAllListeners
};

export default server;

