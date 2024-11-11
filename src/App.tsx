import "./App.css";
import { packageData } from "./data/package.data";
import { usePackageDownloads } from "./hooks/usePackageDownloads";

function App() {
  const {
    data: totalDownloads,
    isLoading,
    error,
  } = usePackageDownloads(packageData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching download stats</p>;
  }

  return (
    <>
      <h1>Total Downloads Across All Packages</h1>
      <p>{totalDownloads}</p>
    </>
  );
}

export default App;
