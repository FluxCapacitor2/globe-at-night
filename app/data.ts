import initSqlJs from "sql.js";
import databaseURL from "/data.db?url";

export async function getObservations() {
  const SQL = await initSqlJs({
    locateFile: (file) => {
      console.log("fetching", file);
      return `https://sql.js.org/dist/${file}`;
    },
  });

  const data = await (await fetch(databaseURL)).arrayBuffer();
  const db = new SQL.Database(new Uint8Array(data));

  const res = db.exec(
    "select ID, Latitude, Longitude, LimitingMag from observations where ObsDateTime like '201%' and LimitingMag > 0 ORDER BY RANDOM() LIMIT 500;"
  );

  return res;
}
