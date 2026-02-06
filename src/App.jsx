import "./App.css";
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import HistoryOfTransaction from "./components/HistoryOfTransaction.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen app-layout">
      <Header />

      <main className="app-main">
        <section id="balance-section" className="app-section">
          <Balance />
        </section>

        <section id="operations-section" className="app-section">
          <Operation />
        </section>

        <section id="history-section" className="app-section">
          <HistoryOfTransaction />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
