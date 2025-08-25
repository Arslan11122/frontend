import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  Download, 
  Upload, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const converterTools = [
    {
      title: 'Word to PDF',
      description: 'Convert DOCX files to PDF format with perfect formatting',
      path: '/word-to-pdf',
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      title: 'PDF to Word',
      description: 'Extract and convert PDF content to editable DOCX files',
      path: '/pdf-to-word',
      icon: FileText,
      gradient: 'from-cyan-500 to-emerald-500'
    },
    {
      title: 'Text to PDF',
      description: 'Transform plain text files into professional PDF documents',
      path: '/txt-to-pdf',
      icon: FileText,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Image to PDF',
      description: 'Combine multiple images into a single PDF document',
      path: '/image-to-pdf',
      icon: FileText,
      gradient: 'from-teal-500 to-green-500'
    },
    {
      title: 'Excel to PDF',
      description: 'Convert spreadsheets to PDF with preserved formatting',
      path: '/excel-to-pdf',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Convert files in seconds with our optimized processing engine'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your files are processed locally and never stored on our servers'
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Access our conversion tools anytime, anywhere, from any device'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 mb-8">
            <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-300">Free • Fast • Secure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent mb-6 leading-tight">
            Convert Files
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The most powerful and user-friendly PDF conversion tools. 
            Transform any document format with professional quality results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <Upload className="mr-2 h-5 w-5" />
              Start Converting
            </Button>
            <Link to="/features">
              <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Converter Tools Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Conversion Tool
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional-grade conversion tools for all your document needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {converterTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.path} to={tool.path} className="group">
                  <Card className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full backdrop-blur-sm">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.gradient} shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        {tool.popular && (
                          <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {tool.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 flex-grow">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 font-medium group-hover:text-emerald-400 transition-colors duration-200">
                        <span>Convert Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose PDF Converter Pro?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for speed, security, and simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Convert?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust PDF Converter Pro for their document conversion needs.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-12 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Start Converting Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;