import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'; 
import { Students } from './students';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialForm } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            students: Students,
            ...createForms({
                form: InitialForm
            })
        }),
        applyMiddleware(thunk, logger) 
    );

    return store;
}