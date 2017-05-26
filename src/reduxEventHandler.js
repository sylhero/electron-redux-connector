import Client from 'electron-rpc/client';

const client = new Client();

const reduxEventHandler = (store, reduxEventIdentifier) => {
    client.on(reduxEventIdentifier, (error, body) => {
        store.dispatch(body);
    });
};


export default reduxEventHandler;
