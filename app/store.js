import { createStore, combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from 'redux-persist/es/storage';
// const config = {
//     key: 'root',
//     whitelist: [
      
//     ],
//     storage: AsyncStorage,
//   };
const createReducer = () => {
   var reducers = {};
   var appReducer = combineReducers(reducers)
   return appReducer;
}
  

const configureStore = () => {
    const store = createStore(
      createReducer(),
      undefined,
    );
  
    // const persistor = persistStore(store);
    // store.persistor = persistor;
    // persistor.purge();
    return { store };
  };
  
  const { store } = configureStore();

  export { store};