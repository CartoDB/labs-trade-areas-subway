'use strict';
(function () {

    window.myapp = window.myapp || {};

    window.myapp.layers = ["16936c14-22ce-40bd-8be8-a5b3575a5c11","","","494bef04-c4e3-40bb-bdf3-7284cd020684"];

    window.myapp.diJSON = cdb._.extend(window.myapp.vis,
        {
        "title": "myapp Ads Demo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "user": {
            fullname: 'Erik Escoffier',
            avatar_url: 'https://avatars1.githubusercontent.com/u/1583415?v=3&s=400'
        },
        "datasource": {
            "type": "public_map",
            "user_name": "nerikcarto",
            "maps_api_template": "https://{user}.cartodb.com:443",
            "stat_tag": "f7e73372-dfbd-11e5-b9ef-0ea31932ec1d",
            "force_cors": true
        },
        "widgets": [
          // {
          //     "type": "formula",
          //     "title": "Total amount",
          //     "layer_id": window.myapp.layers[0],
          //     "options": {
          //         "type": "formula",
          //         "column": "cartodb_id",
          //         "operation": "count",
          //         "suffix": ''
          //     }
          // },
          {
              "type": "formula",
              "title": "# people within distance",
              "layer_id": window.myapp.layers[3],
              'show_stats': true,
              "options": {
                  "type": "formula",
                  "column": "pop_per_point",
                  "operation": "sum",
                  "suffix": '',
              }
          },
          // {
          //     "type": "histogram",
          //     "title": "Median age",
          //     "layer_id": window.myapp.layers[0],
          //     "options": {
          //         "type": "histogram",
          //         "column": "median_age",
          //         "sync": true,
          //         "bins": 10
          //     }
          // },
          //
          // {
          //     "type": "histogram",
          //     "title": "Per capita income",
          //     "layer_id": window.myapp.layers[0],
          //     "options": {
          //         "type": "histogram",
          //         "column": "per_capita_income",
          //         "sync": true,
          //         "bins": 10
          //     }
          // },
          // {
          //     "type": "histogram",
          //     "title": "invehicle",
          //     "layer_id": window.myapp.layers[0],
          //     "options": {
          //         "type": "histogram",
          //         "column": "invehicle",
          //         "sync": true,
          //         "bins": 2
          //     }
          // }
            /*
            {
                "type": "formula",
                "title": "Total amount",
                "layer_id": window.myapp.layers[i],
                "options": {
                    "type": "formula",
                    "column": "amount",
                    "operation": "sum",
                    "suffix": ' €'
                }
            },

            {
                "type": "histogram",
                "title": "Amount",
                "layer_id": window.myapp.layers[j],
                "options": {
                    "type": "histogram",
                    "column": "amount",
                    "sync": true,
                    "bins": 10
                }
            },

            {
                "type": "category",
                "title": "Most popular players",
                "layer_id": window.myapp.layers[k],
                "options": {
                    "type": "aggregation",
                    "column": "player",
                    "aggregation": "count",
                    "aggregationColumn": "cartodb_id",
                    "sync": true,
                }
            },

            {
                "layer_id": window.myapp.layers[m],
                "type": "time-series",
                "columnType": "number",
                "column": "epoch_time",
                // TODO initial request is hardcoded until the tiler can resolve this itself
                // SELECT min(extract(epoch from eventdate)), max(extract(epoch from eventdate)) FROM toyota_leads
                "options": {
                    "bins": 256,
                    "start": 1454621220,
                    "end": 1454707618,
                    "annotations": [
                        {
                            "time": 1454642819,
                            "text": "Touchdown - Team 2",
                            "icon": "img/team01.svg"
                        },
                        {
                            "time": 1454664418,
                            "text": "Touchdown - Team 1",
                            "icon": "img/team02.svg"
                        },
                        {
                            "time": 1454686017,
                            "text": "Halftime",
                            "icon": "img/halftime.svg"
                        }
                    ]
                }
            }
            */
        ]
    });

    window.myapp.sql = new cartodb.SQL({
        user: 'abel',
        protocol: "https",
        sql_api_template: "https://{user}.cartodb.com:443"
    });





    // cartodb.vis.Vis.prototype.centerMapToOrigin = function () {}
    // cartodb.vis.Vis.prototype.instantiateMap = function () {}
    window.onload = function () {
      // try {

        myapp.dash = cartodb.deepInsights.createDashboard('#dashboard', myapp.diJSON,  {
         no_cdn: false,
         cartodb_logo: false,
         renderMenu: false
       })
        .vis
        .done(function (vis, layers) {
          var sql_iso = cartodb._.template('select * from nyc_subway_stations_l_isos WHERE station_id = <%= station_id %>');
            // console.log(cartodb.$('#sql_blockgroups') )
          var sql_blockgroups = cartodb._.template( cdb.$('#sql_blockgroups').html() );
          var sql_dots = cartodb._.template( cdb.$('#sql_dots').html() );

          window.myapp.wcontainer = cdb.$('#' + vis.$el.context.id + ' .CDB-Widget-canvasInner').get(0);
          window.myapp.mylayers = layers.models;
          window.myapp.widgets = vis._dataviewsCollection.models;
          window.myapp.Lmap = vis.getNativeMap();

          // your code!
          console.log(layers)
          console.log(vis)

          var blockgroups = layers.models[1];
          var iso = layers.models[2];
          var dots = layers.models[3];
          console.log(dots)


          myapp.sql.execute('SELECT * FROM nerikcarto.nyc_subway_stations WHERE line like \'%L%\'', {}, {
              format: 'geoJSON'
          })
          .done(function (data) {
            L.Icon.Default.imagePath = 'themes/img/';
            var stations = L.geoJson(data, {
              onEachFeature: function (feature, layer) {
                var myicon = L.divIcon({
                      iconSize: L.point(15, 15),
                      className: 'subway_station',
                      html: '<div></div>'
                  });
                layer.setIcon(myicon);
                layer.on('click', function (event) {

                  var station_id = event.target.feature.properties.cartodb_id;

                  iso.set('sql', sql_iso({station_id: station_id}));

                  // var blockgroups_sql_tpl = sql_blockgroups({station_id: station_id});
                  // console.log(blockgroups_sql_tpl)
                  // blockgroups.set('sql', blockgroups_sql_tpl);
                  var dots_sql_tpl = sql_dots({station_id: station_id});
                  console.log(dots_sql_tpl)
                  console.log(dots.get('sql'))
                  dots.set('sql', dots_sql_tpl);


                })
              }
            }).addTo(myapp.Lmap)
          });


        });
      // } catch (e) {}
    };

})();
