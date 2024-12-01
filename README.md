# My Live NPM Stats

This project showcases the live NPM install count of my published packages using React, TypeScript, and Vite. It pulls data from the official NPM registry API to display install counts for the selected packages from the year 2020 onwards.

## Tech Stack

- **React** (with TypeScript)
- **Vite** (for fast development and bundling)
- **React Query** (for efficient data fetching and caching)

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

The data shown in this project is fetched from the official **NPM API**. It calculates the total install count for each of the above-mentioned packages from the year 2020 to 2024. The total downloads are the sum of the yearly install counts.

Since this is an open-source project, you can verify the code and data fetching logic by checking the source code.

Note: The data is 48 hours delayed, and this is from the official NPM API.

## How It Works

1. The app fetches the install data for each package using the official NPM API.
2. It calculates the total installs per year (from 2020 onwards) and aggregates them to display the overall installs.
3. The install counts are updated in real time by polling the NPM registry.

Feel free to contribute or report any issues.
