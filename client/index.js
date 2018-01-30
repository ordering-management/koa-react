import './index.css';
import React from 'react';
import { Map } from 'immutable';
import ReactDOM from 'react-dom';
import rootSaga from './rootSagas';
import routes from './page/routes';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
// console.log(ConnectedRouter);
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, routerMiddleware(history))(createStore);

const store = createStoreWithMiddleware(rootReducer, Map({}));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <LocaleProvider locale={zhCN}>
            {renderRoutes(routes)}
        </LocaleProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
// registerServiceWorker();
