'use strict';
(function () {

    window.myapp = window.myapp || {};

    window.myapp.layers = ["16936c14-22ce-40bd-8be8-a5b3575a5c11","","","494bef04-c4e3-40bb-bdf3-7284cd020684"];

    window.myapp.sqlTemplates = {
      blockgroups: cartodb._.template(cdb.$('#sql_blockgroups').html()),
      iso: cartodb._.template('select * from nyc_subway_stations_l_isos WHERE station_id = <%= station_id %> AND data_range <= <%= range %>'),
      dots: cartodb._.template( cdb.$('#sql_dots').html() )
    }
    window.myapp.station_id = 85;
    window.myapp.range = 1200;
    window.myapp.hists = {};
    window.myapp.vis.layers[1].options.layer_definition.layers[0].options.sql = window.myapp.sqlTemplates.blockgroups({data:{station_id: myapp.station_id, range: myapp.range, hists:myapp.hists}})
    window.myapp.vis.layers[1].options.layer_definition.layers[1].options.sql = window.myapp.sqlTemplates.iso({station_id: myapp.station_id, range: myapp.range})
    window.myapp.vis.layers[1].options.layer_definition.layers[2].options.sql = window.myapp.sqlTemplates.dots({station_id: myapp.station_id, range: myapp.range})
    console.log(window.myapp.vis)
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
              "options": {
                  "type": "formula",
                  "column": "pop_per_point",
                  "operation": "sum",
                  "suffix": '',
                  "sync": false,
              }
          },
          // {
          //     "type": "histogram",
          //     "title": "Are we close to station 85?",
          //     "layer_id": window.myapp.layers[3],
          //     'show_stats': false,
          //     "options": {
          //         "type": "histogram",
          //         "column": "median_age",
          //         "sync": false,
          //     }
          // },
          {
              "type": "histogram",
              "title": "Block group per capita income",
              "layer_id": window.myapp.layers[3],
              'show_stats': false,
              "options": {
                  "type": "histogram",
                  "column": "per_capita_income",
                  "sync": false,
              }
          },
          {
              "type": "histogram",
              "title": "Block group median age",
              "layer_id": window.myapp.layers[3],
              'show_stats': false,
              "options": {
                  "type": "histogram",
                  "column": "median_age",
                  "sync": false,
              }
          },

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


    window.onload = function () {


        myapp.dash = cartodb.deepInsights.createDashboard('#dashboard', myapp.diJSON,  {
         no_cdn: false,
         cartodb_logo: false,
         renderMenu: false
       })
        .vis
        .done(function (vis, layers) {
          window.myapp.wcontainer = cdb.$('#' + vis.$el.context.id + ' .CDB-Widget-canvasInner').get(0);
          window.myapp.mylayers = layers.models;
          window.myapp.widgets = vis._dataviewsCollection.models;
          window.myapp.Lmap = vis.getNativeMap();

          var blockgroups = layers.models[1];
          var iso = layers.models[2];
          var dots = layers.models[3];

          // inject dist selector
          var distSelector = cdb.$('.js-iso-selector');
          distSelector.insertAfter(cdb.$('.CDB-Widget').eq(0))

          // cdb.$('input[type="range"]').rangeslider({
          //     polyfill: false,
          //   })

          cdb.$('.js-Range').on('change', function(e) {
            myapp.range = parseInt(e.target.value);
            var mins = myapp.range / 60 + " min"
            cdb.$('.js-Range-val').text(mins);
            updateAll();
          })

          var updateAll = function(station_id, range) {
            iso.set('sql', window.myapp.sqlTemplates.iso({station_id: myapp.station_id, range: myapp.range}));

            var dots_sql_tpl = window.myapp.sqlTemplates.dots({station_id: myapp.station_id, range: myapp.range});
            dots.set('sql', dots_sql_tpl);

            var blockgroups_sql_tpl = window.myapp.sqlTemplates.blockgroups({data:{station_id: myapp.station_id, range: myapp.range, hists:myapp.hists}});
            blockgroups.set('sql', blockgroups_sql_tpl);
          }


          // listen to histogram changes
          var onHistogramChange = function (model) {
            var min = model.filter.get('min');
            var max = model.filter.get('max');

            if (min && max) {
              var column = model.get('column');
              myapp.hists[column] = {
                column: column,
                min: min,
                max: max,
              };
              var data = {
                station_id: myapp.station_id,
                range: myapp.range,
                hists: myapp.hists
              };

              var blockgroups_sql_tpl = window.myapp.sqlTemplates.blockgroups({
                data: data
              });
              console.log(data)
              console.log(blockgroups_sql_tpl)
              blockgroups.set('sql', blockgroups_sql_tpl);
            }
          };

          myapp.dash._dataviewsCollection.models[1].on('change', onHistogramChange);
          myapp.dash._dataviewsCollection.models[2].on('change', onHistogramChange);

          //fetch metro stations
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

                  myapp.station_id = event.target.feature.properties.cartodb_id;

                  updateAll();

                })
              }
            }).addTo(myapp.Lmap)
          });
        });
    };

})();
