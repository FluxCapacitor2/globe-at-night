import { useEffect, useMemo, useState } from "react";
import Globe from "react-globe.gl";
import globeTexture from "/earthmap4k.jpg?url";

export default ({ data, onReady }: { data: any; onReady?: () => void }) => {
  const processed = useMemo(
    () =>
      (data[0].values as any[]).map((row: any) => ({
        id: row[0],
        lat: row[1],
        lng: row[2],
        // weight: parseInt(row[3]),
        weight: 1, // Weight the heatmap according to the number of observations; more observations = more red.
      })),
    [data]
  );

  // const weightColor = scaleSequentialSqrt(interpolateYlOrRd).domain([0, 7]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const width = useMemo(
    () => (screenWidth < 1024 ? screenWidth : screenWidth / 2),
    [screenWidth]
  );

  useEffect(() => {
    const listener = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <Globe
      width={width}
      globeImageUrl={globeTexture}
      heatmapsData={[processed]}
      heatmapPointLat="lat"
      heatmapPointLng="lng"
      heatmapPointWeight="weight"
      heatmapTopAltitude={0.02}
      heatmapsTransitionDuration={0}
      heatmapBandwidth={0.9}
      heatmapColorSaturation={1.0}
      enablePointerInteraction={false}
      // waitForGlobeReady={false}
      animateIn={false}
      onGlobeReady={() => {
        console.log("Globe ready!");
        onReady?.();
      }}

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
