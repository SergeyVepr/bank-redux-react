import './App.css'
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import HistoryOfTransaction from "./components/HistoryOfTransaction.jsx";

function App() {


    return (
        <div className="min-h-screen">
            <Balance/>
            <Operation/>
            <HistoryOfTransaction/>
        </div>
    )
}

export default App
