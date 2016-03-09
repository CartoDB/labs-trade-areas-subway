'use strict';
(function () {

    window.myapp = window.myapp || {};

    window.myapp.sqlTemplates = {
      blockgroups: cartodb._.template(cdb.$('#sql_blockgroups').html()),
      iso: cartodb._.template('select * from nyc_subway_stations_l_isos <% if (station_id) { %>  WHERE station_id = <%= station_id %> AND data_range <= <%= range %><% } %>'),
      dots: cartodb._.template( cdb.$('#sql_dots').html() )
    }

    window.myapp.cssTemplates = {
      per_capita_income: cartodb._.template(cdb.$('#css_per_capita_income').html()),
      median_age: cartodb._.template(cdb.$('#css_median_age').html()),
      ethnic_1st: cartodb._.template(cdb.$('#css_ethnic_1st').html()),
      dots: cartodb._.template(cdb.$('#css_dots').html()),
      iso: cartodb._.template(cdb.$('#css_iso').html()),
    }

    window.myapp.htmlTemplates = {
      drop: cartodb._.template( cdb.$('#html_drop').html() ),
      legend: cartodb._.template( cdb.$('#html_legend').html() )
    }

    window.myapp.current_choro_widget = 0;
    window.myapp.station_id = 85;
    window.myapp.range = 1200;
    window.myapp.hists = {};

    window.myapp.vis.layers[1].options.layer_definition.layers[0].options.sql = window.myapp.sqlTemplates.blockgroups({data:{}})
    window.myapp.vis.layers[1].options.layer_definition.layers[0].options.cartocss = window.myapp.cssTemplates.per_capita_income();
    window.myapp.vis.layers[1].options.layer_definition.layers[1].options.sql = window.myapp.sqlTemplates.dots({station_id: myapp.station_id, range: myapp.range})
    window.myapp.vis.layers[1].options.layer_definition.layers[1].options.cartocss = window.myapp.cssTemplates.dots();
    window.myapp.vis.layers[1].options.layer_definition.layers[2].options.sql = window.myapp.sqlTemplates.iso({station_id: myapp.station_id, range: myapp.range})
    window.myapp.vis.layers[1].options.layer_definition.layers[2].options.cartocss = window.myapp.cssTemplates.iso();

    window.myapp.zoom = 14;
    window.myapp.center = [40.73138896860918, -73.97335052490234];


    window.myapp.diJSON = cdb._.extend(window.myapp.vis,
        {
          "vector": true,
        "title": "Isochrones demo",
        "description": "",
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

          {
              "type": "formula",
              "title": "# people within distance",
              "layer_id": window.myapp.vis.layers[1].options.layer_definition.layers[0].id,
              "options": {
                  "type": "formula",
                  "column": "total_pop",
                  "operation": "sum",
                  "suffix": '',
                  "sync": true,
              }
          },
          {
              "type": "histogram",
              "title": "Block group per capita income",
              "layer_id": window.myapp.vis.layers[1].options.layer_definition.layers[0].id,
              'show_stats': false,
              "options": {
                  "type": "histogram",
                  "column": "per_capita_income",
                  "sync": true
              }
          },
          {
              "type": "histogram",
              "title": "Block group median age",
              "layer_id": window.myapp.vis.layers[1].options.layer_definition.layers[0].id,
              'show_stats': false,
              "options": {
                  "type": "histogram",
                  "column": "median_age",
                  "sync": true,
              }
          },
          {
              "type": "category",
              "title": "Primary ethnic group",
              "layer_id": window.myapp.vis.layers[1].options.layer_definition.layers[0].id,
              "options": {
                  "type": "aggregation",
                  "column": "ethnic_1st",
                  "aggregation": "count",
                  "aggregationColumn": "cartodb_id",
                  "sync": true,
              }
          },
        ]
    });

    window.myapp.sql = new cartodb.SQL({
        user: 'nerikcarto',
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

          window.myapp.Lmap.setView(window.myapp.center, window.myapp.zoom)


          var blockgroups = layers.models[1];
          var iso = layers.models[3];
          var dots = layers.models[2];

          // inject dist selector
          var distSelector = cdb.$('.js-iso-selector');
          distSelector.insertAfter(cdb.$('.CDB-Widget').eq(0));

          cdb.$('.js-Range').on('change', function(e) {
            myapp.range = parseInt(e.target.value);
            var mins = myapp.range / 60 + " min"
            cdb.$('.js-Range-val').text(mins);
            updateAll();
          })

          var updateAll = function() {
            iso.set('sql', window.myapp.sqlTemplates.iso({station_id: myapp.station_id, range: myapp.range}));

            var dots_sql_tpl = window.myapp.sqlTemplates.dots({station_id: myapp.station_id, range: myapp.range});
            dots.set('sql', dots_sql_tpl);

            updateBlockGroups();
          }

          var updateBlockGroups = function() {
            var blockgroups_sql_tpl = window.myapp.sqlTemplates.blockgroups({data:{station_id: myapp.station_id, range: myapp.range}});
            blockgroups.set('sql', blockgroups_sql_tpl);
          }

          window.myapp.updateChoro = function (index) {
            var col = ['per_capita_income','median_age','ethnic_1st'][index];
            var cssTpl = window.myapp.cssTemplates[col]();
            blockgroups.set('cartocss', cssTpl );

            window.myapp.updateLegend(index);
          }

          window.myapp.updateLegend = function (index) {

            var lgd = window.myapp.htmlTemplates.legend({index: index})
            cdb.$('.cartodb-legend-stack').html(lgd)
          }

          //mywidget.update({bins:17})

          updateBlockGroups();
          window.myapp.updateLegend(0);

          // paint icons
          function onWidgetChange(model) {
            console.log(model.get('column'))
            console.log(model.filter.toJSON())

            cdb.$('.CDB-Widget').eq(0).find('.CDB-Widget-options').remove();
            cdb.$('.js-sizes').remove();
            cdb.$('.js-colors').remove();
            cdb.$('.js-colorsCustom').remove();

            cdb.$('.CDB-Widget-options').each(function(i, el) {
              var btn = cdb.$(window.myapp.htmlTemplates.drop({
                isSelected: i === window.myapp.current_choro_widget,
                index: i
              }));
              cdb.$(el).prepend(btn);

              btn.on('click', function (e) {
                var $t = (cdb.$(e.target).data('index') !== undefined) ? cdb.$(e.target) : cdb.$(e.target).parent('.js-colorsCustom');
                var index = parseInt($t.data('index'));
                window.myapp.current_choro_widget = index;
                cdb.$('.js-colorsCustom').removeClass('is-selected');
                $t.addClass('is-selected')
                window.myapp.updateChoro(index);
              })
            })

          }

          myapp.dash._dataviewsCollection.models[1].on('change:data', onWidgetChange);
          myapp.dash._dataviewsCollection.models[2].on('change:data', onWidgetChange);
          myapp.dash._dataviewsCollection.models[3].on('change:data', onWidgetChange);


          myapp.dash._dataviewsCollection.models[3].on('change:data', function () {
            var recolor = function (title, color) {
                if (cdb.$('.CDB-Widget-listItemInner:has(.CDB-Text[title="' + title + '"]) .CDB-Widget-progressState').get(0) != void 0) {
                    cdb.$('.CDB-Widget-listItemInner:has(.CDB-Text[title="' + title + '"]) .CDB-Widget-progressState').get(0).style.backgroundColor = color;
                }
            }
            recolor('asian', '#fe528d');
            recolor('black', '#18a79e');
            recolor('hispanic or latino', '#ff8a00');
            recolor('white', '#a0a4d5');
            recolor('other', '#cccccc');

          });



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

                  // update map
                  updateAll();

                })
              }
            }).addTo(myapp.Lmap)
          });
        });
    };

})();
