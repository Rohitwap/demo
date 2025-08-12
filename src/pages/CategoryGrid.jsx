import { useState } from 'react';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';

const CategoriesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('documents');
  
  const categories = [
    { id: 'documents', name: 'Documents', itemCount: 124 },
    { id: 'shopping', name: 'Shopping', itemCount: 42 },
    { id: 'music', name: 'Music', itemCount: 367 },
    { id: 'photos', name: 'Photos', itemCount: 893 },
    { id: 'books', name: 'Books', itemCount: 56 },
    { id: 'development', name: 'Development', itemCount: 78 },
    { id: 'favorites', name: 'Favorites', itemCount: 31 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Your Categories</h1>
          <p className="text-gray-400">Browse through your organized content</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <CategoryCard
                category={category}
                isActive={activeCategory === category.id}
                onClick={setActiveCategory}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Active category content placeholder */}
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className={`bg-gradient-to-br ${colorSchemes[activeCategory]} p-3 rounded-lg mr-4`}>
                {React.createElement(iconComponents[activeCategory], { className: "w-6 h-6 text-white" })}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              This is your {categories.find(c => c.id === activeCategory)?.name.toLowerCase()} content. 
              You have {categories.find(c => c.id === activeCategory)?.itemCount} items in this category.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-br ${colorSchemes[activeCategory]} text-white px-6 py-3 rounded-lg font-medium`}
            >
              Explore {categories.find(c => c.id === activeCategory)?.name}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoriesGrid;