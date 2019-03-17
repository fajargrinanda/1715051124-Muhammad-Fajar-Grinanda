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
const gambar = require("./img/fbs.jpg");
class Tentang extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Header judul={"Tentang Kami"} />
                <View style={styles.box1}>
                    <View style={styles.imageContainer}>
                        <Image source={gambar} style={styles.image} />
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.styleText}>Nama: Muhammad Fajar Grinanda </Text>
                        <Text style={styles.styleText}>NIM: 1715051124</Text>
                        <Text style={styles.styleText}>Skills: Editing</Text>
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
        alignItems: "center"
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        position: "relative",
        borderRadius: 7,
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 7
    },
    box1: {
        flex: 1,
        paddingTop: 20,
        marginTop: 10,
        marginLeft: 2,
        flexDirection: "row"
    },
    box2: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
    },
    styleText:{
        marginTop: 10,
        borderWidth: 1,
        padding: 5
    }
});
export default Tentang;
