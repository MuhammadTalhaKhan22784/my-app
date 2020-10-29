import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
  //check to see if the watchList exists in local storage, if not return null
  const localList = () => {
    if (localStorage.getItem('watchList')) {
      return localStorage.getItem('watchList').split(',');
    }
    return null;
  };

  const [watchList, setWatchList] = useState(
    localList() || ['bitcoin', 'ethereum', 'ripple', 'litecoin']
  );

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

  const deleteCoin = coin => {
    setWatchList(
      watchList.filter(el => {
        return el !== coin;
      })
    );
  };

  const addCoin = coin => {
    if (watchList.indexOf(coin === -1)) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};