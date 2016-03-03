#!/usr/bin/env node
/* eslint-env node, es6 */

var CartoDB = require('cartodb');
var secrets = require('./node-secret');
var path = require('path');

var sql = new CartoDB.SQL(secrets);

sql.execute('select CDB_dot_density(the_geom,total_pop/50) as the_geom, geoid from nerikcarto.nyc_census_clipped')
  .done(function(data) {
    // console.log( Object.keys(data))
    // console.log( data.rows)
  })
  .error(function(e) {
    console.log(e)
  });
