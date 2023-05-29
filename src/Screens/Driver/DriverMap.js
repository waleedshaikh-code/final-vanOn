import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { colors, parameters } from "../../global/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DriverMap = () => {
  const [location, setLocation] = useState(null);
  const [searchText, setSearchText] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user')
        setUser(jsonValue)
      } catch(e) {
      }
    }
    getUser();
  }, []);
 
  const modifiedEmail = user? user.split("@")[0]:null;
  let uppercaseEmail =modifiedEmail? modifiedEmail.toUpperCase():null;

  useEffect(() => {
    getLocationPermission();
    getCurrentLocation();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }
  };

  const getCurrentLocation = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    } catch (error) {
      console.log("Error getting location", error);
    }
  };

  const handleShareLocation = () => {
    if (location) {
      // Handle sharing of location data
      console.log("Location shared:", location);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#286ef0" />
      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Destress your commute</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                Read a book.Take a nap. Stare out the window
              </Text>
              <View style={styles.button1}>
                <Text style={styles.button1Text}>Ride with {uppercaseEmail}</Text>
              </View>
            </View>
            <View>
              <Image
                style={styles.image1}
                source={require("../../../assets/uberCar.png")}
              />
            </View>
          </View>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {location && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Current Location"
            />
          </MapView>
        )}
        <View style={styles.view1}>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={handleShareLocation}
        >
          <Text style={styles.shareButtonText}>Share Location</Text>
        </TouchableOpacity>
        {/* Stop Sharing Location Button */}
        <TouchableOpacity 
          style={styles.shareButton}
          onPress={handleShareLocation}
        >
          <Text style={styles.shareButtonText}> Stop Sharing </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    margin: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  view1: {
    flexDirection: "row",
    flex: 1,

  },
  map: {
    height: 350,
    marginBottom: -25,
  },
  shareButton: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginLeft: 15,
    width: 150,
    borderRadius: 8,
  },
  shareButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  home: {
    backgroundColor: colors.blue,
    paddingLeft: 20,
    marginTop: 25,
    height: 270,
  },

  text1: {
    color: colors.white,
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    color: colors.white,
    fontSize: 16,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },
  view8: { flex: 4, marginTop: -25 },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button1Text: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  image1: {
    height: 100,
    width: 100,
  },
});

export default DriverMap;
