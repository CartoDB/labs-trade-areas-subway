window.myapp = window.myapp || {};

window.myapp.vis ={
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
      40.69446823687208,
      -73.98128986358643
    ],
    [
      40.73239708902571,
      -73.92073631286621
    ]
  ],
  "center": "[40.71343536379427, -73.95101308822632]",
  "zoom": 15,
  "updated_at": "2016-03-07T11:28:01+00:00",
  "layers": [
    {
      "options": {
        "visible": true,
        "type": "Tiled",
        "name": "Positron (labels below)",
        "className": "httpscartodbbasemapssglobalsslfastlynetlight_allzxypng",
        "base_type": "default",
        "urlTemplate": "https://{s}.maps.nlp.nokia.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/256/png8?lg=eng&token=A7tBPacePg9Mj_zghvKt9Q&app_id=KuYppsdXZznpffJsKT24",
        "minZoom": "0",
        "maxZoom": "18",
        "attribution": "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>",
        "subdomains": "abcd",
        "style": null,
        "read_only": true,
        "category": "CartoDB",
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
                "type": "choropleth",
                "show_title": false,
                "title": "",
                "template": "",
                "visible": true,
                "items": [
                  {
                    "name": "Left label",
                    "visible": true,
                    "value": "14978.00",
                    "type": "text"
                  },
                  {
                    "name": "Right label",
                    "visible": true,
                    "value": "369260.00",
                    "type": "text"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#FFFFB2",
                    "type": "color"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#FED976",
                    "type": "color"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#FEB24C",
                    "type": "color"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#FD8D3C",
                    "type": "color"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#FC4E2A",
                    "type": "color"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#E31A1C",
                    "type": "color"
                  },
                  {
                    "name": "Color",
                    "visible": true,
                    "value": "#B10026",
                    "type": "color"
                  }
                ]
              },
              "order": 1,
              "visible": true,
              "options": {
                "sql": "select * from nyc_census_clipped",
                "layer_name": "nyc_census_clipped",
                "cartocss": "/** choropleth visualization */\n\n#nyc_census_clipped{\n  polygon-fill: #FFFFB2;\n  polygon-opacity: 0.5;\n  line-color: #FFF;\n  line-width: 0.5;\n  line-opacity: 1;\n}\n#nyc_census_clipped [ per_capita_income <= 369260] {\n   polygon-fill: #B10026;\n}\n#nyc_census_clipped [ per_capita_income <= 57496] {\n   polygon-fill: #E31A1C;\n}\n#nyc_census_clipped [ per_capita_income <= 40065] {\n   polygon-fill: #FC4E2A;\n}\n#nyc_census_clipped [ per_capita_income <= 31793] {\n   polygon-fill: #FD8D3C;\n}\n#nyc_census_clipped [ per_capita_income <= 25329] {\n   polygon-fill: #FEB24C;\n}\n#nyc_census_clipped [ per_capita_income <= 20182] {\n   polygon-fill: #FED976;\n}\n#nyc_census_clipped [ per_capita_income <= 14978] {\n   polygon-fill: #FFFFB2;\n}",
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
              "order": 3,
              "visible": true,
              "options": {
                "sql": "select\n    nerikcarto.nyc_dots_500.cartodb_id,\n    nerikcarto.nyc_dots_500.the_geom,\n    nerikcarto.nyc_dots_500.the_geom_webmercator,\n\tST_Within(\n    \tnerikcarto.nyc_dots_500.the_geom,\n    \t(\n  SELECT\n    the_geom\n  FROM\n  \tnerikcarto.nyc_subway_stations_l_isos\n  WHERE\n  \tdata_range = 1200\n  AND\n  \tstation_id = 94\n  LIMIT 1\n)\n    ) inside\n\nFROM nerikcarto.nyc_dots_500\n    \n",
                "layer_name": "nyc_dots_500_2_copy",
                "cartocss": "/** simple visualization */\n  \n#nyc_dots_500_2_copy{\n  marker-fill-opacity: 0.25;\n  marker-line-color: #FFF;\n  marker-line-width: 0;\n  marker-line-opacity: 1;\n  marker-placement: point;\n  marker-type: ellipse;\n  marker-width: 2;\n  marker-fill: #000000;\n  marker-allow-overlap: true;\n}\n\n#nyc_dots_500_2_copy[inside=true]{\n  marker-fill-opacity: 1;\n}\n\n#nyc_dots_500_2_copy[zoom<15]{\n  marker-width: 1.5;\n}",
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
              "order": 4,
              "visible": true,
              "options": {
                "sql": "select * from nerikcarto.nyc_subway_stations_l_isos WHERE station_id = 94\n",
                "layer_name": "nyc_subway_stations_l_isos",
                "cartocss": "@col0: #320486;\n@col1: #25369c;\n@col2: #0072c4;\n@col3: #00abeb;\n@col4: #00d0ff;\n\n\n#nyc_isos_copy{\n  polygon-fill: #FFFFCC;\n  polygon-opacity: 0;\n  line-color: #FFF;\n  line-width: 2;\n  line-opacity: 1;\n}\n#nyc_isos_copy::lbl{\n  text-name: [data_range]/60 + 'm. walking';\n  text-face-name: 'DejaVu Sans Bold';\n  text-size: 12;\n  text-label-position-tolerance: 10;\n  text-halo-fill: #FFFFFF;\n  text-halo-radius: 2;\n  text-allow-overlap: true;\n  text-placement: line;\n  text-placement-type: simple;\n}\n\n\n  #nyc_isos_copy [ data_range <= 1200] {\n    polygon-fill: @col0;\n    line-color: @col0;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 1200] {\n    text-fill: @col0;\n  }\n\n  #nyc_isos_copy [ data_range <= 900] {\n    polygon-fill: @col1;\n    line-color: @col1;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 900] {\n    text-fill: @col1;\n  }\n\n  #nyc_isos_copy [ data_range <= 600] {\n    polygon-fill: @col2;\n    line-color: @col2;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 600] {\n    text-fill: @col2;\n  }\n\n  #nyc_isos_copy [ data_range <= 300] {\n    polygon-fill: @col3;\n    line-color: @col3;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 300] {\n    text-fill: @col3;\n  }\n\n  #nyc_isos_cop [ data_range <= 120] {\n    polygon-fill: @col4;\n    line-color: @col4;\n  }\n  #nyc_isos_copy::lbl [ data_range <= 120] {\n    text-fill: @col4;\n  }\n\n",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id",
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
