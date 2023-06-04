import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Flights from "./pages/flights";
import CarRentals from "./pages/carrentals";
import Attractions from "./pages/attractions";
import AirportTaxis from "./pages/airporttaxis";
import Hotels from "./pages/hotels";

function App() {
  return (
    <Router>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Hotels/>}/>
            <Route path="/flights" element={<Flights/>}/>
            <Route path="/carrentals" element={<CarRentals/>}/>
            <Route path="/attractions" element={<Attractions/>}/>
            <Route path="/airporttaxis" element={<AirportTaxis/>}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
