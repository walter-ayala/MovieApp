import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from './src/navigation/StackNavigator';
import {persistor, store} from './src/store/index';

const App = () => {
  const navigationRef = useRef(null);

  const onReady = async () => {
    RNBootSplash.hide();
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef} onReady={onReady}>
          <StackNavigator />
          <FlashMessage position="top" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
