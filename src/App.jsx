import { Box, Text, Title } from "@mantine/core";
import Router from "./Router";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar
       />
      <Router />
      <Footer />
    </>
  );
}

export default App;
