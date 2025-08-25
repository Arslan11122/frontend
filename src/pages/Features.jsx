import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { 
  Zap, 
  Shield, 
  Clock, 
  Globe, 
  Users, 
  Award,
  FileCheck,
  Download,
  Upload,
  Settings
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Convert your files in seconds with our optimized processing engine. No more waiting around for slow conversions.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your files are processed locally and automatically deleted after conversion. We never store or access your documents.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access our conversion tools anytime, anywhere, from any device. No software installation required.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Works on all devices and browsers. Convert files from Windows, Mac, Linux, iOS, and Android.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Batch Processing',
      description: 'Convert multiple files simultaneously to save time. Perfect for bulk document processing needs.',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Industry-leading conversion algorithms ensure perfect formatting and layout preservation.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const conversionFeatures = [
    {
      icon: FileCheck,
      title: 'Format Validation',
      description: 'Automatic file format detection and validation'
    },
    {
      icon: Settings,
      title: 'Custom Settings',
      description: 'Adjustable quality and compression options'
    },
    {
      icon: Download,
      title: 'Instant Download',
      description: 'Download converted files immediately'
    },
    {
      icon: Upload,
      title: 'Drag & Drop',
      description: 'Easy file upload with drag and drop support'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Files Converted' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '2.3s', label: 'Average Speed' },
    { number: '50+', label: 'File Formats' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Everything you need for professional document conversion, 
            built with cutting-edge technology and user experience in mind.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose PDF Converter Pro?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for professionals, designed for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Conversion Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced tools for perfect document conversion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported File Formats
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Convert between all popular document and image formats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Document Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {['PDF', 'DOC', 'DOCX', 'TXT', 'RTF'].map((format) => (
                    <span key={format} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                      {format}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Spreadsheet Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {['XLS', 'XLSX', 'CSV', 'ODS'].map((format) => (
                    <span key={format} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                      {format}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Image Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {['JPG', 'PNG', 'GIF', 'TIFF', 'BMP'].map((format) => (
                    <span key={format} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                      {format}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users who trust PDF Converter Pro for their document conversion needs.
            </p>
            <a href="/" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <Zap className="mr-2 h-5 w-5" />
              Start Converting Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;