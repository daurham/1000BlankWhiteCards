import React, { useContext, useState, useMemo} from 'react';

// import App from './components/App.jsx';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export default function Context() {
  const [positions, getPositions] = useState();

  function updatePostitions() {
    getPositions((id) => id + 1);
  }

  useEffect(() => (
    axios.get('/position')
      .then((result) => {
        const { data } = result;
        getPositions(id);
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

