import { combineReducers } from 'redux';
import firebaseReducers from './firebaseReducers';


const rootReducers = combineReducers({
    user: firebaseReducers,
});

export default rootReducers;
