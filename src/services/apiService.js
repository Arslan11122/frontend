import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 300000, // 5 minutes for file conversion
});

export const conversionService = {
  // Word to PDF
  convertWordToPdf: async (file, onProgress = () => {}) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post('/convert/word-to-pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(percentCompleted);
      }
    });
    
    return response.data;
  },

  // PDF to Word
  convertPdfToWord: async (file, onProgress = () => {}) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post('/convert/pdf-to-word', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(percentCompleted);
      }
    });
    
    return response.data;
  },

  // Text to PDF
  convertTxtToPdf: async (file, onProgress = () => {}) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post('/convert/txt-to-pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(percentCompleted);
      }
    });
    
    return response.data;
  },

  // Image to PDF
  convertImageToPdf: async (files, onProgress = () => {}) => {
    const formData = new FormData();
    
    // Handle single or multiple files
    if (Array.isArray(files)) {
      files.forEach(file => {
        formData.append('files', file);
      });
    } else {
      formData.append('files', files);
    }
    
    const response = await apiClient.post('/convert/image-to-pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(percentCompleted);
      }
    });
    
    return response.data;
  },

  // Excel to PDF
  convertExcelToPdf: async (file, onProgress = () => {}) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post('/convert/excel-to-pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(percentCompleted);
      }
    });
    
    return response.data;
  },

  // Get conversion status
  getConversionStatus: async (jobId) => {
    const response = await apiClient.get(`/convert/status/${jobId}`);
    return response.data;
  },

  // Download converted file
  downloadFile: (jobId, filename) => {
    const downloadUrl = `${API}/convert/download/${jobId}`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // Cleanup conversion files
  cleanupFiles: async (jobId) => {
    try {
      await apiClient.delete(`/convert/cleanup/${jobId}`);
    } catch (error) {
      console.warn('Cleanup warning:', error.message);
    }
  }
};

export const fileValidation = {
  validateFile: (file, allowedTypes) => {
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
  }
};

export const supportedFormats = {
  wordToPdf: ['doc', 'docx'],
  pdfToWord: ['pdf'],
  txtToPdf: ['txt'],
  imageToPdf: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'],
  excelToPdf: ['xls', 'xlsx', 'csv']
};