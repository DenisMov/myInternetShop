import React from 'react';
import { Provider } from 'react-redux';
import index from '../../store';
import AppList from '../appList/AppList';
import AppHeader from "../appHeader/AppHeader";
import Categories from '../appList/Categories';
import ShowFullItem from '../showFullItem/showFullItem';


const App = () => {
    return (
        <Provider store={index}>
            <div className="app">
                <AppHeader/>
                
                <div className="app__content">
                    <Categories/>
                    <AppList/>
                    <ShowFullItem/>
                </div>
         </div>
        </Provider>
    );
}

export default App;


