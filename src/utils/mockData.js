// Mock data and functions for file conversion functionality

export const mockConversionProcess = async (file, fromFormat, toFormat) => {
  // Simulate file upload and processing
  const steps = [
    'Uploading file...',
    'Analyzing document structure...',
    'Processing content...',
    'Optimizing output...',
    'Generating download link...'
  ];

  for (let i = 0; i < steps.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
    // This would typically update progress in the actual implementation
  }

  // Mock successful conversion result
  return {
    success: true,
    originalFile: file.name,
    convertedFileName: `${file.name.split('.')[0]}_converted.${toFormat}`,
    fileSize: Math.floor(file.size * (0.8 + Math.random() * 0.4)), // Simulate size change
    downloadUrl: '#', // Mock URL
    conversionTime: (Math.random() * 3 + 1).toFixed(1) + 's'
  };
};

export const mockFileValidation = (file, allowedTypes) => {
  const fileExtension = file.name.split('.').pop().toLowerCase();
  const maxSize = 50 * 1024 * 1024; // 50MB limit
  
  if (!allowedTypes.includes(fileExtension)) {
    return {
      valid: false,
      error: `Invalid file type. Supported formats: ${allowedTypes.join(', ').toUpperCase()}`
    };
  }
  
  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File size exceeds 50MB limit'
    };
  }
  
  return { valid: true };
};

export const supportedFormats = {
  wordToPdf: ['doc', 'docx'],
  pdfToWord: ['pdf'],
  txtToPdf: ['txt'],
  imageToPdf: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'],
  excelToPdf: ['xls', 'xlsx', 'csv']
};

export const conversionStats = {
  totalConversions: 1234567,
  filesProcessedToday: 8923,
  averageProcessingTime: '2.3s',
  successRate: '99.9%'
};