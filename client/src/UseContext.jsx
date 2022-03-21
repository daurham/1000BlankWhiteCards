import React, { useContext, useState, useMemo, useEffect } from 'react';
import App from './components/App.jsx';
import axios from 'axios';


const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export default function Context({}) {
  const [positions, getPositions] = useState();

  // function updatePostitions() {
  //   getPositions(() => );
  // }

  useEffect(() => (
    axios.get('/positions')
      .then((result) => {
        const { data } = result;
        getPositions(data);
      })
  ), []);

  const value = useMemo(() => ({
    positions, getPositions,
  }), [positions]);

  return !positions ? null : (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

