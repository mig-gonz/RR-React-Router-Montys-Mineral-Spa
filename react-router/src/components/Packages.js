import { Link } from "react-router-dom";

export default function Packages({ packages }) {
  const pack = packages.map((eachPackage) => <li>{eachPackage}</li>);
  return (
    <div>
      <div className="packages">
        <div className="packagesHeader">
          <h1>Our Packages</h1>
        </div>
        <ul>
          {/* only linking one for the activity bonus */}
          <li>{<Link to="/crystals">{packages[0]}</Link>}</li>

          {/* pack */}

          {pack[1]}
          {pack[2]}
          {pack[3]}
          {pack[4]}
        </ul>
      </div>
    </div>
  );
}
