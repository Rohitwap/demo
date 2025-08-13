import React, { useState } from 'react';
import { FiShoppingBag, FiChevronRight, FiStar, FiHeart } from 'react-icons/fi';

const ProductsPage = () => {
  // Sample product data (in a real app, this would come from an API)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Limbro Drive",
      category: "Sales",
      variants: ["SAYS US", "PUNNY", "WEB", "FTP", "PRT-WALL", "CAREER PCS"],
      price: 10000,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.5
    },
    {
      id: 2,
      name: "Advanced Diploma in Network Engineering",
      category: "Education",
      price: 10000,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8
    },
    {
      id: 3,
      name: "Advanced Diploma in Software Engineering",
      category: "Education",
      price: 10000,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      rating: 4.7
    },
    {
      id: 4,
      name: "Diploma in Computer Programming",
      category: "Education",
      price: 10000,
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.3
    },
    {
      id: 5,
      name: "Managing Software Projects",
      category: "Software Engineering",
      variants: ["Tenting", "Design"],
      price: 8500,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      rating: 4.6
    },
    {
      id: 6,
      name: "Sales Partnership Program",
      category: "Sales",
      variants: ["Partner", "Customer", "Service"],
      price: 7500,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.2
    },
    // Newly added courses
    {
      id: 7,
      name: "Diploma in Graphics Design",
      category: "Design",
      price: 9500,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.4
    },
    {
      id: 8,
      name: "Diploma in Taxation & Accountancy",
      category: "Finance",
      price: 8800,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1511&q=80",
      rating: 4.1
    },
    {
      id: 9,
      name: "Diploma in Business Process Outsourcing",
      category: "Business",
      price: 9200,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.0
    },
    {
      id: 10,
      name: "Diploma in Hardware & Networking",
      category: "IT",
      price: 10500,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      rating: 4.6
    },
    {
      id: 11,
      name: "Diploma in Multimedia & Animation",
      category: "Design",
      price: 11000,
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7
    },
    {
      id: 12,
      name: "Diploma in Software",
      category: "IT",
      price: 10000,
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      rating: 4.5
    },
    {
      id: 13,
      name: "Certificate in Graphic Design",
      category: "Design",
      price: 6500,
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.3
    },
    {
      id: 14,
      name: "Diploma in Computer Application",
      category: "IT",
      price: 9800,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.2
    },
    {
      id: 15,
      name: "Certificate in Web Design",
      category: "Web Development",
      price: 7000,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80",
      rating: 4.4
    },
    {
      id: 16,
      name: "Diploma in Information Technology",
      category: "IT",
      price: 10200,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.6
    },
    {
      id: 17,
      name: "Basic Course in SQL",
      category: "Database",
      price: 5500,
      image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.0
    },
    {
      id: 18,
      name: "Certificate in Desktop Publishing",
      category: "Design",
      price: 6000,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1136&q=80",
      rating: 4.1
    },
    {
      id: 19,
      name: "Basic Course in Visual Basic",
      category: "Programming",
      price: 5800,
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      rating: 3.9
    },
    {
      id: 20,
      name: "Certificate in ASP.NET/Core Java/PHP/AutoCAD",
      category: "Programming",
      variants: ["ASP.NET", "Core Java", "PHP", "AutoCAD"],
      price: 7500,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.2
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