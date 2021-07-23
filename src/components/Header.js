import "./css/Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <span style={{ color: "blue" }}>
          <i class="fas fa-stopwatch"></i>
        </span>
        <span style={{ fontWeight: "bold" }}>React counter V2</span>
      </div>
    </header>
  );
};
export default Header;
