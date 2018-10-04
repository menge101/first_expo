/*
import axios from 'axios'
import { parsestring } from 'xml2js'

const srcUrl = 'http://www.pgh-h3.com';

const config = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),
    tagValueProcessor : a => he.decode(a)
};

const api = axios.create({
    baseURL: srcUrl,
});

const getHashes = userLocation => {
    return api
        .get('/wp', {
            params: {
                plugin: 'all-in-one-event-calendar',
                controller: 'ai1ec_exporter_controller',
                action: 'export_events',
                xml: true,
            }
        })
        .then(res => parsestring(res, ))
        .catch(err => console.log(err))
};

const toJson = xmlData => {

}

export default {
    getHashes,
}
*/