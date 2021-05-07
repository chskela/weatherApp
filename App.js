import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import rootStore from './app/store';
import MainScreen from './components/Main/MainScreen';

const App = () => {
  const drawer = useRef(null);

  const {store, persistor} = rootStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainScreen refDrawer={drawer} />
      </PersistGate>
    </Provider>
  );
};

export default App;
