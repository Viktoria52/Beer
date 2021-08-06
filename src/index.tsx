import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/state';
import Main from './Pages/Main';
import PaginationBeer from './Components/Pagination/Pagination';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ColumnChart from './Pages/ColumnChart';
import Description from './Pages/Description';

ReactDOM.render(
  <Provider store={store} >
   <Router>
    <Switch>
          <Route path="/main">
          <PaginationBeer />
            <Main />
          </Route>
          <Route path='/barChart'>
            <ColumnChart />
          </Route>
          {/* <Route path='/description'>
            <Description />
          </Route> */}
        </Switch>
    </Router>
    
  </Provider>,

  document.getElementById('root')
);


