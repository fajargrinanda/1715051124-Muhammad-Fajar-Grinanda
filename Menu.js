import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Penjualan from "./Penjualan";
import Home from "./Home";
import Barang from "./Barang";
import Tentang from "./Tentang";

const AppContainer = createStackNavigator(
  {
    Utama: {
      screen: Home
    },
    Penjualan: {
      screen: Penjualan
    },
    Barang: {
      screen: Barang
    },
    Tentang: {
      screen: Tentang
    }

  },
  {
    initialRouteName: "Utama"
  },

);

const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
