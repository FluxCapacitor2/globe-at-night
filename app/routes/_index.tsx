import type { MetaFunction } from "@remix-run/node";
import { lazy, useEffect, useState } from "react";
import { getObservations } from "~/data";
import earthFromSpace from "/nasa-Q1p7bh3SHj8-unsplash.jpg?url";

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
    <>
      <section className="h-screen relative overflow-hidden">
        <img
          src={earthFromSpace}
          className="absolute inset-0 h-full object-cover max-sm:brightness-50"
        />
        <div className="absolute inset-0 sm:bottom-2/3 flex items-center justify-center flex-col gap-4 p-8">
          <h1 className="text-white text-6xl sm:text-7xl md:text-9xl font-black">
            Globe At Night
          </h1>
          <p className="max-w-prose text-balance text-center">
            A citizen science project mapping light pollution across the globe.
            View the project's official website{" "}
            <a href="https://globeatnight.org/">here</a>.
          </p>
          <a href="#intro" className="max-w-max">
            <button className="font-mono uppercase bg-white border hover:bg-gray-200 transition-colors px-4 py-2 text-black">
              Explore
            </button>
          </a>
        </div>
      </section>
      <section className="h-screen relative overflow-hidden" id="intro">
        {/* <img src={earthFromSpace} className="absolute inset-0 object-cover" /> */}
        <div className="absolute inset-0 bottom-2/3 flex justify-center flex-col gap-4 p-8">
          <h1 className="text-white text-6xl font-bold">Citizen Science</h1>
          <ul>
            <li>What is citizen science?</li>
            <li>How can I get involved?</li>
          </ul>
        </div>
      </section>
      <section className="flex h-screen items-center justify-center">
        <div className="grid lg:grid-cols-2">
          <div className="px-16">
            <h2 className="text-6xl font-bold">Explore the Data</h2>
            <p>
              Over the past 18 years, contributors have submitted 291,306 light
              pollution observations.
            </p>
            <p>
              The globe <span className="hidden lg:inline">to the right</span>
              <span className="lg:hidden">below</span> displays a random sample
              of observations. Drag to pan the camera, and pinch or scroll to
              zoom.
            </p>
          </div>
          <div>{obs ? <Earth data={obs} /> : <p>Loading...</p>}</div>
        </div>
      </section>
      <section className="flex h-screen items-center justify-center">
        <div className="grid md:grid-cols-2">
          <div className="px-16">
            <h2 className="text-6xl font-bold">
              Why is Minimizing Light Pollution Important?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo placeat quod similique. Dolorum laudantium quos
              architecto vel velit quidem accusantium et placeat, aut laboriosam
              modi aliquam autem quia? Odit, quas?
            </p>
          </div>
          <div>(image here)</div>
        </div>
      </section>
    </>
  );
}
