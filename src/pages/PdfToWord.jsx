import React from 'react';
import FileConverter from '../components/FileConverter';
import { FileText } from 'lucide-react';
import { supportedFormats } from '../services/apiService';

const PdfToWord = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <FileConverter
        title="PDF to Word Converter"
        description="Extract and convert PDF content to editable Microsoft Word documents with accurate text and formatting preservation."
        fromFormat="pdf"
        toFormat="word"
        acceptedFiles=".pdf"
        allowedTypes={supportedFormats.pdfToWord}
        icon={FileText}
      />
      
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">How to Convert PDF to Word</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Accurate text extraction</li>
                <li>• Preserves document structure</li>
                <li>• Maintains tables and lists</li>
                <li>• OCR for scanned PDFs</li>
                <li>• Multi-page support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Fully editable documents</li>
                <li>• Easy content modification</li>
                <li>• Word processing features</li>
                <li>• Collaboration ready</li>
                <li>• Version control support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfToWord;