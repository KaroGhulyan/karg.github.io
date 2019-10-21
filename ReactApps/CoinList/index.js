import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import List from './components/list/list';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';






const App = () => {
  const title = 'React Coin';
  
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
          <Route path='/' component={List} exact/>
          <Route path='/currency/:id' component={Detail} exact/>
          <Route  component={NotFound} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);