import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { useToast } from '../hooks/use-toast';
import { 
  Upload, 
  FileText, 
  Download, 
  CheckCircle, 
  X, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { conversionService, fileValidation, supportedFormats } from '../services/apiService';

const FileConverter = ({ 
  title, 
  description, 
  fromFormat, 
  toFormat, 
  acceptedFiles, 
  allowedTypes,
  icon: Icon = FileText 
}) => {
  const [files, setFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const { toast } = useToast();

  const handleFileSelect = useCallback((event) => {
    const selectedFiles = Array.from(event.target.files);
    
    const validFiles = [];
    const errors = [];

    selectedFiles.forEach(file => {
      const validation = fileValidation.validateFile(file, allowedTypes);
      if (validation.valid) {
        validFiles.push({
          file,
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          status: 'ready'
        });
      } else {
        errors.push(`${file.name}: ${validation.error}`);
      }
    });

    if (errors.length > 0) {
      toast({
        title: "File Validation Error",
        description: errors.join('\n'),
        variant: "destructive"
      });
    }

    setFiles(prev => [...prev, ...validFiles]);
  }, [allowedTypes, toast]);

  const handleFileDrop = useCallback((event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    
    const mockEvent = { target: { files: droppedFiles } };
    handleFileSelect(mockEvent);
  }, [handleFileSelect]);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const convertFiles = async () => {
    if (files.length === 0) {
      toast({
        title: "No Files Selected",
        description: "Please select files to convert",
        variant: "destructive"
      });
      return;
    }

    setIsConverting(true);
    setConversionProgress(0);
    const converted = [];

    for (let i = 0; i < files.length; i++) {
      const fileData = files[i];
      setConversionProgress(((i + 0.5) / files.length) * 100);
      
      try {
        let result;
        
        // Determine conversion function based on formats
        if (fromFormat === 'word' && toFormat === 'pdf') {
          result = await conversionService.convertWordToPdf(fileData.file);
        } else if (fromFormat === 'pdf' && toFormat === 'word') {
          result = await conversionService.convertPdfToWord(fileData.file);
        } else if (fromFormat === 'txt' && toFormat === 'pdf') {
          result = await conversionService.convertTxtToPdf(fileData.file);
        } else if (fromFormat === 'image' && toFormat === 'pdf') {
          result = await conversionService.convertImageToPdf(fileData.file);
        } else if (fromFormat === 'excel' && toFormat === 'pdf') {
          result = await conversionService.convertExcelToPdf(fileData.file);
        }
        
        if (result && result.success) {
          // Poll for conversion status
          const jobId = result.job_id;
          let statusResult;
          let attempts = 0;
          const maxAttempts = 30; // 30 seconds timeout
          
          do {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
            statusResult = await conversionService.getConversionStatus(jobId);
            attempts++;
          } while (statusResult.status === 'processing' && attempts < maxAttempts);
          
          if (statusResult.status === 'completed') {
            converted.push({
              id: fileData.id,
              originalFile: fileData,
              convertedFileName: result.converted_filename,
              fileSize: statusResult.converted_file_size || result.file_size,
              conversionTime: statusResult.conversion_time ? `${statusResult.conversion_time}s` : 'N/A',
              downloadUrl: statusResult.download_url,
              jobId: jobId
            });
          } else {
            throw new Error(statusResult.error_message || 'Conversion failed');
          }
        } else {
          throw new Error(result.error || 'Conversion failed');
        }
        
      } catch (error) {
        toast({
          title: "Conversion Error",
          description: `Failed to convert ${fileData.name}: ${error.message}`,
          variant: "destructive"
        });
      }
      
      setConversionProgress(((i + 1) / files.length) * 100);
    }

    setConvertedFiles(converted);
    setIsConverting(false);
    
    if (converted.length > 0) {
      toast({
        title: "Conversion Complete!",
        description: `Successfully converted ${converted.length} file(s)`,
      });
    }
  };

  const downloadFile = (convertedFile) => {
    try {
      conversionService.downloadFile(convertedFile.jobId, convertedFile.convertedFileName);
      
      toast({
        title: "Download Started",
        description: `Downloading ${convertedFile.convertedFileName}`,
      });
      
      // Optional: Cleanup files after download
      setTimeout(() => {
        conversionService.cleanupFiles(convertedFile.jobId);
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Failed to download file",
        variant: "destructive"
      });
    }
  };

  const downloadAll = () => {
    convertedFiles.forEach(file => {
      setTimeout(() => downloadFile(file), 100);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
      </div>

      {/* File Upload Area */}
      <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Upload className="mr-2 h-5 w-5" />
            Upload Files
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors duration-300 cursor-pointer"
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById('file-input').click()}
          >
            <Upload className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
            <p className="text-white text-lg font-medium mb-2">
              Drag and drop your files here
            </p>
            <p className="text-gray-400 mb-4">
              or click to browse files
            </p>
            <p className="text-sm text-gray-500">
              Supported formats: {allowedTypes.join(', ').toUpperCase()}
            </p>
            <input
              id="file-input"
              type="file"
              multiple
              accept={acceptedFiles}
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </CardContent>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Selected Files ({files.length})
              </span>
              {!isConverting && convertedFiles.length === 0 && (
                <Button
                  onClick={convertFiles}
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
                >
                  Convert All
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {files.map((fileData) => (
              <div key={fileData.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex-1">
                  <p className="text-white font-medium">{fileData.name}</p>
                  <p className="text-gray-400 text-sm">{formatFileSize(fileData.size)}</p>
                </div>
                {!isConverting && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(fileData.id)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Conversion Progress */}
      {isConverting && (
        <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Loader2 className="h-5 w-5 text-cyan-400 animate-spin mr-2" />
              <span className="text-white font-medium">Converting files...</span>
            </div>
            <Progress value={conversionProgress} className="mb-2" />
            <p className="text-gray-400 text-sm">{conversionProgress.toFixed(0)}% complete</p>
          </CardContent>
        </Card>
      )}

      {/* Converted Files */}
      {convertedFiles.length > 0 && (
        <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                Converted Files ({convertedFiles.length})
              </span>
              <Button
                onClick={downloadAll}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {convertedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                <div className="flex-1">
                  <p className="text-white font-medium">{file.convertedFileName}</p>
                  <p className="text-gray-400 text-sm">
                    {formatFileSize(file.fileSize)} • Converted in {file.conversionTime}
                  </p>
                </div>
                <Button
                  onClick={() => downloadFile(file)}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FileConverter;