import { useQuery } from "@tanstack/react-query";

interface PackageData {
  id: string;
}

interface DownloadStats {
  downloads: { downloads: number }[];
}

function getParsedPackageData(data: DownloadStats): number {
  const downloads = data.downloads;
  return downloads.reduce((acc, curr) => acc + curr.downloads, 0);
}

async function fetchDownloadStats(
  packageName: string,
  startDate: string,
  endDate: string
): Promise<number> {
  const period = `${startDate}:${endDate}`;
  const endpoint = `https://api.npmjs.org/downloads/range/${period}/${packageName}`;

  try {
    const response = await fetch(endpoint);
    const data: DownloadStats = await response.json();
    return getParsedPackageData(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch download stats");
  }
}

export function usePackageDownloads(packageData: PackageData[]) {
  const yearRanges = [
    { start: "2020-01-01", end: "2021-01-01" },
    { start: "2021-01-01", end: "2022-01-01" },
    { start: "2022-01-01", end: "2023-01-01" },
    { start: "2023-01-01", end: "2024-01-01" },
  ];

  return useQuery(
    ["packageDownloads", packageData],
    async () => {
      let total = 0;

      for (const { id } of packageData) {
        const downloadsPromises = yearRanges.map(({ start, end }) =>
          fetchDownloadStats(id, start, end)
        );

        const yearlyDownloads = await Promise.all(downloadsPromises);
        total += yearlyDownloads.reduce((acc, count) => acc + count, 0);
      }

      return total;
    },
    {
      staleTime: 1000 * 60 * 60,
      onError: (error) => console.error("Failed to fetch data:", error),
    }
  );
}
