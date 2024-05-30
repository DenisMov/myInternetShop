import {createStore} from 'redux';
import reducer from '../reducer/reducer';

const index = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default index;