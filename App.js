import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Map from './app/components/Map';
import { Location, Permissions } from 'expo';


const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const fixedRegion = {
  latitude: 40.460392,
  longitude: -79.919404,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
  ...deltas
}

export default class App extends React.Component {
  getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied'
        });
      }

      let location = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        ...deltas
      };
      await this.getHashes(location);
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Map
          initialRegion={fixedRegion}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
