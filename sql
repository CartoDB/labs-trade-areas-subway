WITH iso AS (
	SELECT
  		cartodb_id station_id,
  		name station_name,
  		cdb_isochrone(
          the_geom,
          'walk',
          Array[120,300,600,900,1200]
        ) iso
  	FROM
  		nerikcarto.nyc_subway_stations
  	WHERE line like '%L%'
)

SELECT
iso.station_id,
iso.station_name,
(iso.iso).the_geom the_geom,
(iso.iso).data_range,
ST_Transform(
  (iso.iso).the_geom,
  3857
) the_geom_webmercator
FROM
iso
