import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { lazy, useEffect, useState, type ReactNode } from "react";
import {
  MdCrueltyFree,
  MdFlare,
  MdGroups,
  MdLight,
  MdLightMode,
} from "react-icons/md";
import { getObservations } from "~/data";
import milkyWayFromEarth from "/darkened-des-recits-2O18Tz8QidM-unsplash.jpg?url";
import globeVizPreview from "/globe-viz-preview.png?url";
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
      <section
        style={{ backgroundImage: `url(${milkyWayFromEarth})` }}
        id="intro"
        className="mb-36 px-16 relative min-h-screen bg-bottom"
      >
        <div className="flex flex-col gap-4 max-w-prose mx-auto py-24">
          <h1 className="text-white text-6xl font-bold">Light Pollution</h1>
          <h2 className="text-3xl font-medium mt-12">What is it?</h2>
          <p>
            Globe At Night defines light pollution as "excessive, misdirected,
            or obtrusive artificial (usually outdoor) light."
          </p>
          <h2 className="text-3xl font-medium mt-12">What is its impact?</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-lg">
                <MdGroups className="inline -ml-2 mr-2" />
                People
              </h3>
              <ul>
                <li>
                  Disrupts our circadian rhythms by halting melatonin production
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-lg">
                <MdCrueltyFree className="inline -ml-2 mr-2" />
                Animals
              </h3>
              <ul>
                <li>Confuses migratory patterns</li>
                <li>Alters predator-prey relations</li>
              </ul>
            </div>
          </div>
          <h2 className="text-3xl font-medium mt-12">
            What types of light pollution are there?
          </h2>
          <div className="grid grid-cols- gap-4">
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-lg">
                <MdFlare className="inline mr-2" />
                Glare Light
              </h3>
              <p>
                <strong>Causes</strong>: Unshielded lighting
              </p>
              <p>
                <strong>Effects</strong>: Temporary blindness, unsafe driving
                conditions
              </p>
              <p>
                <strong>Examples</strong>: Street lights, car headlights
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-lg">
                <MdLight className="inline mr-2" />
                Light Trespass
              </h3>
              <p>
                <strong>Causes</strong>: Unwanted light entering someone's home
              </p>
              <p>
                <strong>Effects</strong>: Difficulty sleeping
              </p>
              <p>
                <strong>Examples</strong>: Street lights shining into a window
                at night
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-lg">
                <MdLightMode className="inline mr-2" />
                Skyglow
              </h3>
              <p>
                <strong>Causes</strong>: Culmination of upward-facing,
                unshielded light
              </p>
              <p>
                <strong>Effects</strong>: A glowing effect in the sky,
                obstructing view of the stars
              </p>
            </div>
          </div>
          <p></p>
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
          <ul>
            <li>
              Citizen Science projects are scientific research projects that
              anyone can contribute to.
            </li>
            <li>
              They allow scientists to tackle scientific research that they
              don't have the time or resources to do themselves.
            </li>
            <li>
              <strong>Globe At Night</strong> is a citizen science project that
              focuses on recording light pollution around the world.
            </li>
            <li>
              To participate, visit the{" "}
              <a href="https://globeatnight.org/">Globe At Night website</a>,
              follow the steps to record data, and then submit it.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <div className="grid lg:grid-cols-2">
          <div className="px-16 mb-16">
            <h2 className="text-6xl font-bold mb-4">Explore the Data</h2>
            <p>
              Over the past <strong>18 years</strong>, contributors have
              submitted <strong>291,306</strong> light pollution observations.
            </p>
            <p className="mb-4">
              The globe <span className="hidden lg:inline">to the right</span>
              <span className="lg:hidden">below</span> displays a random sample
              of observations. Drag to pan the camera, and pinch or scroll to
              zoom.
            </p>
            <Link to="/data">
              <button className="font-mono uppercase bg-white border hover:bg-gray-200 transition-colors px-4 py-2 text-black">
                More Visualizations
              </button>
            </Link>
          </div>
          <div className="max-lg:mx-2 overflow-hidden">
            <EarthViz>
              <img src={globeVizPreview} className="size-full object-cover" />
            </EarthViz>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 px-16 my-36" id="what-can-you-do">
        <div>
          <h2 className="text-6xl font-bold mb-4">What Can You Do?</h2>
          <p>
            Reducing light pollution is a global problem, but you can enact
            change right now in your community.
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-4">
            <li>
              Raise awareness for this issue and the negative impacts that it
              has.
            </li>
            <li>
              Implement “smart” lighting with motion sensors to make sure light
              is only being used when needed.
            </li>
            <li>
              Minimize the use of decorative lighting and turn it off when not
              in use.
            </li>
            <li>
              Shield lighting so that it is focused where it is needed and does
              not pollute the night sky.
            </li>
            <li>
              Write to legislators to put these protocols into place in order to
              make them more widespread.
            </li>
          </ul>
        </div>
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

function EarthViz({ children }: { children: ReactNode }) {
  const [obs, setObs] = useState<any | undefined>();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load && !obs) {
      getObservations().then(setObs);
    }
  }, [load]);

  const [ready, setReady] = useState(false);
  console.log(ready);

  return (
    <div className="relative">
      <div className={!ready ? "hidden" : undefined}>
        {obs && <Earth data={obs} onReady={() => setReady(true)} />}
      </div>
      {(!load || !ready) && (
        <div className="absolute inset-4 flex flex-col items-center justify-end">
          <div className="bg-white text-black rounded-md p-4">
            <p className="mb-2">
              Loading this visualization will download a lot of data.
            </p>
            {!load ? (
              <>
                <button
                  onClick={() => setLoad(true)}
                  className="bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 transition-colors"
                >
                  Load Interactive Visualization
                </button>
              </>
            ) : (
              <p className="items-center">
                <div className="inline-block border-t-blue-500 border-b-blue-500 border-transparent rounded-full animate-spin size-4 border-2 mr-2" />
                Loading visualization...
              </p>
            )}
          </div>
        </div>
      )}
      {!ready ? children : null}
    </div>
  );
}
