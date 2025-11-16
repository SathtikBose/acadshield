import React from 'react';
import { 
  Clapperboard, 
  ChevronRight, 
  FileSearch,   
  BadgeCheck,   
  Play,         
  Wand2         
} from 'lucide-react';

const VideoDemo = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase">
              DEMO ACADSHIELD
            </span>
            <h2 className="flex items-center text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              <Clapperboard className="w-8 h-8 mr-3 text-blue-500" />
              Go Through Video of the Website
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
          >
            View
            <ChevronRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">

            <div className="bg-teal-400 h-48 flex items-center justify-center">
              <FileSearch className="w-24 h-24 text-white opacity-75" />

            </div>
            <div className="p-6 flex-grow">
              <p className="text-xs text-gray-500 mb-2">26 DESEMBER 2021</p>
              <h3 className="font-semibold text-gray-900 mb-3">
                Verified by AcadShield
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                The above document has a verification score of 97%
              </p>
              <div className="flex items-center text-sm font-medium text-green-600">
                <BadgeCheck className="w-5 h-5 mr-1.5 text-green-500" />
                Verified
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden relative">

            <img
              src="https://placehold.co/800x450/334155/94a3b8?text=Video+Thumbnail"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/30 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/50 transition-colors">
                <Play className="w-12 h-12 fill-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-900 rounded-lg shadow-lg overflow-hidden relative min-h-[200px] flex items-end">

            <img 
              src="https://placehold.co/1200x300/57534e/a8a29e?text=Tips+Background"
              alt="Tips background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative p-6 sm:p-8 text-white">
              <h3 className="flex items-center text-xl sm:text-2xl font-semibold mb-2">
                Tips on what to expect from the verification portal
                <Wand2 className="w-6 h-6 ml-2 text-yellow-300" />
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Lidah melepuh? why nott. kawah bukan for dilihat kawan..
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium bg-white/10 text-white rounded-full px-3 py-1">
                  Google
                </span>
                <span className="text-xs font-medium bg-white/10 text-white rounded-full px-3 py-1">
                  Trending
                </span>
                <span className="text-xs font-medium bg-white/10 text-white rounded-full px-3 py-1">
                  Baru
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoDemo;