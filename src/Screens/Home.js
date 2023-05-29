import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Fontisto } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} >
        <Text style={styles.inputText}>Login As a Driver</Text>
      </TouchableOpacity>
      <FontAwesome5.Button
        name="shuttle-van"
        size={70}
        onPress={() => navigation.navigate("Login")}
        color="white"
        backgroundColor="#134b5f"
        style={{marginBottom:20}}
      />

      <TouchableOpacity onPress={() => navigation.navigate("StudentLogin")}>
        <Text style={styles.inputText}>Login As a Student</Text>
      </TouchableOpacity>
      <Fontisto.Button
        name="person"
        size={70}
        onPress={() => navigation.navigate("StudentLogin")}
        color="white"
        backgroundColor="#134b5f"
      />

      <StatusBar style="auto" />

      {/* <Login /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#134b5f",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 25,
    color: "white",
    paddingBottom: 20,
    lineHeight: 35,
    fontFamily: "sans-serif",
    fontWeight: "bold"
  },
});

export default Login;
