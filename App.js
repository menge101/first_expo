import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Map from './app/components/Map';
import { MarkerSet } from './app/components/MarkerSet';
import { Location, Permissions } from 'expo';
import DataService from './app/services/data';


const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {
  state = {
    region: {
        latitude: 0.0,
        longitude: 0.0,
        ...deltas
    },
    markers: []
  }

  buildMarkers = async () => {
      hashes = await this.getHashes()
      markers = <MarkerSet data={hashes}/>
      this.setState({ markers })
  }

  componentWillMount() {
    this.getLocationAsync();
    this.buildMarkers();
  }

  getHashes = async () => {
      const { latitude, longitude } = this.state.region;
      const userLocation = { latitude, longitude };
      const hashes = await DataService.getHashes();
      console.log("Locations:")
      console.log(hashes)
      return hashes
  }

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
      await this.setState({ region });
      await this.getHashes(location);
    }

  render() {
    const { region, markers } = this.state;
    console.log('State at time of render:')
    console.log(this.state)
    return (
      <SafeAreaView style={styles.container}>
        <Map
          region={region}
          markers={markers}
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
