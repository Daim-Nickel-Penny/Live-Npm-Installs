import { useEffect } from "react";
import { packageData, PackageData } from "../../data/package.data";
import "./packages.css";

const EachPackage = ({ id, name, link }: PackageData) => {
  return (
    <div
      className="each-package"
      key={id}
      onClick={() => window.open(link, "_blank")}
    >
      {name}
    </div>
  );
};

export default function Packages() {
  // const consoleLogGif = (gifUrl: string) => {
  //   console.log(
  //     "%c ",
  //     `font-size: 300px; background: url(${gifUrl}) no-repeat; background-size: contain;`
  //   );
  // };

  // // Trigger the GIF display when the component mounts
  // useEffect(() => {
  //   consoleLogGif("https://i.imgur.com/dBXnP7K.gif");
  // }, []);

  return (
    <div className="packages">
      {packageData.map((packageData) => {
        return <EachPackage {...packageData} />;
      })}
    </div>
  );
}
