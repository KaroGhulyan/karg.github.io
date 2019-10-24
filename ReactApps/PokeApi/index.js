import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import List from './components/list/List';
import Skills from './components/pokemon-skills/skills';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>

            <div>
                <Header />
                <Switch>
                    <Route path='/' component={List} exact />
                    <Route path='/pokemon/:id' component={Skills} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

