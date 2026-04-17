// src/app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center text-center px-4">
      
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-[#244D3F] opacity-10">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl animate-bounce">🧐</span>
        </div>
      </div>

      
      <h2 className="text-3xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable. Let's get you back to your friends!
      </p>

      
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-[#244D3F] text-white rounded-full font-semibold shadow-lg hover:bg-[#1a3a30] transition-all transform hover:scale-105 active:scale-95"
        >
          Back to Home
        </Link>
        
       
      </div>

      
      <div className="flex gap-2 mt-12">
        <div className="w-3 h-3 rounded-full bg-green-200"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-600"></div>
      </div>
    </div>
  );
}