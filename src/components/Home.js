import React from "react";
import ImageComponent from "./ImageComponent";
import Qrcode from "./Qrcode";
import Tools from "./Tools";
import Textutil from "./Textutil";
import TextExtractor from "./TextExtractor";
import PasswordGenerator from "./PasswordGenerator";
import Youtube from "./Youtube";
import ImageConverter from "./ImageConvertor";
import URLShortener from "./URLShortener";
import PdfCompressor from "./PdfCompressor";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
