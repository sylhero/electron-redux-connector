import Server from 'electron-rpc/server';

class ElectronEventHanlder {
    constructor(webContents, reduxEventIdentifier) {
        this.server = new Server();
        this.reduxEventIdentifier = reduxEventIdentifier;
        this.server.configure(webContents);
    }

    listenEvent = (action, actionHandlerFunction) => {
        this.server.on(action, actionHandlerFunction);
    };

    sendEvent = (value) => {
        this.server.send(this.reduxEventIdentifier, value);
    }
}


export default ElectronEventHanlder;
