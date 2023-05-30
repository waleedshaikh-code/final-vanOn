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
  import React, { useState } from "react";
  import Icon from "react-native-vector-icons/Ionicons";
  import axios from "axios";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const backgroundImage = require("../../../assets/login/images.jpeg");
  
  const StudentSignup = ({ navigation }) => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setUserName] = useState("");
    const [phone, setPhoneNumber] = useState("");
  
    const handleEmailChange = (text) => {
      setEmail(text);
    }
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    }

    const handleUserNameChange = (text) => {
      setUserName(text);
    }

    const handlePhoneNumberChange = (text) => {
      setPhoneNumber(text);
    }
  
    const handleSubmit = () => {
      console.log(email, password, name, phone);
      try{
        // set condition to check if all fields are filled
        if (email === "" || password === "" || name === "" || phone === "") {
          ToastAndroid.show('Please fill all the fields!', ToastAndroid.SHORT);
        }
        else{
        axios.post("http://192.168.4.118:2000/createStudent", {
          email,
          password,
          name,
          phone,
        });
        ToastAndroid.show('Student Register Successfully!', ToastAndroid.SHORT);
        navigation.navigate("StudentLogin");
      }
      } catch (error) {
        console.error("Error: ", error);  
      }
      // if (email === "" || password === "" || userName === "" || phoneNumber === "") {
      //   Alert.alert("Please fill all the fields");
      // } else {
      //   axios.post("http://192.168.2.108:2000/createStudent", {
      //     email,
      //     password,
      //     userName,
      //     phoneNumber,
      //   });
      //   Alert.alert("Student Registered Successfully");
      //   navigation.navigate("StudentLogin");
      // }

    };
  
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#ffffff" }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          style={{
            height: Dimensions.get("window").height / 3.5,
            backgroundColor: "black",
          }}
          source={backgroundImage}
        >
          <View style={styles.brandView}>
            {/* <Icon
              name="location-sharp"
              style={{ color: "#ffffff", fontSize: 100 }}
            /> */}
            <Text style={styles.brandViewText}>Van on</Text>
          </View>
        </ImageBackground>
  
        <View style={styles.bottomView}>
          <View style={{ padding: 40 }}>
            <Text style={{ color: "#286ef0", fontSize: 34 }}>Register</Text>
            <Text>
              Already have an account? 
              <Text style={{ color: "red", fontStyle: "italic" }} >
                Login
              </Text>
            </Text>
            <View style={{ marginTop: 30 }}>

            <Text style={{ color: "#4632A1", fontSize: 17 }}>UserName</Text>
              <TextInput
                style={styles.email}
                placeholder="Enter your username"
                autoCapitalize="none"
                onChangeText={handleUserNameChange}
                autoCorrect={false}
                value={name}
              />

              <Text style={{ color: "#4632A1", fontSize: 17, marginTop: 20 }}>Email</Text>
              <TextInput
                style={styles.email}
                placeholder="Enter your email"
                autoCapitalize="none"
                onChangeText={handleEmailChange}
                autoCorrect={false}
                value={email}
              />

              <Text style={{ color: "#4632A1", fontSize: 17, marginTop: 20 }}>Phone Number</Text>
              <TextInput
                style={styles.email}
                placeholder="Enter your phone number"
                autoCapitalize="none"
                onChangeText={handlePhoneNumberChange}
                autoCorrect={false}
                value={phone}
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
  
            {/* <View style={{ flex: 1 }}>
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
            </View> */}
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
      // textTransform: "uppercase",
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
  
  export default StudentSignup;
  