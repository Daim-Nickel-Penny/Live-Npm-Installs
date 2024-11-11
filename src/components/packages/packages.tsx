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
  return (
    <div className="packages">
      {packageData.map((packageData) => {
        return <EachPackage {...packageData} />;
      })}
    </div>
  );
}
