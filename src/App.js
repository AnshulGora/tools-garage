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

function App() {
  return (
    <>
      <Navbar />
      <Tagline />
      <Tools />
      <ImageComponent />
      <Qrcode />
      <Textutil />
      <TextExtractor />
      <PasswordGenerator />
      <Youtube />
      <ImageConverter />
      <URLShortener />
      <PdfCompressor />
      <Footer />
    </>
  );
}

export default App;
