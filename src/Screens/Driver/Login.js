import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
  ImageBackground,
  ToastAndroid
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = require("../../../assets/login/images.jpeg");

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    navigation.navigate("DriverSignup");
  }

  const handleEmailChange = (text) => {
    setEmail(text);
  }

  const handlePasswordChange = (text) => {
    setPassword(text);
  }
    
  const handleSubmit = async () => {
    console.log(email, password);

    try {
      const response = await axios.post('http://192.168.0.114:2000/driver', {
        email,
        password,
      });
      await AsyncStorage.setItem('user', JSON.stringify(email));
      ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT);
      navigation.navigate("DriverMap");
   
    } catch (error) {
      ToastAndroid.show("Invalid Email or Password!", ToastAndroid.SHORT);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        style={{
          height: Dimensions.get("window").height / 2.5,
          backgroundColor: "black",
        }}
        source={backgroundImage}
      >
        <View style={styles.brandView}>
          <Icon
            name="location-sharp"
            style={{ color: "#ffffff", fontSize: 100 }}
          />
          <Text style={styles.brandViewText}>Van on</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: "#286ef0", fontSize: 34 }}>Drivers</Text>
          <Text>
            Don't have an account? 
            <Text style={{ color: "red", fontStyle: "italic" }} onPress={handlePress}>
               Register Now
            </Text>
          </Text>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: "#4632A1", fontSize: 17 }}>Email</Text>
            <TextInput
              style={styles.email}
              placeholder="Enter your email"
              autoCapitalize="none"
              onChangeText={handleEmailChange}
              autoCorrect={false}
              value={email}
            />

            <Text style={{ color: "#4632A1", fontSize: 17, marginTop: 20 }}>
              Password
            </Text>
            <TextInput
              style={styles.password}
              placeholder="Enter your password"
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
              value={password}
            />
            <View style={styles.forgetPassView}>
              <Text
                style={{
                  color: "#4632A1",
                  fontSize: 14,
                  marginLeft: 160,
                  marginTop: -10,
                }}
              >
                Forgot Password?
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#286ef0",
                padding: 10,
                borderRadius: 10,
                marginTop: -20,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              onPress={handleSubmit}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#4632A1",
                fontSize: 17,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              Or
            </Text>

            <View style={styles.socialLoginView}>
              <TouchableOpacity icon style={styles.shadowBtn} rounded>
                <Icon
                  name="logo-facebook"
                  style={{ color: "#4267b2", fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity icon style={styles.shadowBtn} rounded>
                <Icon
                  name="logo-twitter"
                  style={{ color: "#00acee", fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity icon style={styles.shadowBtn} rounded>
                <Icon
                  name="logo-google"
                  style={{ color: "#db4a39", fontSize: 40 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  password: {
    borderBottomWidth: 1,
    borderBottomColor: "#4632A1",
    paddingBottom: 10,
  },
  email: {
    borderBottomWidth: 1,
    borderBottomColor: "#4632A1",
    paddingBottom: 10,
  },
  forgetPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
  },
  socialLoginView: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    marginTop: 20,
  },
});

export default Login;
