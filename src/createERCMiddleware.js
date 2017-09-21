import Client from 'electron-rpc/client';
// import MiddlewareConstant from './MiddlewareConstant';

/*eslint-disable */
const client = new Client();
const createERCMiddleware = (prefix) => {
    return (store) => {
        return (next) => {
            return (action) => {
                if (action.type && action.type.includes(prefix)) {
                    client.request(action.type, ...action.data);
                    return;
                }
                next(action);
            };
        };
    };
};

export default createERCMiddleware;
/* eslint-enable */
