import React, { Component } from 'react';
import { MapView } from 'expo';
var convert = require('color-convert');

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

export class ColoredMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(event, i) {
       return (
        <MapView.Marker
            key={i}
            title={event.address}
            coordinate={event.coordinate}
            pinColor={this.hue(i)}
        />)
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}