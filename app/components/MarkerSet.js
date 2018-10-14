import React, { Component } from 'react';
import { MapView } from 'expo';

const Marker = MapView.Marker

export class MarkerSet extends Component {
    map_func(event, i) {
       return <MapView.Marker key={i} title={event.address} coordinate={event.coordinate}/>
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}