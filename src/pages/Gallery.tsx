import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search, X } from "lucide-react";
import { categories, products } from "../data/gallery";

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16 md:px-10 xl:px-16">
        <div className="container mx-auto px-4">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              Gallery
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-grow md:max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search designs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                />
              </div>
              <button
                aria-label="Filter"
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Filter className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeCategory === category
                        ? "bg-[#d1f33a] text-gray-900"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="relative h-80 cursor-pointer"
                  onClick={() => openModal(product.image)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <span className="bg-[#d1f33a] text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
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
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">{product.category}</p>
                    </div>
                    <span className="text-lg font-bold">{product.price}</span>
                  </div>
                  <Link
                    to={`/design`}
                    className="block w-full bg-[#d1f33a] text-gray-900 text-center font-medium py-2 px-6 rounded-lg hover:bg-[#bde834] transition-colors duration-300"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
              onClick={closeModal}
            >
              <button
                aria-label="Close Button"
                className="absolute top-20 right-100 bg-gray-200 text-black rounded p-1"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>
              <div
                className="relative max-w-3xl w-full p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modalImage}
                  alt="Full Design"
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
