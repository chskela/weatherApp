import React, {useRef} from 'react';
import {StatusBar, useColorScheme, DrawerLayoutAndroid} from 'react-native';

import Drawer from '../Drawer/Drawer';
import MainContent from './MainContent';

export default MainScreen = () => {
  const drawer = useRef(null);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <Drawer refDrawer={drawer} />}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainContent refDrawer={drawer} />
    </DrawerLayoutAndroid>
  );
};
