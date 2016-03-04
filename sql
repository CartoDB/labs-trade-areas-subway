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



# quick and dirty selct around center of Manhattan
SELECT
nerikcarto.us_census_shore_clipped_ny2.the_geom,
nerikcarto.us_census_shore_clipped_ny2.geoid
FROM nerikcarto.us_census_shore_clipped_ny2
where
ST_Distance(
  ST_GeomFromText('POINT(-73.971249 40.783060)',4326),
  nerikcarto.us_census_shore_clipped_ny2.the_geom
) < .5



#join with census
WITH geoms AS (
  SELECT
  	geoid geoid_clipped,
  	the_geom the_geom_clipped
   FROM
  nerikcarto.us_census_shore_clipped_ny2_copy
)

SELECT
*
FROM
nerikcarto.nyc_census_final c
INNER JOIN
geoms
ON
  geoms.geoid_clipped = c.geoid


# dots
WITH dots AS (
  SELECT
  	CDB_dot_density(
    	the_geom,
    	total_pop/20
    ) as the_geom,
  	20 as pop_per_point,
  	geoid
  FROM nerikcarto.nyc_census_clipped
  WHERE
GeometryType(the_geom) <> 'GEOMETRYCOLLECTION'
)

select
  geoid,
  the_geom,
	pop_per_point,
  ST_Transform(the_geom, 3857) as the_geom_webmercator
from dots
