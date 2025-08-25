import React from 'react';
import FileConverter from '../components/FileConverter';
import { FileText } from 'lucide-react';
import { supportedFormats } from '../services/apiService';

const TxtToPdf = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <FileConverter
        title="Text to PDF Converter"
        description="Transform plain text files into professional PDF documents with customizable formatting and styling options."
        fromFormat="txt"
        toFormat="pdf"
        acceptedFiles=".txt"
        allowedTypes={supportedFormats.txtToPdf}
        icon={FileText}
      />
      
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">How to Convert Text to PDF</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional formatting</li>
                <li>• Custom font selection</li>
                <li>• Adjustable margins</li>
                <li>• Page numbering</li>
                <li>• Encoding support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional appearance</li>
                <li>• Universal compatibility</li>
                <li>• Print optimization</li>
                <li>• Secure sharing</li>
                <li>• Consistent formatting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxtToPdf;