const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: [{modelID: 'TS0202', manufacturerName: '_TZ3000_lltemgsf'}],
    model: 'TS0202',
    vendor: 'TUYA',
    description: 'Tuya Smart ZigBee 3.0 Battery Alexa PIR Motion Sensor',
    fromZigbee: [fz.ias_occupancy_alarm_1],
    toZigbee: [],
    exposes: [e.occupancy(), e.battery_low()], 
};

module.exports = definition;