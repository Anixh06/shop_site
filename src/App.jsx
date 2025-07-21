import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import { ToastProvider, useToast } from './components/Toast';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showCheckout, setShowCheckout] = useState(false);

  const cart = useCart();
  const { addToast } = useToast();

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCheckout = () => {
    cart.setIsOpen(false);
    setShowCheckout(true);
  };

  const handleOrderComplete = () => {
    cart.clearCart();
    setShowCheckout(false);
    addToast('Order completed successfully!', 'success');
  };

  const handleAddToCart = (product) => {
    cart.addItem(product);
    addToast(`${product.name} added to cart`, 'success');
  };

  const handleRemoveItem = (id, color, size) => {
    cart.removeItem(id, color, size);
    addToast('Item removed from cart', 'info');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cart.getTotalItems()}
        onCartClick={() => cart.setIsOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <ProductGrid
          products={filteredAndSortedProducts}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </main>
      
      <Cart
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      
      <Checkout
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        items={cart.items}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
