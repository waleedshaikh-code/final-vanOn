import { View, Text, StyleSheet, StatusBar, Image  } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';
import { colors, parameters } from "../../global/styles";


const DriverMap = ({navigation}) => {
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


  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user')
      navigation.navigate("Login");
    } catch(e) {
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile2.png")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{uppercaseEmail}</Text>
      <Text style={styles.bio}>D-12 Driver</Text>
      <Button
        title="Logout"

        onPress={handleLogout}
        Style={{
          backgroundColor: colors.primary,
          width: "100%",
          borderRadius: 10,
          marginTop: 20,
        }}
      />
    </View>
 
  )
}

export default DriverMap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
  },
});
