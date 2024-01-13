import { combineReducers } from 'redux';
import formReducer from './formReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  form: formReducer,
  books: bookReducer,
});

export default rootReducer;
