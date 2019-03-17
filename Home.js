import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TextInput,
    Platform,
} from "react-native";
import Header from "./Header";
const gambar = require("./img/zalora.png");
class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
          <View style={styles.container}>
                <Header judul={"Aplikasi Kasir"} />
            <View style={styles.box2}>
              <View style={styles.imageContainer}>
                <Image source={gambar} style={styles.image} />
              </View>
            </View>
            <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Penjualan') }>
                    <Text style={styles.buttonText}>Penjualan</Text>
                </TouchableHighlight>
                    <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Barang')}>
                    <Text style={styles.buttonText}>Data Barang</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.box3}>
                    <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Tentang')}>
                    <Text style={styles.buttonText}>Tentang Kami</Text>
                </TouchableHighlight>

            </View>
                <View style={styles.headerBar}>
                    <Text style={styles.headerText}>Footer</Text>
                </View>
          </View>

        );
    }
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    alignItems: "center"
  },
  headerBar: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative"
  },
  imageContainer: {
    //backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    paddingBottom: 20,
    paddingTop: 20,
    position: "relative"
  },
    image: {
        height: 120,
        width: 320
    },
  headerText: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "45%",
    borderRadius: 5,
  },
    button2Style: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "black",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: 300,
        borderRadius: 5
    },
    buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 18
    },
  box1: {
    flex: 0.5,
    width: "100%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  box2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      marginBottom: 120,
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center"
  },
});
export default Home;
