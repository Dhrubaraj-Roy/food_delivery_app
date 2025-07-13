import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  MapPin, 
  Phone, 
  ArrowLeft,
  Star,
  MessageCircle
} from 'lucide-react'

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(2)
  const [estimatedTime, setEstimatedTime] = useState('25-35 min')
  const [driverInfo, setDriverInfo] = useState({
    name: 'John Smith',
    phone: '+1 (555) 123-4567',
    vehicle: 'Toyota Camry - ABC123'
  })

  const orderDetails = {
    orderId: '#FD-2024-001',
    items: [
      { name: 'Margherita Pizza', quantity: 2 },
      { name: 'Classic Burger', quantity: 1 },
      { name: 'California Roll', quantity: 1 }
    ],
    total: 67.96,
    address: '123 Main Street, Apt 4B, New York, NY 10001'
  }

  const trackingSteps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been received and confirmed',
      icon: CheckCircle,
      completed: true
    },
    {
      id: 2,
      title: 'Preparing',
      description: 'Your food is being prepared by the restaurant',
      icon: Clock,
      completed: true
    },
    {
      id: 3,
      title: 'On the Way',
      description: 'Your order is being delivered',
      icon: Truck,
      completed: currentStep >= 3
    },
    {
      id: 4,
      title: 'Delivered',
      description: 'Your order has been delivered',
      icon: CheckCircle,
      completed: currentStep >= 4
    }
  ]

  // Simulate order progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) {
          return prev + 1
        }
        return prev
      })
    }, 10000) // Update every 10 seconds for demo

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-900">Order Tracking</h1>
            <p className="text-gray-600">{orderDetails.orderId}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tracking Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Status</h2>
              
              <div className="space-y-6">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = step.id === currentStep
                  const isCompleted = step.completed
                  
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      {/* Step Icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : isActive 
                            ? 'bg-primary-500 text-white' 
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          isCompleted || isActive ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm ${
                          isCompleted || isActive ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                        {isActive && (
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-primary-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '60%' }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Driver Information */}
            {currentStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6 mb-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Driver</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-lg">
                      {driverInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{driverInfo.name}</h4>
                    <p className="text-sm text-gray-600">{driverInfo.vehicle}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Order Details */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Details</h3>
              <div className="space-y-3">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{item.quantity}x {item.name}</span>
                  </div>
                ))}
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${orderDetails.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery Info</h3>
              
              {/* Estimated Time */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span className="font-medium text-gray-900">Estimated Delivery</span>
                </div>
                <p className="text-2xl font-bold text-primary-600">{estimatedTime}</p>
              </div>

              {/* Delivery Address */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span className="font-medium text-gray-900">Delivery Address</span>
                </div>
                <p className="text-sm text-gray-600">{orderDetails.address}</p>
              </div>

              {/* Order Actions */}
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  Contact Support
                </button>
                <button className="w-full btn-secondary">
                  Download Receipt
                </button>
              </div>

              {/* Rate Order */}
              {currentStep >= 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-4 bg-yellow-50 rounded-lg"
                >
                  <h4 className="font-medium text-gray-900 mb-2">Rate your order</h4>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-yellow-400 hover:text-yellow-500 transition-colors"
                      >
                        <Star className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTracking 