# Electron Redux Connector
A simple wrapper over electron ipc api. 

## client
- listen(event, handler)
- listenOnce(event, handler)
- send(event, data)
- sendSync (event, data)
- removeListener(event, handler)
- removeAllListeners(event)
## server
- listen(event, handler)
- send(webContents, channel, data)
- listenOnce(event, handler)
- removeListener(event, handler)
- removeAllListeners(event)

## middleware
```
import { electronRedux } from 'electron-redux-connector';
middlewares = [electronRedux(ELECTRON_MIDDLEWARE_PREFIX), thunk ...] // this middle should be palced as the first middleware then redux will send action with this prefix to electron
```
## index.js
```
import { client } from 'electron-redux-connector';
client.listen(ELECTRON_LISTENER_CHANNEL, (event, arg) => {
    store.dispatch(arg);
});
```


