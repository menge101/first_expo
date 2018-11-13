import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DataService from '../services/data';
import { GeoJsonMarkerSet as MarkerSet } from './MarkerSet';
import { MapView } from 'expo';

const { Marker } = MapView

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.regionUpdate = this.regionUpdate.bind(this)
    this.buildMarkers = this.buildMarkers.bind(this)
    this.getHashes = this.getHashes.bind(this)
    this.state = { markers: [], region: this.props.initialRegion }
  }

  buildMarkers = async (region) => {
      hashes = await this.getHashes(region)
      markers = <MarkerSet data={hashes}/>
      this.setState({ markers })
  }

  componentDidMount() {
    markers = this.buildMarkers(this.props.initialRegion)
    this.state = { markers }
  }

  getHashes = async (region) => {
      const hashes = await DataService.getHashes(region);
      console.log("Locations:")
      console.log(hashes)
      return hashes
  }

  regionUpdate(region) {
    console.log("Region Updated!")
    console.log(region)
    markers = this.buildMarkers(region)
    this.setState({region: region})
  }

  render() {
    const { initialRegion, markers } = this.props
    return (
      <MapView
        style={styles.container}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
        onRegionChangeComplete={e => this.regionUpdate(e)}
      >
      {this.state.markers}
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
