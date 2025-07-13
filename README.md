# 🍕 Food Delivery App

A modern, responsive food delivery application built with React, TypeScript, and Tailwind CSS. This project features a beautiful UI with smooth animations and a complete ordering flow.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Complete Ordering Flow**: Browse menu, add to cart, checkout, and track orders
- **Real-time Tracking**: Live order status updates with driver information
- **Search & Filter**: Find food by category, price, rating, and delivery time
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Cart**: Add/remove items with quantity controls
- **Payment Integration**: Secure checkout with multiple payment options

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food-delivery-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📱 Pages & Features

### 🏠 Home Page
- Hero section with search functionality
- Featured categories with icons
- Popular items showcase
- Service highlights (Fast Delivery, Safe & Secure, Free Delivery)

### 🍽️ Menu Page
- Comprehensive food catalog
- Advanced search and filtering
- Category-based filtering
- Sort by price, rating, delivery time
- Add to cart functionality
- Quantity controls

### 🛒 Cart Page
- Order summary with item details
- Quantity adjustment
- Price breakdown (subtotal, delivery fee, tax)
- Payment method selection
- Promo code input

### 💳 Checkout Page
- Personal information form
- Delivery address input
- Payment information
- Order summary sidebar
- Security indicators

### 📍 Order Tracking Page
- Real-time order status
- Progress indicators
- Driver information (when available)
- Estimated delivery time
- Order rating system

## 🎨 Design System

### Colors
- **Primary**: Orange gradient (#f2751a to #e35a0f)
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green for completed states
- **Warning**: Yellow for ratings
- **Error**: Red for destructive actions

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Consistent shadow and border radius
- **Inputs**: Focus states with primary color
- **Icons**: Lucide React icons throughout

### Animations
- **Page Transitions**: Framer Motion animations
- **Hover Effects**: Smooth transitions
- **Loading States**: Spinner animations
- **Progress Bars**: Animated order tracking

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Food Items
Edit the `menuItems` array in `src/pages/Menu.tsx`:

```typescript
const menuItems = [
  {
    id: 10,
    name: 'New Item',
    category: 'pizza',
    price: 19.99,
    rating: 4.5,
    deliveryTime: '25-35 min',
    restaurant: 'Restaurant Name',
    image: 'image-url',
    description: 'Item description'
  }
]
```

### Modifying Categories
Update the `categories` array in both `Home.tsx` and `Menu.tsx`:

```typescript
const categories = [
  { id: 'new-category', name: 'New Category', icon: '🍕', count: 15 }
]
```

### Styling Changes
Modify `tailwind.config.js` for theme customization:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... other shades
      }
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The app can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Unsplash** for food images
- **Lucide** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations

---
