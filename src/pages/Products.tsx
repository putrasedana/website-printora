import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Tank Tops', 'Long Sleeve', 'V-Necks'];
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Classic Cotton Crew',
      category: 'T-Shirts',
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
      colors: ['white', 'black', 'gray', 'navy'],
      isNew: true
    },
    {
      id: 2,
      name: 'Premium Zip Hoodie',
      category: 'Hoodies',
      price: '$49.99',
      image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
      colors: ['black', 'gray', 'navy'],
      isBestSeller: true
    },
    {
      id: 3,
      name: 'Athletic Tank',
      category: 'Tank Tops',
      price: '$22.99',
      image: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg',
      colors: ['white', 'black', 'red']
    },
    {
      id: 4,
      name: 'Vintage Wash Tee',
      category: 'T-Shirts',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg',
      colors: ['blue', 'green', 'red'],
      isBestSeller: true
    },
    {
      id: 5,
      name: 'Comfort V-Neck',
      category: 'V-Necks',
      price: '$26.99',
      image: 'https://images.pexels.com/photos/8346232/pexels-photo-8346232.jpeg',
      colors: ['white', 'black', 'pink']
    },
    {
      id: 6,
      name: 'Long Sleeve Essential',
      category: 'Long Sleeve',
      price: '$32.99',
      image: 'https://images.pexels.com/photos/7691097/pexels-photo-7691097.jpeg',
      colors: ['white', 'black', 'gray'],
      isNew: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">Our Products</h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-grow md:max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Filter className="h-6 w-6" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-gray-600">{product.category}</p>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                        title={color.charAt(0).toUpperCase() + color.slice(1)}
                      />
                    ))}
                  </div>
                  <Link
                    to={`/design`}
                    className="block w-full bg-blue-600 text-white text-center font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Customize Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;