import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WordToPdf from "./pages/WordToPdf";
import PdfToWord from "./pages/PdfToWord";
import TxtToPdf from "./pages/TxtToPdf";
import ImageToPdf from "./pages/ImageToPdf";
import ExcelToPdf from "./pages/ExcelToPdf";
import Features from "./pages/Features";

function App() {
  return (
    <div className="App min-h-screen bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-to-pdf" element={<WordToPdf />} />
          <Route path="/pdf-to-word" element={<PdfToWord />} />
          <Route path="/txt-to-pdf" element={<TxtToPdf />} />
          <Route path="/image-to-pdf" element={<ImageToPdf />} />
          <Route path="/excel-to-pdf" element={<ExcelToPdf />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;