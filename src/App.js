import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the utility

// Component Imports
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import ImageComponent from "./components/ImageComponent";
import Qrcode from "./components/Qrcode";
import Textutil from "./components/Textutil";
import TextExtractor from "./components/TextExtractor";
import PasswordGenerator from "./components/PasswordGenerator";
import Youtube from "./components/Youtube";
import ImageConverter from "./components/ImageConvertor";
import URLShortener from "./components/URLShortener";
import PdfCompressor from "./components/PdfCompressor";
import Contributers from "./components/Contributers";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* This ensures the page moves to the top on route change */}
      <Navbar />
      <Tagline />
      <Routes>
        {/* Main Landing & General Pages */}
        <Route exact path="/" element={<Tools />} />
        <Route path="/contributors" element={<Contributers />} />
        <Route path="/signup" element={<Signup />} />

        {/* Individual Tool Routes */}
        <Route path="/image-tools" element={<ImageComponent />} />
        <Route path="/qr-generator" element={<Qrcode />} />
        <Route path="/text-utils" element={<Textutil />} />
        <Route path="/text-extractor" element={<TextExtractor />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/youtube-tools" element={<Youtube />} />
        <Route path="/image-converter" element={<ImageConverter />} />
        <Route path="/url-shortener" element={<URLShortener />} />
        <Route path="/pdf-compressor" element={<PdfCompressor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
