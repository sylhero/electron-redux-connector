import { ipcMain } from 'electron';

const listen = (event, handler) => {
    ipcMain.on(event, handler);
};

const listenOnce = (event, handler) => {
    ipcMain.once(event, handler);
};


const removeListener = (event, handler) => {
    ipcMain.removeListener(event, handler);
};

const removeAllListeners = (event) => {
    ipcMain.removeAllListeners(event);
};

const Client = {
    listen,
    listenOnce,
    removeListener,
    removeAllListeners
};

export default Client;

