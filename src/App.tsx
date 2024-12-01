import "./App.css";

import Loading from "./components/loading/loading";
import Nav from "./components/nav/nav";
import Packages from "./components/packages/packages";

import { packageData } from "./data/package.data";
import { usePackageDownloads } from "./hooks/usePackageDownloads";

import BottomImage from "./assets/bg-clear.png";
import InstallCount from "./components/installCount/InstallCount";
import SkyVideoComponent from "./components/skyVideo/SkyVideo";

function App() {
  const {
    data: totalDownloads,
    isLoading,
    error,
  } = usePackageDownloads(packageData);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error fetching download stats</p>;
  }

  return (
    <div className="App">
      <SkyVideoComponent />
      <div className="content">
        <Nav />
        <InstallCount installCount={totalDownloads} />
        <Packages />

        <img
          className="bottom-image"
          alt="bottom-image"
          src={BottomImage}
          loading="eager"
        />
      </div>
    </div>
  );
}

export default App;
