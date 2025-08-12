import { motion } from 'framer-motion';
import { FiFolder, FiShoppingBag, FiMusic, FiCamera, FiBook, FiCode, FiHeart } from 'react-icons/fi';

const iconComponents = {
  documents: FiFolder,
  shopping: FiShoppingBag,
  music: FiMusic,
  photos: FiCamera,
  books: FiBook,
  development: FiCode,
  favorites: FiHeart
};

const colorSchemes = {
  documents: 'from-blue-500 to-blue-600',
  shopping: 'from-purple-500 to-purple-600',
  music: 'from-pink-500 to-pink-600',
  photos: 'from-amber-500 to-amber-600',
  books: 'from-emerald-500 to-emerald-600',
  development: 'from-indigo-500 to-indigo-600',
  favorites: 'from-rose-500 to-rose-600'
};

const CategoryCard = ({ category, isActive, onClick }) => {
  const Icon = iconComponents[category.id] || FiFolder;
  const colors = colorSchemes[category.id] || 'from-gray-500 to-gray-600';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(category.id)}
      className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${isActive ? 'ring-4 ring-offset-2 ring-white ring-opacity-50' : ''}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-90`}></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 p-6 h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-4">
          <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-white opacity-90'}`} />
          {isActive && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 bg-white rounded-full"
            />
          )}
        </div>
        
        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-white' : 'text-white'}`}>
          {category.name}
        </h3>
        
        <p className={`text-sm ${isActive ? 'text-white opacity-90' : 'text-white opacity-70'}`}>
          {category.itemCount} items
        </p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isActive ? '100%' : '0%' }}
          className="mt-4 h-1 bg-white rounded-full"
        />
      </motion.div>
      
      {/* Animated background elements */}
      {isActive && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5 }}
          />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default CategoryCard;