import React, { Component } from 'react';
import { MapView } from 'expo';
import { GeoJsonHashMarker, GrouperMarker, HashMarker, SimpleColoredMarker, SimpleSvgMarker } from './SvgMarker'
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

export class SvgMarkerSet extends Component {
    map_func(event, i) {
       return (
        <SimpleSvgMarker
          key={i}
          title={event.address}
          coordinate={event.coordinate}
          datetime={event.date} />
        )
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}

export class DebugSvgMarkerSet extends Component {
    render() {
        marker = this.props.data[0]
        coords = marker.coordinate
        a = <MapView.Marker
              key='1'
              title={marker.address}
              coordinate={marker.coordinate}
              pinColor='#00ff00'
            />

        b_coords = {'latitude': coords.latitude, 'longitude': coords.longitude + .003}
        b = <HashMarker
              key='2'
              title={marker.address}
              coordinate={marker.coordinate}
              fillColor='white'
              strokeColor='#000000'
            />

        c_coords = {'latitude': coords.latitude, 'longitude': b_coords.longitude + .003}
        c = <SimpleSvgMarker key='3' title={marker.address} coordinate={c_coords}/>
        z = [a, b, c]
        return z
    }
}

export class DebugGeoJsonMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(event, i) {
       latitude = event.geometry.coordinates[1]
       longitude = event.geometry.coordinates[0]
       coordinates = {latitude: latitude, longitude: longitude}
       return (
         <HashMarker
           key={i}
           title={event.properties.address}
           coordinate={coordinates}
           fillColor={this.hue(i)}
           strokeColor='#000000'
         />)
    }

    render() {
        return this.map_func(this.props.data[0], 0)
    }
}

export class ColoredSvgMarkerSet extends Component {
    constructor(props) {
          super(props)
          this.hue = this.hue.bind(this)
          this.map_func = this.map_func.bind(this)
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(event, i) {
       return (
        <SimpleColoredMarker
            key={i}
            title={event.address}
            coordinate={event.coordinate}
            strokeColor="black"
            fillColor={this.hue(i)}
        />)
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}

export class HashMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(event, i) {
       return (
         <HashMarker
           key={i}
           title={event.address}
           coordinate={event.coordinate}
           fillColor={this.hue(i)}
           strokeColor='#000000'
         />)
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}

export class OrderedHashMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
      this.compare = this.compare.bind(this)
    }

    compare(a, b) {
        if (a.start < b.start)
          return -1
        if (a.start > b.start)
          return 1
        return 0
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(colorMultiplier, event, i) {
        const colorCode = i * colorMultiplier
        const titleText = event.start + ' - ' + i + ' - ' + colorCode
       return (
         <HashMarker
           key={i}
           title={titleText}
           coordinate={event.coordinate}
           fillColor={this.hue(colorCode)}
           strokeColor='#000000'
         />)
    }

    render() {
        colorMax = 255
        markers = this.props.data
        colorMultiplier = colorMax / markers.length
        markers.sort(this.compare)
        mapped = markers.map((event, i) => { return this.map_func(colorMultiplier, event, i) })
        return mapped
    }
}

export class GroupedMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
      this.compare = this.compare.bind(this)
    }

    compare(a, b) {
        if (a.start < b.start)
          return -1
        if (a.start > b.start)
          return 1
        return 0
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}

export class GeoJsonMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(event, i) {
       latitude = event.geometry.coordinates[1]
       longitude = event.geometry.coordinates[0]
       coordinates = {latitude: latitude, longitude: longitude}
       return (
         <HashMarker
           key={i}
           title={event.properties.address}
           coordinate={coordinates}
           fillColor={this.hue(i)}
           strokeColor='#000000'
         />)
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}

export class ClusteredMarkerSet extends Component {
    constructor(props) {
      super(props)
      this.hue = this.hue.bind(this)
      this.map_func = this.map_func.bind(this)
    }

    hue(color) { return '#' + convert.hsv.hex(color, 100, 100) }

    map_func(event, i) {
       latitude = event.geometry.coordinates[1]
       longitude = event.geometry.coordinates[0]
       coordinates = {latitude: latitude, longitude: longitude}
       return (
         <HashMarker
           key={i}
           title={event.properties.address}
           coordinate={coordinates}
           fillColor={this.hue(i)}
           strokeColor='#000000'
         />)
    }

    render() {
        markers = this.props.data.map(this.map_func)
        return markers
    }
}