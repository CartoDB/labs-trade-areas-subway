window.myapp = window.myapp || {};

window.myapp.vis = {
  "id": "f7e73372-dfbd-11e5-b9ef-0ea31932ec1d",
  "version": "0.1.0",
  "title": "nyc_census_final 1",
  "likes": 0,
  "description": null,
  "scrollwheel": false,
  "legends": true,
  "url": null,
  "map_provider": "leaflet",
  "bounds": [
    [
      40.721209348747244,
      -74.0022325515747
    ],
    [
      40.74156703135052,
      -73.94446849822998
    ]
  ],
  "center": "[40.73138896860918, -73.97335052490234]",
  "zoom": 15,
  "updated_at": "2016-03-07T17:56:33+00:00",
  "layers": [
    {
      "options": {
        "visible": true,
        "type": "Tiled",
        "name": "Nokia Reduced Day",
        "className": "nokia_reduced_day",
        "base_type": "default",
        "urlTemplate": "https://{s}.maps.nlp.nokia.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/256/png8?lg=eng&token=A7tBPacePg9Mj_zghvKt9Q&app_id=KuYppsdXZznpffJsKT24",
        "minZoom": "0",
        "maxZoom": "20",
        "attribution": "&copy;2016 HERE <a href=\"http://here.net/services/terms\" target=\"_blank\">Terms of use</a>",
        "subdomains": "1234",
        "style": null,
        "read_only": true,
        "category": "Here",
        "order": 0,
        "id": "827f151e-7ad8-4e11-ad96-4f5325315c1d"
      },
      "infowindow": null,
      "tooltip": null,
      "id": "827f151e-7ad8-4e11-ad96-4f5325315c1d",
      "order": 0,
      "type": "tiled"
    },
    {
      "type": "layergroup",
      "options": {
        "user_name": "nerikcarto",
        "maps_api_template": "https://{user}.cartodb.com:443",
        "sql_api_template": "https://{user}.cartodb.com:443",
        "tiler_protocol": "http",
        "tiler_domain": "cartodb.com",
        "tiler_port": "80",
        "sql_api_protocol": "http",
        "sql_api_domain": "cartodb.com",
        "sql_api_endpoint": "/api/v2/sql",
        "sql_api_port": 80,
        "filter": "mapnik",
        "layer_definition": {
          "stat_tag": "f7e73372-dfbd-11e5-b9ef-0ea31932ec1d",
          "version": "1.0.1",
          "layers": [
            {
              "id": "303abbaf-a71b-4650-a9a4-40d353ec81a8",
              "type": "CartoDB",
              "infowindow": {
                "fields": [],
                "template_name": "table/views/infowindow_light",
                "template": "<div class=\"cartodb-popup v2\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n",
                "alternative_names": {},
                "width": 226,
                "maxHeight": 180
              },
              "tooltip": {
                "fields": [],
                "template_name": "tooltip_light",
                "template": "<div class=\"cartodb-tooltip-content-wrapper\">\n  <div class=\"cartodb-tooltip-content\">\n  {{#fields}}\n    {{#title}}\n    <h4>{{title}}</h4>\n    {{/title}}\n    <p>{{{ value }}}</p>\n  {{/fields}}\n  </div>\n</div>",
                "alternative_names": {},
                "maxHeight": 180
              },
              "legend": {
                "type": "category",
                "show_title": false,
                "title": "",
                "template": "",
                "visible": true,
                "items": [
                  {
                    "name": "asian",
                    "visible": true,
                    "value": "#fe528d"
                  },
                  {
                    "name": "black",
                    "visible": true,
                    "value": "#18a79e"
                  },
                  {
                    "name": "hispanic or latino",
                    "visible": true,
                    "value": "#ff8a00"
                  },
                  {
                    "name": "other",
                    "visible": true,
                    "value": "#33A02C"
                  },
                  {
                    "name": "white",
                    "visible": true,
                    "value": "#a0a4d5"
                  }
                ]
              },
              "order": 1,
              "visible": true,
              "options": {
                "sql": "select * from nyc_census_clipped",
                "layer_name": "nyc_census_clipped",
                "cartocss": "/** category visualization */\n\n#nyc_census_clipped {\n   polygon-opacity: 0.7;\n   line-color: #FFF;\n   line-width: 0.5;\n   line-opacity: 1;\n}\n\n#nyc_census_clipped[ethnic_1st=\"asian\"] {\n   polygon-fill: #fe528d;\n}\n#nyc_census_clipped[ethnic_1st=\"black\"] {\n   polygon-fill: #18a79e;\n}\n#nyc_census_clipped[ethnic_1st=\"hispanic or latino\"] {\n   polygon-fill: #ff8a00;\n}\n#nyc_census_clipped[ethnic_1st=\"other\"] {\n   polygon-fill: #cccccc;\n}\n#nyc_census_clipped[ethnic_1st=\"white\"] {\n   polygon-fill: #a0a4d5;\n}",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id",
                "table_name": "\"\"."
              }
            },
            {
              "id": "c1893751-d2f1-4624-ab86-597f8b25ab97",
              "type": "CartoDB",
              "infowindow": {
                "fields": [],
                "template_name": "table/views/infowindow_light",
                "template": "<div class=\"cartodb-popup v2\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n",
                "alternative_names": {},
                "width": 226,
                "maxHeight": 180
              },
              "tooltip": {
                "fields": [],
                "template_name": "tooltip_light",
                "template": "<div class=\"cartodb-tooltip-content-wrapper\">\n  <div class=\"cartodb-tooltip-content\">\n  {{#fields}}\n    {{#title}}\n    <h4>{{title}}</h4>\n    {{/title}}\n    <p>{{{ value }}}</p>\n  {{/fields}}\n  </div>\n</div>",
                "alternative_names": {},
                "maxHeight": 180
              },
              "legend": {
                "type": "none",
                "show_title": false,
                "title": "",
                "template": "",
                "visible": true
              },
              "order": 2,
              "visible": false,
              "options": {
                "sql": "select\n    nerikcarto.nyc_dots_500.cartodb_id,\n    nerikcarto.nyc_dots_500.the_geom,\n    nerikcarto.nyc_dots_500.the_geom_webmercator,\n\tST_Within(\n    \tnerikcarto.nyc_dots_500.the_geom,\n    \t(\n  SELECT\n    the_geom\n  FROM\n  \tnerikcarto.nyc_subway_stations_l_isos\n  WHERE\n  \tdata_range = 1200\n  AND\n  \tstation_id = 94\n  LIMIT 1\n)\n    ) inside\n\nFROM nerikcarto.nyc_dots_500\n    \n",
                "layer_name": "nyc_dots_500_2_copy",
                "cartocss": "/** simple visualization */\n  \n#nyc_dots_500_2_copy{\n  marker-fill-opacity: 0.25;\n  marker-line-color: #FFF;\n  marker-line-width: 0;\n  marker-line-opacity: 1;\n  marker-placement: point;\n  marker-type: ellipse;\n  marker-width: 3;\n  marker-fill: #000000;\n  marker-allow-overlap: true;\n}\n\n#nyc_dots_500_2_copy[inside=true]{\n  marker-fill-opacity: 1;\n}\n\n#nyc_dots_500_2_copy[zoom<15]{\n  marker-width: 1.5;\n}",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id",
                "table_name": "\"\"."
              }
            },
            {
              "id": "824fb056-e7f0-4f55-a238-cdbd194b51dc",
              "type": "CartoDB",
              "infowindow": {
                "fields": [],
                "template_name": "table/views/infowindow_light",
                "template": "<div class=\"cartodb-popup v2\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n",
                "alternative_names": {},
                "width": 226,
                "maxHeight": 180
              },
              "tooltip": {
                "fields": [{
                  name: "station_name",
                  title: true,
                  position: 5
                }],
                "template_name": "tooltip_light",
                "template": "<div class=\"cartodb-tooltip-content-wrapper\">\n  <div class=\"cartodb-tooltip-content\">\n  {{#fields}}\n    {{#title}}\n    <h4>{{title}}</h4>\n    {{/title}}\n    <p>{{{ value }}}</p>\n  {{/fields}}\n  </div>\n</div>",
                "alternative_names": {},
                "maxHeight": 180
              },
              "legend": {
                "type": "none",
                "show_title": false,
                "title": "",
                "template": "",
                "visible": true
              },
              "order": 3,
              "visible": true,
              "options": {
                "sql": "select * from nerikcarto.nyc_subway_stations_l_isos WHERE station_id = 94\n",
                "layer_name": "nyc_subway_stations_l_isos",
                "cartocss": "@col0: #000000;\n@col1: #111111;\n@col2: #2d2d2d;\n@col3: #494948;\n@col4: #5c5c5c;\n\n\n#nyc_isos_copy{\n  polygon-fill: #FFFFCC;\n  polygon-opacity: 0;\n  line-color: #FFF;\n  line-opacity: 1;\n}\n#nyc_isos_copy::lbl{\n  text-name: [data_range]/60 + 'm. walking';\n  text-face-name: 'DejaVu Sans Bold';\n  text-size: 12;\n  text-label-position-tolerance: 10;\n  text-halo-fill: #FFFFFF;\n  text-halo-radius: 2;\n  text-allow-overlap: true;\n  text-placement: line;\n  text-placement-type: simple;\n}\n\n\n  #nyc_isos_copy [ data_range <= 1200] {\n    polygon-fill: @col0;\n    line-color: @col0;\n    line-width: 3;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 1200] {\n    text-fill: @col0;\n  }\n\n  #nyc_isos_copy [ data_range <= 900] {\n    polygon-fill: @col1;\n    line-color: @col1;\n  line-width: 2.5;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 900] {\n    text-fill: @col1;\n  }\n\n  #nyc_isos_copy [ data_range <= 600] {\n    polygon-fill: @col2;\n    line-color: @col2;\n  \tline-width: 2;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 600] {\n    text-fill: @col2;\n  }\n\n  #nyc_isos_copy [ data_range <= 300] {\n    polygon-fill: @col3;\n    line-color: @col3;\n  line-width: 1.5;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 300] {\n    text-fill: @col3;\n  }\n\n  #nyc_isos_cop [ data_range <= 120] {\n    polygon-fill: @col4;\n    line-color: @col4;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 120] {\n    text-fill: @col4;\n  }\n\n",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id,station_name",
                "table_name": "\"\"."
              }
            },
            {
              "id": "c5c49c94-ed73-4d3e-8b69-e13131288db7",
              "type": "CartoDB",
              "infowindow": {
                "fields": [],
                "template_name": "table/views/infowindow_light",
                "template": "<div class=\"cartodb-popup v2\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n",
                "alternative_names": {},
                "width": 226,
                "maxHeight": 180
              },
              "tooltip": {
                "fields": [],
                "template_name": "tooltip_light",
                "template": "<div class=\"cartodb-tooltip-content-wrapper\">\n  <div class=\"cartodb-tooltip-content\">\n  {{#fields}}\n    {{#title}}\n    <h4>{{title}}</h4>\n    {{/title}}\n    <p>{{{ value }}}</p>\n  {{/fields}}\n  </div>\n</div>",
                "alternative_names": {},
                "maxHeight": 180
              },
              "legend": {
                "type": "none",
                "show_title": false,
                "title": "",
                "template": "",
                "visible": true
              },
              "order": 5,
              "visible": true,
              "options": {
                "sql": "select * from nyc_subway_l",
                "layer_name": "nyc_subway_l",
                "cartocss": "/** simple visualization */\n\n#nyc_subway_l{\n  line-color: #000000;\n  line-width: 8;\n  line-opacity: 1;\n}\n\n#nyc_subway_l::inner{\n  line-color: #cccccc;\n  line-width: 7;\n  line-opacity: 1;\n}\n\n#nyc_dots_500_2_copy[zoom<15] {\n  line-width: 5;\n}\n\n#nyc_dots_500_2_copy::inner[zoom<15] {\n  line-width: 4;\n}",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id",
                "table_name": "\"\"."
              }
            }
          ]
        },
        "attribution": ""
      }
    }
  ],
  "overlays": [
    {
      "type": "share",
      "order": 2,
      "options": {
        "display": true,
        "x": 20,
        "y": 20
      },
      "template": ""
    },
    {
      "type": "search",
      "order": 3,
      "options": {
        "display": true,
        "x": 60,
        "y": 20
      },
      "template": ""
    },
    {
      "type": "zoom",
      "order": 6,
      "options": {
        "display": true,
        "x": 20,
        "y": 20
      },
      "template": "<a href=\"#zoom_in\" class=\"zoom_in\">+</a> <a href=\"#zoom_out\" class=\"zoom_out\">-</a>"
    },
    {
      "type": "loader",
      "order": 8,
      "options": {
        "display": true,
        "x": 20,
        "y": 150
      },
      "template": "<div class=\"loader\" original-title=\"\"></div>"
    },
    {
      "type": "logo",
      "order": 9,
      "options": {
        "display": true,
        "x": 10,
        "y": 40
      },
      "template": ""
    }
  ],
  "prev": null,
  "next": null,
  "transition_options": {
    "time": 0
  }
}
