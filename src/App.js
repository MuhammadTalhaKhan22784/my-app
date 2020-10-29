import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Prices from './Menu items/Prices/Prices';
import Home from './Menu items/Home/Home';
import GetStarted from './Menu items/GetStarted/GetStarted';
import Signin from './Menu items/Signin/Signin';
import HomeDash from './Dashboard/Home-Dashboard/HomeDash';
import CoinDetailPage from "./Dashboard/RobinhoodDashboard/pages/CoinDetailPage";
import { WatchListContextProvider } from "./Dashboard/RobinhoodDashboard/context/watchListContext";
export default () => {
  return (
    <WatchListContextProvider>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/prices">
              <Prices/>
            </Route>
            <Route exact path="/getStarted">
              <GetStarted/>
            </Route>
            <Route exact path="/signin">
              <Signin/>
            </Route>
            <Route exact path="/homedash">
              <HomeDash/>
            </Route>
            <Route exact path="/coins/:id">
              <CoinDetailPage/>
            </Route>
          
          </Switch>
      </Router>
    </WatchListContextProvider>
  );
}

