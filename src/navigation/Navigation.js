import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import DriverMap from "../Screens/Driver/DriverMap";
import StudentMap from "../Screens/Student/StudentMap";
import StudentLogin from "../Screens/Student/StudentLogin";
import StudentSignup from "../Screens/Student/StudentSignup";
import DriverSignup from "../Screens/Driver/DriverSignup";
import Login from "../Screens/Driver/Login";
import DriverProfile from "../Screens/Driver/DriverProfile";
import  MaterialCommunityIcons  from "@expo/vector-icons/MaterialCommunityIcons";
import RequestScreen from "../Screens/Student/RequestScreen";
import DestinationScreen from "../Screens/Student/DestinationScreen";
import StudentProfile from "../Screens/Student/StudentProfile";
import ChatGpt from "../Screens/Student/ChatGpt";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DriverHome() {
  return (
    <Tab.Navigator
      initialRouteName="DriverMap"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="DriverMap"
        component={DriverMap}
        options={{
          title: "Driver Map",
         tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DriverProfile"
        component={DriverProfile}
        options={{
          title: "Driver Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DriverMap" component={DriverHome} />
        <Stack.Screen name="DriverSignup" component={DriverSignup} />
        <Stack.Screen name="DriverLogin" component={Login} />
        <Stack.Screen name="StudentMap" component={StudentMap} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="StudentSignup" component={StudentSignup} />
        <Stack.Screen name="RequestScreen" component={RequestScreen} />
        <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
        <Stack.Screen name="ChatGpt" component={ChatGpt} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
