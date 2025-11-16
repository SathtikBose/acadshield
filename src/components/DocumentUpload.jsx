'use client';
import assets from '../assets/assets';
import React from 'react';

const DocumentUpload = () => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log('Files dropped:', e.dataTransfer.files);
  };

  const handleFileSelect = (e) => {
    console.log('Files selected:', e.target.files);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 flex justify-center items-center min-h-[50vh]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative border-t-2 border-b-2 border-dashed border-gray-300  p-8 sm:p-12 md:p-16 text-center
                     transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 cursor-pointer`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload-input').click()}
        >
          <div className="mb-8 flex justify-center">
            <img
              src={assets.uploadDocumentIllustration}
              alt="Upload Illustration"
              className="max-w-[200px] h-auto"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Drop your Documents here
          </h2>
          <p className="text-gray-600 mb-6">or click to browse files</p>
          <input
            id="file-upload-input"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <p className="text-sm text-gray-500 mt-8">
            Supports PDF, DOC, DOCX, JPG, PNG files up to 10MB
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;
