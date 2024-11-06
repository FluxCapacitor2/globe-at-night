import type { MetaFunction } from "@remix-run/node";
import { lazy, useEffect, useState } from "react";
import { getObservations } from "~/data";
import milkyWayFromEarth from "/des-recits-2O18Tz8QidM-unsplash.jpg?url";
import earthFromSpace from "/nasa-Q1p7bh3SHj8-unsplash.jpg?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Globe At Night" },
    {
      name: "description",
      content:
        "An unofficial website with data visualizations from Globe At Night, a citizen science project dedicated to mapping light pollution. ",
    },
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
          className="absolute inset-0 size-full object-cover max-sm:brightness-50"
        />
        <div className="absolute inset-0 sm:bottom-2/3 flex items-center justify-center flex-col gap-4 p-8">
          <h1 className="text-white text-center md:text-start text-6xl sm:text-7xl md:text-9xl font-black">
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
      <section id="intro" className="mb-36 px-16 relative min-h-screen">
        <img
          src={milkyWayFromEarth}
          className="absolute inset-0 object-cover object-bottom size-full brightness-50"
        />
        <div className="absolute inset-0 flex flex-col gap-4 max-w-prose mx-auto py-12">
          <h1 className="text-white text-6xl font-bold">Light Pollution</h1>
          <p>Points to cover here (expand and add images):</p>
          <ul>
            <li>
              We used to be able to see the milky way on a clear day from
              everywhere on Earth.
            </li>
            <li>
              With the advent of the industrial revolution, people covered the
              globe with lights.
            </li>
            <li>
              Artificial lights can prevent us from seeing the wonder and beauty
              of the universe from Earth.
            </li>
            <li>
              Satellite constellations (like Starlink) also prevent astronomers
              from making observations about the universe.
            </li>
            <li>
              Light pollution works against astronomers, amateur and
              professional, forcing them to travel to darker areas to do their
              work.
            </li>
            <li>...</li>
          </ul>
        </div>
      </section>
      <section className="my-36 px-16">
        {/* <img
          src={milkyWayFromEarth}
          className="absolute inset-0 object-cover"
        /> */}
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-6xl font-bold">
            A Citizen Science Project
          </h1>
          <p>
            Points to cover here (expand and add images; write for a general
            audience):
          </p>
          <ul>
            <li>What is citizen science?</li>
            <li>Can anyone contribute?</li>
            <li>How can I get involved?</li>
            <li>What problems have been solved with citizen science?</li>
            <li>What other citizen science projects are there?</li>
          </ul>
        </div>
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <div className="grid lg:grid-cols-2">
          <div className="px-16 mb-16">
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
          <div className="max-lg:mx-2 overflow-hidden">
            {obs ? <Earth data={obs} /> : <p>Loading...</p>}
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 px-16 my-36">
        <h2 className="text-6xl font-bold mb-4">
          Why is Minimizing Light Pollution Important?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          placeat quod similique. Dolorum laudantium quos architecto vel velit
          quidem accusantium et placeat, aut laboriosam modi aliquam autem quia?
          Odit, quas?
        </p>
        <div>(image here)</div>
      </section>
      <section className="px-16 my-36 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold mb-2">Look Up At The Night Sky</h2>
        <p className="mb-4">
          Support the Globe At Night project by recording your own observation.
        </p>
        <a href="https://app.globeatnight.org/" className="max-w-max">
          <button className="font-mono uppercase bg-white border hover:bg-gray-200 transition-colors px-4 py-2 text-black">
            Record Observation
          </button>
        </a>
      </section>
    </>
  );
}
