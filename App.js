import React, {useRef} from 'react';
import {StatusBar, useColorScheme, DrawerLayoutAndroid} from 'react-native';
import {Provider} from 'react-redux';

import Drawer from './components/Drawer/Drawer';
import store from './app/store';
import MainScreen from './components/Main/MainScreen';

const App = () => {
  const drawer = useRef(null);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <Drawer refDrawer={drawer} />}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainScreen refDrawer={drawer} />
      </DrawerLayoutAndroid>
    </Provider>
  );
};

export default App;
