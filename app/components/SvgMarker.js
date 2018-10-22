import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView, Svg } from 'expo';

const Marker = MapView.Marker
const G = Svg.G;
const Ellipse = Svg.Ellipse;
const Path = Svg.Path;

export class SimpleSvgMarker extends Component {
    render() {
        return (
          <Marker {...this.props}>
            <Svg height={10} width={10}>
                <Svg.Circle
                    cx={5}
                    cy={5}
                    r={5}
                    strokeWidth={2.5}
                    stroke="#e74c3c"
                    fill="#f1c40f"
                />
            </Svg>
          </Marker>
    )}
}

export class SimpleColoredMarker extends Component {
    render() {
        return (
          <Marker {...this.props}>
            <Svg height={10} width={10}>
                <Svg.Circle
                    cx={5}
                    cy={5}
                    r={5}
                    strokeWidth={2.5}
                    stroke={this.props.strokeColor}
                    fill={this.props.fillColor}
                />
            </Svg>
          </Marker>
    )}
}

export class HashMarker extends Component {
    render() {
        return (
            <Marker {...this.props} anchor={{'x': 0.3, 'y': 1}} centerOffset={{'x': 8.592, 'y': 0}}>
                <Svg width="42.96" height="41.357" viewBox="0 0 33.017532 38.923957">
                    <Path fill={this.props.strokeColor} d="m30.887 18.987c-0.80787 0.40715-1.5945 0.59642-2.2867 0.55019l-0.63952-0.0427-0.1216 0.55718c-0.2076 0.95119-0.56324 1.5874-1.3027 2.3304-0.60548 0.60839-0.76828 0.71614-2.1116 1.3979-1.8395 0.93359-3.6044 1.92-4.9034 2.7404-0.8646 0.54612-1.1047 0.74329-1.6364 1.3441-0.85618 0.96744-1.7462 2.1577-3.3416 4.4688-1.9476 2.8213-2.7123 3.794-3.6259 4.6118-2.3609 2.1136-4.829 2.595-7.255 1.4152-0.65908-0.32052-0.83764-0.45733-1.604-1.229-0.99515-1.002-1.5229-1.828-1.8518-2.8982-0.28767-0.93601-0.27446-2.3016 0.031192-3.2252 0.54219-1.6384 1.3982-2.5796 3.9981-4.3956 1.6219-1.1329 1.8046-1.2856 3.14-2.6232 1.095-1.0968 1.5237-1.5825 1.8822-2.1328 1.1226-1.7228 2.0443-3.9682 2.9872-7.2778 0.26302-0.92317 0.57717-1.9343 0.6981-2.247 0.5633-1.4566 1.5506-2.7582 2.6925-3.5495 0.35982-0.24934 0.65024-0.45734 0.64536-0.46222-0.0049-5e-3 -0.13033-0.3699-0.27878-0.81117-0.48546-1.443-0.21694-3.3108 0.70745-4.9212 0.47446-0.82654 1.6137-1.9388 2.3236-2.2685 1.159-0.53833 2.1884-0.51679 3.1734 0.0664 0.83368 0.49363 1.4842 1.4897 1.6187 2.4785l0.05325 0.39156 0.29171-0.0922c0.16044-0.0507 0.53244-0.0933 0.82667-0.0947 1.5913-7e-3 2.8451 1.2322 2.9295 2.8967l0.02643 0.5214 0.31912-9e-3c0.17552-6e-3 0.59324 0.0943 0.92828 0.22181 0.50678 0.19282 0.66903 0.30358 0.96538 0.65904 0.61191 0.73396 0.74708 1.3812 0.56945 2.7269-0.03544 0.26842-0.01337 0.30103 0.3422 0.50573 0.95407 0.54927 1.3413 1.8642 0.89434 3.0366l-0.15287 0.40093 0.54513 0.54514c0.49448 0.49447 0.55304 0.59161 0.63025 1.0456 0.04927 0.28972 0.01501 0.7506-0.08139 1.0945-0.1509 0.53829-0.22972 0.66064-0.84077 1.3052-0.51051 0.53848-0.79846 0.77382-1.1856 0.96894zm0.44118-2.7471c0.26574-0.83492-0.86935-1.0622-2.0658-0.41367-1.0656 0.57765-1.5136 1.3994-1.0277 1.8854 0.28568 0.28568 1.1597 0.19802 1.8874-0.18929 0.39797-0.21181 1.1044-0.96293 1.2061-1.2824zm-5.2108 3.8072c0.54854-1.5969 0.08994-4.1284-1.1309-6.2424-0.43812-0.75866-0.61693-0.97436-1.7646-2.1285-1.3848-1.3926-1.8528-1.727-2.9878-2.1349-2.0351-0.73126-4.3082 0.44116-5.4675 2.8201-0.20433 0.41929-0.63062 1.6585-0.94731 2.7539-1.0226 3.537-1.9251 5.7195-3.1444 7.6039-0.49054 0.75815-0.78533 1.098-2.0901 2.4095-1.4663 1.4738-1.5811 1.5702-3.3043 2.7758-1.5233 1.0656-1.884 1.3569-2.4579 1.9842-0.57627 0.62991-0.70743 0.83124-0.91552 1.4054-0.46562 1.2847-0.29915 2.4777 0.52144 3.7368 0.47885 0.73479 0.91994 1.1784 1.632 1.6414 1.7348 1.128 3.6697 0.83975 5.6101-0.83571 0.82886-0.71568 1.5591-1.6377 3.4706-4.3819 3.0254-4.3433 3.9928-5.4465 5.6621-6.4562 1.4459-0.87464 3.0602-1.7704 4.5637-2.5323 0.75804-0.38417 1.4709-0.76157 1.5842-0.83868 0.4323-0.29425 0.97868-1.0348 1.1661-1.5804zm4.2722-6.9444c0.50065-1.5435-1.1516-1.6533-2.6479-0.17596-1.2811 1.2648-1.1997 2.5237 0.14758 2.2826 0.99995-0.17899 2.2042-1.1936 2.5004-2.1066zm-1.4727-2.8987c0.68631-1.4216-0.07553-2.4089-1.4611-1.8936-1.399 0.52031-2.6168 2.225-2.3448 3.2821 0.12223 0.47507 0.37995 0.66094 0.957 0.69022 0.47298 0.024 0.8429-0.0998 1.5495-0.51862 0.309-0.18315 1.0838-1.1133 1.2995-1.5601zm-3.2084-2.0102c0.47814-0.79241 0.6929-1.918 0.4899-2.5678-0.15427-0.49378-0.58556-0.83686-1.0935-0.86986-1.4973-0.0973-3.325 2.3077-3.0886 4.0641 0.03606 0.26788 0.16266 0.54644 0.3536 0.77796 0.25564 0.30999 0.35547 0.36566 0.7105 0.39622 0.52527 0.0452 0.89932-0.0751 1.4341-0.46146 0.45398-0.32795 0.85562-0.77843 1.194-1.3392zm-4.2428-1.7562c1.2414-2.0925 0.92507-4.5809-0.61524-4.84-0.18934-0.0318-0.56477 0.0171-0.83429 0.10879-0.66684 0.22676-1.6607 1.2228-2.0512 2.0557-1.0662 2.2742-0.51004 4.5337 1.1025 4.4788 0.7852-0.0268 1.7945-0.78566 2.3982-1.8032z" stroke-width=".097898"/>
                    <G fill={this.props.fillColor}>
                        <Path d="m3.8031 36.313c-1.1101-0.87322-2.024-2.4865-2.024-3.5729 0-1.4418 1.1161-2.901 3.6019-4.709 4.6288-3.3667 6.238-5.7244 8.3372-12.215 1.7514-5.4153 3.5324-7.0072 6.6434-5.9377 2.9253 1.0057 5.6255 4.9348 5.7054 8.3021 0.0564 2.3786-0.38329 2.8709-4.6059 5.1576-3.5682 1.9323-5.1738 3.4299-8.1479 7.5999-3.4637 4.8566-4.9829 6.1281-7.322 6.1281-0.70247 0-1.6418-0.32319-2.188-0.75278z" stroke-width="1.53543"/>
                        <Path d="m18.541 8.1745c-0.72897-0.27114-1.1213-1.0529-1.1206-2.233 9.23e-4 -1.512 0.5537-2.7695 1.6876-3.8391 0.60339-0.56921 1.0634-0.795 1.6451-0.80745 2.3264-0.049805 2.138 4.532-0.26113 6.3474-0.7324 0.55421-1.4012 0.73665-1.951 0.53218z" stroke-width=".038252"/>
                        <Path d="m22.452 9.928c-0.10661-0.0897-0.28198-0.32501-0.38973-0.52291-0.1724-0.31665-0.19512-0.42455-0.18942-0.89959 0.01197-0.99845 0.53314-2.1048 1.3997-2.9714 1.0938-1.0938 2.2566-1.2057 2.8344-0.27277 0.17907 0.28912 0.19869 0.37663 0.19552 0.8719-0.0058 0.91336-0.26428 1.6579-0.87407 2.5181-0.3712 0.52363-0.89001 0.98182-1.4036 1.2396-0.33253 0.16691-0.48012 0.20014-0.88883 0.20014-0.41985 0-0.51787-0.02337-0.68392-0.1631z" stroke-width=".038252"/>
                        <Path d="m25.494 12.2c-0.29834-0.187-0.42528-0.46606-0.42337-0.9308 0.0042-1.0222 1.031-2.3835 2.225-2.9497 0.37139-0.17612 0.51783-0.20798 0.95604-0.20798 0.45885 0 0.53792 0.019109 0.698 0.16868 0.69755 0.65178 0.40851 1.792-0.77496 3.0572-0.58334 0.62359-1.2341 0.949-1.9551 0.97773-0.41681 0.0166-0.54888-0.0043-0.72557-0.11509z" stroke-width=".038252"/>å
                        <Path d="m27.232 15.13c-0.33825-0.17306-0.44282-0.42804-0.34657-0.84504 0.11248-0.48728 0.38056-0.90062 0.95276-1.469 1.4379-1.4283 3.0612-1.4487 2.7677-0.03494-0.27395 1.3196-2.4392 2.8271-3.3739 2.349z" stroke-width=".038252"/>
                        <Path d="m28.335 17.878c-0.08353-0.03357-0.20251-0.16723-0.2644-0.29701-0.16556-0.34718-0.03909-0.70494 0.40683-1.1509 1.169-1.169 3.2451-1.3228 2.9399-0.21782-0.08094 0.29316-0.78991 1.0739-1.1859 1.306-0.61044 0.35774-1.4875 0.5241-1.8965 0.35972z" stroke-width=".038252"/>
                    </G>
                </Svg>
            </Marker>
        )
    }
}