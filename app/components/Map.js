import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const { Marker } = MapView

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = { region: this.props.region }
    this.regionUpdate = this.regionUpdate.bind(this)
  }

  regionUpdate(region) {
    console.log("Region Updated!")
    console.log(region)
    this.setState({region: region})
  }

  render() {
    const { region, markers } = this.props
    return (
      <MapView
        style={styles.container}
        initialRegion={region}
        showsUserLocation
        showsMyLocationButton
        onRegionChangeComplete={e => this.regionUpdate(e)}
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
