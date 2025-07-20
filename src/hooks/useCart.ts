import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, options?: { color?: string; size?: string }) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => 
          item.id === product.id && 
          item.selectedColor === options?.color && 
          item.selectedSize === options?.size
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id &&
          item.selectedColor === options?.color &&
          item.selectedSize === options?.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { 
        ...product, 
        quantity: 1,
        selectedColor: options?.color,
        selectedSize: options?.size
      }];
    });
  };

  const removeItem = (id: string, color?: string, size?: string) => {
    setItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === id && item.selectedColor === color && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (id: string, quantity: number, color?: string, size?: string) => {
    if (quantity <= 0) {
      removeItem(id, color, size);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
};