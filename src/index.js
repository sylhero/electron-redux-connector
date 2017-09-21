import client from './client';
import server from './server';
import electronRedux from './electronRedux';

const electronReduxConnector = {
    client,
    server,
    electronRedux
};

export {
    electronReduxConnector as
    default, client, server, electronRedux
};
