import React, { useState } from 'react';
import { FiShoppingBag, FiChevronRight, FiStar, FiHeart } from 'react-icons/fi';

const ProductsPage = () => {
  // Sample product data (in a real app, this would come from an API)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Full Stack Developer AI/ML",
      category: "Software Development",
      price: 9999,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.9,
      variants: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"]
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      category: "Web Development",
      price: 9999,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8,
      variants: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      name: "Advanced Web Design UI/UX",
      category: "Design",
      price: 9999,
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7,
      variants: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      id: 4,
      name: "Mobile App Development",
      category: "Mobile Development",
      price: 9999,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      rating: 4.8,
      variants: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      id: 5,
      name: "Managing Software Projects",
      category: "Software Engineering",
      variants: ["Tenting", "Design"],
      price: 2999,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      rating: 4.6
    },
    {
      id: 6,
      name: "Sales Partnership Program",
      category: "Sales",
      variants: ["Partner", "Customer", "Service"],
      price: 2999,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.2
    },
    {
      id: 7,
      name: "Diploma in Graphics Design",
      category: "Design",
      price: 2999,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.4
    },
    {
      id: 8,
      name: "Diploma in Taxation & Accountancy",
      category: "Finance",
      price: 7999,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1511&q=80",
      rating: 4.1
    },
    {
      id: 9,
      name: "Diploma in Business Process Outsourcing",
      category: "Business",
      price: 7999,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.0
    },
    {
      id: 10,
      name: "Diploma in Hardware & Networking",
      category: "IT",
      price: 9999,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      rating: 4.6
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Handle adding to cart
  const addToBag = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <FiHeart className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h2>
                
                {/* Variants */}
                {product.variants && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>

                {/* Price and Add to Bag */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Added to your bag: {selectedProduct.name}
            </h3>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => {
                  // Here you would typically navigate to cart
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                View Bag <FiChevronRight className="inline ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;