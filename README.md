# My Live NPM Stats

<img alt="Live NPM stats Banner" src="./root-assets/banner.gif" width="100%" height="auto" style="border-radius: 8px;" />

This project showcases the live NPM install count of my published packages using React, TypeScript, and Vite. It pulls data from the official NPM registry API to display install counts for the selected packages from the year 2020 onwards.

## Tech Stack

- **React** (with TypeScript)
- **React Query** (for efficient data fetching and caching)
- **Vite** (for fast development and bundling)

### Caching:

Caching is enabled using React Query to minimize repeated API requests and enhance performance by storing the data for quick retrieval.

## NPM Packages

This project tracks the following three NPM packages:

1. **tsconfig.json-helper**

   - **Description:** A TypeScript config helper library, providing boilerplate `tsconfig.json` files for multiple frameworks like React, Node.js, and React Native.
   - **Published Version:** 1.0.0

2. **pluralized**

   - **Description:** A Node.js module that returns the plural form of any given noun.
   - **Published Version:** 1.0.2

3. **git-search-repos**
   - **Description:** A library that returns a list of GitHub repositories sorted by the **last updated time** in descending order.
   - **Published Version:** 1.0.0

## Accuracy of Data

The data displayed in this project is fetched directly from the official **NPM API**. It calculates the total install count for each of the listed packages from the year 2020 to 2024. The total downloads represent the sum of the yearly install counts across the specified periods.

### Data Source and Verification

- **Data Source**: The data is retrieved using the official NPM API endpoint: `https://api.npmjs.org/downloads/range/${period}/${packageName}`

- **Custom Hook**: Please visit the `usePackageDownloads.ts` file which is a custom hook and is responsible for making API calls using the above periods and fetching the install counts for each package.

- `period` in `usePackageDownloads` refers to the time range for fetching download counts, which is specified as:
  ```
  { start: "2020-01-01", end: "2021-01-01" },
  { start: "2021-01-01", end: "2022-01-01" },
  { start: "2022-01-01", end: "2023-01-01" },
  { start: "2023-01-01", end: "2024-01-01" },
  { start: "2024-01-01", end: "2025-01-01" }
  ```
- `packageName` is dynamically passed from the `package.data.ts` file, which contains the list of **my packages** displayed on the website.

- **Staleness**: As per the official NPM API documentation, the data is delayed by 48 hours.

### Data Integrity

- **Unaltered Data**: No data fetched from the API is modified or altered. It is presented as is, ensuring transparency and accuracy.
- **Open Source Code**: The entire codebase is open source. Users can verify the implementation and data fetching logic by reviewing the source files, including `usePackageDownloads` and `package.data.ts`.

### Summary

These install counts denote the cumulative downloads from the time of the first package creation up to the present date. Since the project is open-source, users are encouraged to inspect the logic and ensure the accuracy of the data presented.

---

_Note_: The data is delayed by 48 hours as per the official NPM API.

## How It Works

1. The app fetches the install data for each package using the official NPM API.
2. It calculates the total installs per year (from 2020 onwards) and aggregates them to display the overall installs.
3. The install counts are updated in real time by polling the NPM registry.

Feel free to contribute or report any issues.
