import React, { useReducer, Reducer, ReducerAction } from "react";
import StoreContext from "./StoreContext";
import { StoreType, getDefaultStoreType } from "./StoreType";

const Store: React.FC<{
  rootReducer: Reducer<StoreType, ReducerAction<any>>;
}> = ({ rootReducer, children }) => {
  const initialState = getDefaultStoreType();
  return (
    <StoreContext.Provider value={useReducer(rootReducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
