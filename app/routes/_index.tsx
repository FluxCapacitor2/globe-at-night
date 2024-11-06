import type { MetaFunction } from "@remix-run/node";
import { lazy, useEffect, useState } from "react";
import { getObservations } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Earth = lazy(async () => await import("~/components/Earth"));

export default function Index() {
  const [obs, setObs] = useState<any | undefined>();

  useEffect(() => {
    getObservations().then(setObs);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      {obs ? <Earth data={obs} /> : <p>Loading...</p>}
    </div>
  );
}
