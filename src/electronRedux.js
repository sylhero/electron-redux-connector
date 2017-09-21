import client from './client';
/*eslint-disable */
const electronRedux = (prefix) => {
    return (store) => {
        return (next) => {
            return (action) => {
                if (action.type && action.type.includes(prefix)) {
                    client.send(action.type, {...action.payload});
                    return;
                }
                next(action);
            };
        };
    };
};

export default electronRedux;
/* eslint-enable */
