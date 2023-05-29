// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation';
import { OriginContextProvider,DestinationContextProvider } from './src/context/context';

// const Stack = createStackNavigator();

function App() {
  return (
    <DestinationContextProvider>
<OriginContextProvider>
    <Navigation />
    </OriginContextProvider>
    </DestinationContextProvider>
  );
}


export default App;


