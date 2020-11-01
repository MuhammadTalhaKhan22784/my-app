import React, { useState } from 'react';
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
import RickAdvisory from './Menu items/Company/RickAdvisory';
import PrivacyPolicy from './Menu items/Company/PrivacyPolicy';
import { purple } from '@material-ui/core/colors';
export default () => {

  const [color, setColor] = useState([]);

  if (color == "") {
    setColor("purple")
  }
  
  return (
    <div className={"appColor " + color}>
    <WatchListContextProvider>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home bgColor={setColor}/>
            </Route>
            <Route exact path="/prices">
              <Prices bgColor={setColor}/>
            </Route>
            <Route exact path="/getStarted">
              <GetStarted bgColor={setColor}/>
            </Route>
            <Route exact path="/signin">
              <Signin bgColor={setColor}/>
            </Route>
            <Route exact path="/homedash">
              <HomeDash />
            </Route>
            <Route exact path="/coins/:id">
              <CoinDetailPage/>
            </Route>
            <Route exact path="/rickadvisory">
              <RickAdvisory bgColor={setColor}/>
            </Route>
            <Route exact path="/privacypolicy">
              <PrivacyPolicy bgColor={setColor}/>
            </Route>
          </Switch>
      </Router>
    </WatchListContextProvider>
    </div>
  );
}

