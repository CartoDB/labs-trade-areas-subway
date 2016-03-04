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
      40.6907913077715,
      -74.02235984802246
    ],
    [
      40.76663159147414,
      -73.87782096862793
    ]
  ],
  "center": "[40.72872225387065, -73.95009040832518]",
  "zoom": 16,
  "updated_at": "2016-03-03T14:17:55+00:00",
  "layers": [
    {
      "options": {
        "visible": true,
        "type": "Tiled",
        "default": "true",
        "url": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        "subdomains": "abcd",
        "minZoom": "0",
        "maxZoom": "18",
        "name": "Positron",
        "className": "httpsbasemapscartocdncomlight_nolabelszxypng",
        "attribution": "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>",
        "labels": {
          "url": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        },
        "urlTemplate": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        "id": "827f151e-7ad8-4e11-ad96-4f5325315c1d",
        "order": 0
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
              "id": "16936c14-22ce-40bd-8be8-a5b3575a5c11",
              "type": "CartoDB",
              "infowindow": {
                "fields": [
                  {
                    "name": "total_pop",
                    "title": true,
                    "position": 0
                  }
                ],
                "template_name": "infowindow_dark",
                "template": "<div class=\"cartodb-popup dark v2\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n",
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
              "order": 1,
              "visible": true,
              "options": {
                "sql": "/*\n\nWITH isolines AS (\n\tSELECT cdb_isochrone(\n    \tST_GeomFromText('POINT(-73.998584 40.719)',4326),\n      \t'walk',\n      \tArray[300,600,900,1200]\n      \n    ) iso\n)\n\n\n\nSELECT \nnerikcarto.nyc_census_final.cartodb_id,\nnerikcarto.nyc_census_final.the_geom,\nnerikcarto.nyc_census_final.total_pop,\nnerikcarto.nyc_census_final.the_geom_webmercator \nFROM \nnerikcarto.nyc_census_final, isolines \nWHERE \n\tST_Intersects(\n  \t\tnerikcarto.nyc_census_final.the_geom,\n  \t\t(SELECT \n         \t(isolines.iso).the_geom\t\n         FROM \n         \tisolines  \n\t\tWHERE \n         \t(isolines.iso).data_range = 1200\n         LIMIT 1\n        )\n )\n\n*/\n\nselect\nnerikcarto.nyc_census_final.cartodb_id,\nnerikcarto.nyc_census_final.the_geom,\nnerikcarto.nyc_census_final.total_pop,\nnerikcarto.nyc_census_final.median_age,\nnerikcarto.nyc_census_final.per_capita_income,\nnerikcarto.nyc_census_final.the_geom_webmercator \nFROM nerikcarto.nyc_census_final, nerikcarto.nyc_isos_copy\n/*\nWHERE \n\tST_Intersects(\n  \t\tnerikcarto.nyc_census_final.the_geom,\n  \t\t(SELECT \n         \tthe_geom\t\n         FROM \n         \tnerikcarto.nyc_isos_copy  \n\t\tWHERE \n         \tdata_range = 1800\n         LIMIT 1\n        )\n )\n*/",
                "layer_name": "nyc_census_final",
                "cartocss": "/** simple visualization */\n\n#nyc_census_final{\n  polygon-fill: #f0f;\n  polygon-opacity: 0.1;\n  line-color: #f0f;\n  line-width: 0.5;\n  line-opacity: .5;\n}",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id",
                "table_name": "\"\"."
              }
            },

            {
            id: "c5c49c94-ed73-4d3e-8b69-e13131288db7",
            type: "CartoDB",
            infowindow: {
            fields: [ ],
            template_name: "table/views/infowindow_light",
            template: "",
            alternative_names: { },
            width: 226,
            maxHeight: 180
            },
            tooltip: {
            fields: [ ],
            template_name: "tooltip_light",
            template: "",
            alternative_names: { },
            maxHeight: 180
            },
            legend: {
            type: "none",
            show_title: false,
            title: "",
            template: "",
            visible: true
            },
            order: 4,
            visible: true,
            options: {
            sql: "select * from nyc_subway_l",
            layer_name: "nyc_subway_l",
            cartocss: "/** simple visualization */ #nyc_subway_l{ line-color: #aaa; line-width: 5; line-opacity: 1; }",
            cartocss_version: "2.1.1",
            interactivity: "cartodb_id",
            table_name: ""
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
              "order": 2,
              "visible": true,
              "options": {
                "sql": "select * from nerikcarto.nyc_subway_stations_l_isos WHERE station_id = 94\n",
                "layer_name": "nyc_subway_stations_l_isos",
                "cartocss": "/** simple visualization */\n\n#nyc_isos_copy{\n  polygon-opacity: 0;\n  line-color: #A53ED5;\n  line-width: 3;\n  line-opacity: 1;\n}\n#nyc_isos_copy::lbl{\n  text-name: [data_range]/60 + 'm. walking';\n  text-face-name: 'DejaVu Sans Bold';\n  text-size: 11;\n  text-label-position-tolerance: 10;\n  text-halo-fill: #170F10;\n  text-halo-radius: 2;\n  text-allow-overlap: false;\n  text-placement: line;\n  text-placement-type: simple;\n  text-fill: #fff;\n\n}",
                "cartocss_version": "2.1.1",
                "interactivity": "cartodb_id",
                "table_name": "\"\"."
              }
            },
            {
              "id": "494bef04-c4e3-40bb-bdf3-7284cd020684",
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
                "sql": "select\n    nerikcarto.nyc_dots_500_2.cartodb_id,\n    nerikcarto.nyc_dots_500_2.pop_per_point,\n    nerikcarto.nyc_dots_500_2.the_geom,\n    nerikcarto.nyc_dots_500_2.the_geom_webmercator\n    FROM nerikcarto.nyc_dots_500_2\n    WHERE\n    ST_Within(\n    nerikcarto.nyc_dots_500_2.the_geom,\n    (SELECT\n    the_geom\n    FROM\n    nerikcarto.nyc_subway_stations_l_isos\n    WHERE\n    data_range = 1200\n    AND\n    station_id = 94\n    LIMIT 1\n    )\n    )",
                "layer_name": "nyc_dots_500",
                "cartocss": "/** simple visualization */\n\n#undefined_copy{\n  marker-fill-opacity: 1;\n  marker-line-width: 0;\n  marker-placement: point;\n  marker-type: ellipse;\n  marker-width: 2;\n  marker-fill: #5CA2D1;\n  marker-allow-overlap: true;\n}",
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
