# Globe At Night

An unofficial website with data visualizations from Globe At Night, a citizen science project dedicated to mapping light pollution.
View Globe At Night's official website [here](https://globeatnight.org).

## Data Preparation

I downloaded the past 18 years of data (2006-2023) from the [Globe At Night website](https://globeatnight.org/maps-data/) in CSV format. Then, I imported it into a SQLite database using the `.import` command with the `--csv` flag. I dropped a few columns, including SkyComment and LocationComment, to reduce the size of the database, and then I ran the `VACUUM` command to compact it.

The browser downloads all the data in a SQLite database file and then uses a WASM port of SQLite to query a random sample to display on the globe 3D model. The query itself only takes about 50ms on my machine, but processing the data and completing the first render of the globe takes several seconds, which is why I placed globe near the bottom of the page, giving it time to load before the user sees it.

If I were to scale this website to a substantial number of visitors, I would precompute the visualization heatmaps and only send those. However, at the moment, that is not worth the time investment. As of writing, the total page weight is about 30 MB in a production build, which is still only about twice the size of the YouTube homepage when signed in.

# Acknowledgements

## Libraries and Data

- Data: https://globeatnight.org/maps-data/
- Globe renderer: https://www.npmjs.com/package/react-globe.gl

## Images

- Planet texture: https://planetpixelemporium.com/earth8081.html
- NASA (via Unsplash): https://unsplash.com/photos/photo-of-outer-space-Q1p7bh3SHj8
- Des Récits (via Unsplash): https://unsplash.com/photos/photo-of-mountain-with-trees-during-night-2O18Tz8QidM
- MXI Art (via Unsplash): https://unsplash.com/photos/blue-sky-with-stars-during-night-time-id0A-td1JBk
- Favicon: https://globeatnight.org/static/images/favicon.ico

## Fonts

- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
