import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext(undefined);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getToastBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`max-w-xs w-full rounded-md shadow-lg p-4 text-white font-semibold ${getToastBgColor(type)}`}
          >
            {message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
