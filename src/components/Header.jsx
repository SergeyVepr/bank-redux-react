const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <span className="app-header__logo">Iron Bank</span>
        <nav className="app-header__nav">
          <button
            type="button"
            className="app-header__link"
            onClick={() => scrollToSection("balance-section")}
          >
            Balance
          </button>
          <button
            type="button"
            className="app-header__link"
            onClick={() => scrollToSection("operations-section")}
          >
            Operations
          </button>
          <button
            type="button"
            className="app-header__link"
            onClick={() => scrollToSection("history-section")}
          >
            History
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

