import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import Routes from './routes';

import * as NavigationService from './services/navigation';
import store from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Provider store={store}>
        <Routes ref={nav => NavigationService.setNavigator(nav)} />
      </Provider>
    </>
  );
}
