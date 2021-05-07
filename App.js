import React, {useRef} from 'react';
import {StatusBar, useColorScheme, DrawerLayoutAndroid} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Drawer from './components/Drawer/Drawer';
import rootStore from './app/store';
import MainScreen from './components/Main/MainScreen';

const App = () => {
  const drawer = useRef(null);
  const isDarkMode = useColorScheme() === 'dark';

  const {store, persistor} = rootStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition="left"
          renderNavigationView={() => <Drawer refDrawer={drawer} />}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <MainScreen refDrawer={drawer} />
        </DrawerLayoutAndroid>
      </PersistGate>
    </Provider>
  );
};

export default App;
