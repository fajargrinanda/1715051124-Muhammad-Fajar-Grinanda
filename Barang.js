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
class Barang extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
          <View style={styles.container}>
            <Header judul={"Data Barang"} />
            <View style={styles.box1}>
              <View style={styles.barangContainer}>
                <Text style={styles.styleText}>666</Text>
                <Text style={styles.styleText2}>Yeezy</Text>
              </View>
              <View style={styles.barangContainer}>
                <Text style={styles.styleText}>999</Text>
                <Text style={styles.styleText2}>Supreme</Text>
              </View>
              <View style={styles.barangContainer}>
                <Text style={styles.styleText}>888</Text>
                <Text style={styles.styleText2}>Swallow</Text>
              </View>
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
  },
  barangContainer: {
    backgroundColor: "#e8e6e5",
    justifyContent: 'flex-start',
    width: 280,
    height: 100,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    borderRadius: 5
  },
    styleText: {
        fontSize: 18
    },
    styleText2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
  box1: {
    flex: 0.7,
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "space-around",
    flexDirection: "column"
  },
  box2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    paddingLeft: 10,
    justifyContent: "space-around",
    flexDirection: "column",
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
export default Barang;
