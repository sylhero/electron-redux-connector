import createERCMiddleware from './createERCMiddleware';
import ElectronEventHandler from './ElectronEventHandler';
import reduxEventHandler from './reduxEventHandler';

const ElectronReduxConnector = {
    createERCMiddleware,
    ElectronEventHandler,
    reduxEventHandler
};

export {
    ElectronReduxConnector as
    default, createERCMiddleware, ElectronEventHandler, reduxEventHandler
};
