import React from 'react';
import FileConverter from '../components/FileConverter';
import { Image } from 'lucide-react';
import { supportedFormats } from '../services/apiService';

const ImageToPdf = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <FileConverter
        title="Image to PDF Converter"
        description="Combine multiple images (JPG, PNG, GIF, TIFF) into a single PDF document with customizable layout and quality settings."
        fromFormat="image"
        toFormat="pdf"
        acceptedFiles=".jpg,.jpeg,.png,.gif,.bmp,.tiff"
        allowedTypes={supportedFormats.imageToPdf}
        icon={Image}
      />
      
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">How to Convert Images to PDF</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Multiple image formats</li>
                <li>• Batch processing</li>
                <li>• Custom page layouts</li>
                <li>• Quality optimization</li>
                <li>• Image compression</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Single document output</li>
                <li>• Easy sharing and storage</li>
                <li>• Professional presentation</li>
                <li>• Reduced file count</li>
                <li>• Print-ready format</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToPdf;