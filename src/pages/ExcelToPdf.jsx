import React from 'react';
import FileConverter from '../components/FileConverter';
import { Sheet } from 'lucide-react';
import { supportedFormats } from '../services/apiService';

const ExcelToPdf = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <FileConverter
        title="Excel to PDF Converter"
        description="Convert Excel spreadsheets (XLS, XLSX, CSV) to PDF format while maintaining table structure, formulas, and formatting."
        fromFormat="excel"
        toFormat="pdf"
        acceptedFiles=".xls,.xlsx,.csv"
        allowedTypes={supportedFormats.excelToPdf}
        icon={Sheet}
      />
      
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">How to Convert Excel to PDF</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Preserves table structure</li>
                <li>• Maintains cell formatting</li>
                <li>• Multiple sheet support</li>
                <li>• Chart conversion</li>
                <li>• Formula preservation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional reports</li>
                <li>• Secure data sharing</li>
                <li>• Print optimization</li>
                <li>• Universal access</li>
                <li>• Version control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelToPdf;