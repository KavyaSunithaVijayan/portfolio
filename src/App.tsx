import "./App.css";
import Portfolio from "./pages/portfolio";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Snowfall from "react-snowfall";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Portfolio />
      </div>
      <Footer />
      <Snowfall
        color="red"
        style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
        snowflakeCount={60}
      />
    </div>
  );
}

export default App;
