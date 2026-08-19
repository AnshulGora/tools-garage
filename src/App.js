import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the utility

// Component Imports
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import ImageComponent from "./components/ImageComponent";
import Qrcode from "./components/Qrcode";
import PasswordGenerator from "./components/PasswordGenerator";
import ImageConverter from "./components/ImageConvertor";
import URLShortener from "./components/URLShortener";
import PdfCompressor from "./components/PdfCompressor";
import WorldClock from "./components/WorldClock";
import CurrencyConverter from "./components/CurrencyConverter";
import Contributers from "./components/Contributers";
import Signup from "./components/Signup";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {pathname === "/" && <Tagline />}
      <Routes>
        {/* Main Landing & General Pages */}
        <Route exact path="/" element={<Tools />} />
        <Route path="/contributors" element={<Contributers />} />
        <Route path="/signup" element={<Signup />} />

        {/* Individual Tool Routes */}
        <Route path="/image-tools" element={<ImageComponent />} />
        <Route path="/qr-generator" element={<Qrcode />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/image-converter" element={<ImageConverter />} />
        <Route path="/url-shortener" element={<URLShortener />} />
        <Route path="/pdf-compressor" element={<PdfCompressor />} />
        <Route path="/world-clock" element={<WorldClock />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
