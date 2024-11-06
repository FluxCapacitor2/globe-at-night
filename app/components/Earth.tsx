import Globe from "react-globe.gl";

export default ({ data }: { data: any }) => {
  const processed = (data[0].values as any[]).map((row: any) => ({
    id: row[0],
    lat: row[1],
    lng: row[2],
    weight: parseInt(row[3]),
  }));

  let max = 0;
  for (const row of processed) {
    if (row.weight > max) {
      max = row.weight;
    }
  }

  // const weightColor = scaleSequentialSqrt(interpolateYlOrRd).domain([0, 7]);

  return (
    <Globe
      globeImageUrl="https://unpkg.com/three-globe@2.34.4/example/img/earth-night.jpg"
      heatmapsData={[processed]}
      heatmapPointLat="lat"
      heatmapPointLng="lng"
      heatmapPointWeight="weight"
      heatmapTopAltitude={0.02}
      heatmapsTransitionDuration={0}
      heatmapBandwidth={0.9}
      heatmapColorSaturation={1.0}
      enablePointerInteraction={false}

      // hexBinPointsData={processed}
      // hexBinPointWeight="weight"
      // hexAltitude={(d) => d.sumWeight / 7e1}
      // hexBinResolution={15}
      // hexTopColor={(d) => weightColor(d.sumWeight)}
      // hexSideColor={(d) => weightColor(d.sumWeight)}
      // hexBinMerge={true}
      // enablePointerInteraction={false}
    />
  );
};
