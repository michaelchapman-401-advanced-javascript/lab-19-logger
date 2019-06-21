'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');
const log = require('./log.js');

const db = new Q('database');
const files = new Q('files');

db.subscribe('create', payload => log(payload, 'CREATE'));

db.subscribe('read', payload => log(payload, 'READ'));

db.subscribe('update', payload => log(payload, 'UPDATE'));

db.subscribe('delete', payload => log(payload, 'DELETE'));

db.subscribe('error', payload => log(payload, 'ERROR'));

files.subscribe('save', payload => log(payload, 'SAVE'));

files.subscribe('error', payload => log(payload, 'ERROR'));
