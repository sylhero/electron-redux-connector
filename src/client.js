import { ipcRenderer } from 'electron';


const listen = (event, handler) => {
    ipcRenderer.on(event, handler);
};

const listenOnce = (event, handler) => {
    ipcRenderer.once(event, handler);
};

const send = (event, data) => {
    ipcRenderer.send(event, data);
};

const sendSync = (event, data) => {
    ipcRenderer.sendSync(event, data);
};
const removeListener = (event, handler) => {
    ipcRenderer.removeListener(event, handler);
};

const removeAllListeners = (event) => {
    ipcRenderer.removeAllListeners(event);
};

const client = {
    listen,
    listenOnce,
    send,
    sendSync,
    removeListener,
    removeAllListeners
};

export default client;

