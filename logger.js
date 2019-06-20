'use strict';

const Q = require('@nmq/q/client');
 
const db = new Q('database');
const files = new Q('files');

db.subscribe('create', payload => {
  console.log('CREATE: ', payload);
});

db.subscribe('read', payload => {
  console.log('READ: ', payload);
});

db.subscribe('update', payload => {
  console.log('UPDATE: ', payload);
});

db.subscribe('delete', payload => {
  console.log('DELETE: ', payload);
});

db.subscribe('error', payload => {
  console.error('ERROR: ', payload);
});

files.subscribe('save', payload => {
  console.log('SAVE: ', payload);
});
