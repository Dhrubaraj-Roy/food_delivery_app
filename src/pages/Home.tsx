import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Star, Truck, Shield, ChevronRight, MapPin, Search } from 'lucide-react'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', count: 25 },
    { id: 2, name: 'Burgers', icon: '🍔', count: 18 },
    { id: 3, name: 'Sushi', icon: '🍣', count: 12 },
    { id: 4, name: 'Pasta', icon: '🍝', count: 15 },
    { id: 5, name: 'Salads', icon: '🥗', count: 8 },
    { id: 6, name: 'Desserts', icon: '🍰', count: 10 },
  ]

  const popularItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 18.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop',
      deliveryTime: '25-35 min',
      restaurant: 'Pizza Palace'
    },
    {
      id: 2,
      name: 'Classic Burger',
      price: 12.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      deliveryTime: '20-30 min',
      restaurant: 'Burger House'
    },
    {
      id: 3,
      name: 'California Roll',
      price: 15.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1579584425558-c3ff17d6a8ee?w=400&h=300&fit=crop',
      deliveryTime: '30-40 min',
      restaurant: 'Sushi Master'
    },
    {
      id: 4,
      name: 'Chicken Pasta',
      price: 16.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
      deliveryTime: '25-35 min',
      restaurant: 'Italian Delight'
    }
  ]

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe & Secure',
      description: 'Your food is handled with care and delivered safely'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Delivery',
      description: 'Free delivery on orders over $25'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Delicious Food
                <span className="block text-primary-200">Delivered to You</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                Order your favorite meals from the best restaurants in town. 
                Fast delivery, great prices, and amazing taste guaranteed.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your delivery address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors">
                  Find Food
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504674900240-8947e31be2f6?w=600&h=400&fit=crop"
                alt="Delicious food"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide variety of food categories and find your perfect meal
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card p-4 text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Items</h2>
              <p className="text-gray-600">Most loved dishes from our partner restaurants</p>
            </div>
            <Link to="/menu" className="btn-primary flex items-center space-x-2">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    ${item.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.restaurant}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{item.deliveryTime}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 btn-primary">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 