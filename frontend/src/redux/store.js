import { createStore, applyMiddleware } from "redux";
import reducers from "./rootReducer.js";
import rootSaga from "../sagas/index.js";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare, logger];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);
