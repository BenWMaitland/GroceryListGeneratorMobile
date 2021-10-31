import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import authReducer from './reducers/auth';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <GlobalContext.Provider value={{authState, authDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
