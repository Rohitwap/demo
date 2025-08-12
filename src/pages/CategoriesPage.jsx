import { useState } from 'react';
import EnhancedSidebar from './EnhancedSidebar';
import CategoriesGrid from './CategoriesGrid';

const CategoriesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <EnhancedSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="md:hidden mb-4 p-2 rounded-lg bg-gray-800 text-white"
          >
            ☰
          </button>
          <CategoriesGrid />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;