const path = require('path');
const fs = require('fs');
const bcrypt = require("bcryptjs");
const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'clanky.json'));


