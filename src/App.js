import ImageComponent from "./components/ImageComponent";
import Navbar from "./components/Navbar";
import Qrcode from "./components/Qrcode";
import Tagline from "./components/Tagline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import Textutil from "./components/Textutil";
import TextExtractor from "./components/TextExtractor";
import PasswordGenerator from "./components/PasswordGenerator";
import Youtube from "./components/Youtube";
import ImageConverter from "./components/ImageConvertor";
import URLShortener from "./components/URLShortener";
import PdfCompressor from "./components/PdfCompressor";
import Contributers from "./components/Contributers";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Navbar />
      <Tagline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contributers" element={<Contributers />} />
        <Route path="/signup" element={<Signup />} />
        {/* to be added later */}
        {/* <Route path="" element={<Tools />} />
        <Route path="" element={<ImageComponent />} />
        <Route path="" element={<Qrcode />} />
        <Route path="" element={<Textutil />} />
        <Route path="" element={<TextExtractor />} />
        <Route path="" element={<PasswordGenerator />} />
        <Route path="" element={<Youtube />} />
        <Route path="" element={<ImageConverter />} />
        <Route path="" element={<URLShortener />} />
        <Route path="" element={<PdfCompressor />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
