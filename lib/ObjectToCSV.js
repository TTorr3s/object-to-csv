'use strict';

//Helpers
const Utils = require('./helpers/utilities');
const Constants = require('./helpers/constants');

/**
 * @class ObjectToCSV
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description A lightweight, dependency-less Node.js module to convert JSON objects to CSV format.
 * @example
 *     const ObjectToCSV = require('object-to-csv');
 *     let csv = new ObjectToCSV({...}).getCSV();
 * @public
 * @version 0.0.1
 * @license MIT
 * @kind class
 */
class ObjectToCSV {
};

//Set Constants
ObjectToCSV.VERSION = Constants.VERSION;

//

module.exports = exports = ObjectToCSV;