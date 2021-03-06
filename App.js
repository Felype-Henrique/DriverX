import React from 'react';

import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store'

import Login from './src/pages/Login';
import Type from './src/pages/Steps/type';
import Car from './src/pages/Steps/car';
import Payment from './src/pages/Steps/payment';
import Ride from './src/pages/Ride/index'
import Home from './src/pages/Home';

import { StatusBar } from 'react-native';
import { Container } from './src/styles';



export default function App() {
  return (
    <Provider store={store}>
      <StatusBar/>
      <Routes/>
    </Provider>
      
  );
}

