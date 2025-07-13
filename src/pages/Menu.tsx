import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, Search, Filter, Plus, Minus } from 'lucide-react'
import toast from 'react-hot-toast'

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [cart, setCart] = useState<{[key: number]: number}>({})

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'sushi', name: 'Sushi', icon: '🍣' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'salad', name: 'Salads', icon: '🥗' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'pizza',
      price: 18.99,
      rating: 4.8,
      deliveryTime: '25-35 min',
      restaurant: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop&auto=format',
      description: 'Classic tomato sauce with mozzarella cheese and fresh basil'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      category: 'pizza',
      price: 20.99,
      rating: 4.7,
      deliveryTime: '25-35 min',
      restaurant: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&auto=format',
      description: 'Spicy pepperoni with melted cheese on crispy crust'
    },
    {
      id: 3,
      name: 'Classic Burger',
      category: 'burger',
      price: 12.99,
      rating: 4.6,
      deliveryTime: '20-30 min',
      restaurant: 'Burger House',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format',
      description: 'Juicy beef patty with lettuce, tomato, and special sauce'
    },
    {
      id: 4,
      name: 'Cheese Burger',
      category: 'burger',
      price: 14.99,
      rating: 4.5,
      deliveryTime: '20-30 min',
      restaurant: 'Burger House',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop&auto=format',
      description: 'Classic burger topped with melted cheddar cheese'
    },
    {
      id: 5,
      name: 'California Roll',
      category: 'sushi',
      price: 15.99,
      rating: 4.7,
      deliveryTime: '30-40 min',
      restaurant: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      description: 'Fresh avocado, cucumber, and crab meat roll'
    },
    {
      id: 6,
      name: 'Salmon Nigiri',
      category: 'sushi',
      price: 13.99,
      rating: 4.8,
      deliveryTime: '30-40 min',
      restaurant: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1645120091968-5f24af8eaff5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Fresh salmon over seasoned rice'
    },
    {
      id: 7,
      name: 'Chicken Pasta',
      category: 'pasta',
      price: 16.99,
      rating: 4.5,
      deliveryTime: '25-35 min',
      restaurant: 'Italian Delight',
      image: 'https://images.unsplash.com/photo-1607116667981-ff148a14e975?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Creamy pasta with grilled chicken and herbs'
    },
    {
      id: 8,
      name: 'Caesar Salad',
      category: 'salad',
      price: 11.99,
      rating: 4.4,
      deliveryTime: '15-25 min',
      restaurant: 'Fresh Greens',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&auto=format',
      description: 'Fresh romaine lettuce with caesar dressing and croutons'
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      category: 'dessert',
      price: 8.99,
      rating: 4.9,
      deliveryTime: '20-30 min',
      restaurant: 'Sweet Treats',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&auto=format',
      description: 'Rich chocolate cake with chocolate ganache'
    }
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'time':
        return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0])
      default:
        return 0
    }
  })

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
    toast.success('Added to cart!')
  }

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Menu</h1>
          <p className="text-gray-600">Discover delicious dishes from our partner restaurants</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="time">Fastest Delivery</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden"
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
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.deliveryTime}</span>
                  </div>
                </div>

                {/* Cart Controls */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                  <div className="flex items-center space-x-2">
                    {cart[item.id] ? (
                      <>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="text-sm font-medium text-gray-900">{cart[item.id]}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu 