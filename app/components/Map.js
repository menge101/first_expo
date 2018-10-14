import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker

export default class Map extends Component {
  render() {
    const { region, markers } = this.props
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
      {markers}
      </MapView>
    )
  }
}
const styles = {
  container: {
    width: '100%',
    height: '80%',
  }
}
