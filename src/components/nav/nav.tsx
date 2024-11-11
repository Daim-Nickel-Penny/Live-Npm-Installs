import "./nav.css";

export default function Nav(): JSX.Element {
  return (
    <nav className="nav">
      <img
        className="npm-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png"
        alt="npm logo"
        onClick={() => window.open("https://www.npmjs.com/~daimkhan", "_blank")}
      />
      <img
        className="github-logo"
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="github logo"
        onClick={() =>
          window.open("https://github.com/Daim-Nickel-Penny", "_blank")
        }
      />
    </nav>
  );
}
