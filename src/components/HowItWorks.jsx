import React from 'react';

import {
  ThumbsUp,
  FileUp,
  ScanLine,
  FileText,
  Paperclip,
  Send,
  BarChart2,
  Heart
} from 'lucide-react';
import assets from '../assets/assets';

const steps = [
  {
    icon: FileUp,
    title: 'Upload Your Document',
    description: 'Securely upload your certificate, invoice, or report for analysis.',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    icon: ScanLine,
    title: 'AI-Powered Verification',
    description: 'Our system instantly checks the document against known markers and databases.',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    icon: FileText,
    title: 'Get Your Report',
    description: 'Receive a detailed verification report in seconds, ready to share.',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              ACADSHIELD VERIFICATION
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex items-center">
              How does it work? 
              <ThumbsUp className="ml-3 h-10 w-10 text-yellow-400 fill-yellow-400" />
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our process is designed to be simple, fast, and transparent. 
              Get your documents verified in just three easy steps.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="flex items-start">
                    <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full ${step.bgColor} ${step.textColor}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-base text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none overflow-visible">
              
              <div className="relative bg-white rounded-2xl shadow-xl p-5">
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <img
                    src={assets.documentControl}
                    alt="Stack of documents"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 flex items-center">
                  Select a document 
                  <FileText className="ml-2 h-5 w-5 text-gray-500" />
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  29 July, 2025 | by Shandika
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-3 text-gray-400">
                    <Paperclip className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                    <Send className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <BarChart2 className="h-5 w-5" />
                    <span>12 hours saved today</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <Heart className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-4 right-0 sm:-bottom-8 sm:-right-8 lg:-right-16 bg-white shadow-2xl rounded-2xl p-4 w-56 sm:w-64">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">Ongoing</span>
                  <div className="relative w-10 h-10">
                    <img
                      src={assets.coverDefault}
                      alt="Avatar"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="mt-2 text-base font-semibold text-gray-900">
                  Migration Sevika
                </h4>
                <div className="mt-3">
                  <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">40% completed</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;