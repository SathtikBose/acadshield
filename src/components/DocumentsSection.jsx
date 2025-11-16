import React from 'react';
import assets from '../assets/assets';

const documents = [
  {
    src: assets.schoolBuilding,
    alt: 'Institutions Certificates',
    title: 'Institutions',
    subtitle: 'Certificates',
    id: 'institutions',
  },
  {
    src: assets.productImage, 
    alt: 'Legacy Documents',
    title: 'State and City',
    subtitle: 'Legacy Documents',
    id: 'legacy',
  },
  {
    src: assets.officeWorkspace, 
    alt: 'Fake Invoice Bills',
    title: 'Fake Invoice',
    subtitle: 'Bills',
    id: 'fake-invoice',
  },
  {
    src: assets.medicalReport, 
    alt: 'Medical Reports',
    title: 'Medical',
    subtitle: 'Reports',
    id: 'medical-reports',
  },
];

const DocumentsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Ease Uploads
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Documents that can be tested
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View all
            <svg
              className="ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {documents.map((doc, index) => (

            <div
              key={doc.id}
              className={`relative rounded-lg shadow-md overflow-hidden bg-white 
              ${index === 3 ? 'hidden lg:block' : ''}`} 
            >
              <div className="w-full h-48">
                <img
                  src={doc.src}
                  alt={doc.alt}
                  className="rounded-t-lg object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {doc.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {doc.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;